import { redirect } from "next/navigation"
import format from "date-fns/format"
import { Users2 } from "lucide-react"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const status = await db.status.findUnique({
    where: { userId: user.id },
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="">
        {/* <PostCreateButton /> */}
      </DashboardHeader>
      <div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Students
              </CardTitle>
              <Users2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{status?.totalStudents}</div>
              <p className="text-xs text-muted-foreground">
                + {status?.newStudentsThisMonth} new students this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Issued
              </CardTitle>
              <Users2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{status?.totalTCIssued}</div>
              <p className="text-xs text-muted-foreground">
                + {status?.totalTCIssuedThisMonth} tc issues this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Login</CardTitle>
              <Users2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{status?.totalLogins}</div>
              <p className="text-xs text-muted-foreground">
                Last logged in on{" "}
                {format(
                  status?.lastLoginAt || new Date(),
                  "dd-MM-yyyy hh:mm A"
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
