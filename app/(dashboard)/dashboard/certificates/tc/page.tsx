import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

import TCPage from "./component"

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Generate TC and CC"
        text="Generate certificates."
      />
      <div className="grid gap-10">
        <Card className="">
          <TCPage />
        </Card>
      </div>
    </DashboardShell>
  )
}
