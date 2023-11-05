"use server"

import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { newStudentFormSchema } from "@/lib/validations/student"

type FormData = z.infer<typeof newStudentFormSchema>

export async function addStudent(data: FormData) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return {
      type: "destructive",
      msg: "You are not allowed to do this",
    }
  }
  try {
    newStudentFormSchema.parse(data)
  } catch (error) {
    return {
      type: "destructive",
      msg: "Invalid data",
    }
  }

  const existingStudent = await db.student.findFirst({
    where: {
      admissionNo: data.admissionNo,
      createdById: session.user.id,
    },
  })

  if (existingStudent) {
    return {
      type: "destructive",
      msg: "User already exists",
    }
  }

  const newStudent = await db.student.create({
    data: {
      ...data,
      createdById: session.user.id,
    },
  })

  return {
    type: "default",
    msg: "Student created successfully",
    data: newStudent,
  }
}
