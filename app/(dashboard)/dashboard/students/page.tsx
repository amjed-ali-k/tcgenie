import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

import { columns } from "./columns"
import { DataTable } from "./students-table"

export const metadata = {
  title: "Students",
  description: "Students directory",
}

export const revalidate = 60 // 1 hour

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const data = await db.student.findMany({
    where: {
      createdById: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Students" text="Students directory" />
      <div className="grid gap-4">
        <DataTable columns={columns} data={data} />
      </div>
    </DashboardShell>
  )
}
