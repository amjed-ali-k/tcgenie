"use server"

import bcrypt from "bcrypt"
import { z } from "zod"

import { db } from "../db"
import { userNewAuthSchema } from "../validations/auth"

type FormData = z.infer<typeof userNewAuthSchema>

export async function registerUser(data: FormData) {
  const validated = userNewAuthSchema.parse(data)

  if (!validated) {
    return "Invalid data"
  }

  const { name, email, password } = validated

  const existingUser = await db.user.findFirst({
    where: {
      email: email,
    },
  })
  if (existingUser) {
    return "User already exists"
  }

  const user = await db.user.create({
    data: {
      name: name,
      email: email,
      password: await bcrypt.hash(password, 10),

      // Approve now since we don't have email confirmation yet
      isApproved: true,
      approvedAt: new Date(),
    },
  })
  if (user) return true
  return "Unknown error occured"
}
