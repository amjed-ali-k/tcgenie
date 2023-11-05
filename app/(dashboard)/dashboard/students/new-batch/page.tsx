import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Students",
  description: "Add new students to your directory.",
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Students"
        text="Add students to your directory."
      />
      <div className="grid gap-4">
        {/* <DataTable columns={columns} data={data} /> */}
      </div>
    </DashboardShell>
  )
}
