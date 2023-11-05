"use server"

import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { newStudentFormSchema } from "@/lib/validations/student"

type FormData = z.infer<typeof newStudentFormSchema>

export async function addStudent(data: FormData) {
  // Get the current session from the server
  const session = await getServerSession(authOptions)

  // If there is no session (i.e., the user is not logged in), return an error message
  if (!session) {
    return {
      type: "destructive",
      msg: "You are not allowed to do this",
    }
  }

  // Try to parse the data using the newStudentFormSchema
  try {
    newStudentFormSchema.parse(data)
  } catch (error) {
    // If the data does not match the schema (i.e., the data is invalid), return an error message
    return {
      type: "destructive",
      msg: "Invalid data",
    }
  }
  // Find the status of the current user
  const _existingStatus = db.status.findUnique({
    where: {
      // The condition to find the status is by the user ID
      userId: session.user.id,
    },
  })

  // Find the first student with the given admission number and created by the current user
  const existingStudent = await db.student.findFirst({
    where: {
      // The condition to find the student is by the admission number and the creator's ID
      admissionNo: data.admissionNo,
      createdById: session.user.id,
    },
  })

  // If the student already exists, return an error message
  if (existingStudent) {
    return {
      type: "destructive",
      msg: "User already exists",
    }
  }

  // Create a new student with the given data and the current user as the creator
  const newStudent = await db.student.create({
    data: {
      // The data for the new student
      ...data,
      // The ID of the user who created the student
      createdById: session.user.id,
    },
  })
  // Get the existing status
  const existingStatus = await _existingStatus

  // Upsert (update or insert) the status in the database
  await db.status.upsert({
    where: {
      // The condition to find the status is by the user ID
      userId: session.user.id,
    },
    create: {
      // If the status does not exist, create a new one with the user ID
      userId: session.user.id,
      // Initialize the total number of students to 1
      totalStudents: 1,
      // If the transfer certificate (TC) issue date exists, initialize the total number of TCs issued to 1, otherwise 0
      totalTCIssued: data.tcIssuedDate ? 1 : 0,
      // If the TC issue date exists, initialize the total number of TCs issued this month to 1, otherwise 0
      totalTCIssuedThisMonth: data.tcIssuedDate ? 1 : 0,
    },
    update: {
      // If the status exists, increment the total number of students by 1
      totalStudents: {
        increment: 1,
      },
      // If the TC issue date exists, increment the total number of TCs issued by 1, otherwise 0
      totalTCIssued: {
        increment: data.tcIssuedDate ? 1 : 0,
      },
      // If the last update month is the current month and the TC issue date exists, increment the total number of TCs issued this month by 1, otherwise set it to 1
      totalTCIssuedThisMonth:
        existingStatus?.updatedAt.getMonth() === new Date().getMonth()
          ? {
              increment: data.tcIssuedDate ? 1 : 0,
            }
          : 1,
      // If the last update year is the current year and the TC issue date exists, increment the total number of TCs issued this year by 1, otherwise set it to 1
      totalTCIssuedThisYear:
        existingStatus?.updatedAt.getFullYear() === new Date().getFullYear()
          ? {
              increment: data.tcIssuedDate ? 1 : 0,
            }
          : 1,
    },
  })

  return {
    type: "default",
    msg: "Student created successfully",
    data: newStudent,
  }
}
