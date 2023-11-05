import { redirect } from "next/navigation"
import format from "date-fns/format"
import { ScrollText, Upload, Users2 } from "lucide-react"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

// Metadata for the page
export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  // If there is no user (i.e., the user is not logged in), redirect to the sign-in page
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  // Get the status of the current user
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
              <div className="text-2xl font-bold">
                {status?.totalStudents || 0}
              </div>
              <p className="text-xs text-muted-foreground">
                + {status?.newStudentsThisMonth || 0} new students this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Issued
              </CardTitle>
              <ScrollText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {status?.totalTCIssued || 0}
              </div>
              <p className="text-xs text-muted-foreground">
                + {status?.totalTCIssuedThisMonth || 0} tc issues this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Login</CardTitle>
              <Upload className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {status?.totalLogins || 0}
              </div>
              <p className="text-xs text-muted-foreground">
                Last logged in on{" "}
                {format(
                  status?.lastLoginAt || new Date(),
                  "dd-MM-yyyy hh:mm a"
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
