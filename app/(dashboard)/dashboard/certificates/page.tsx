import Link from "next/link"
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
        heading="Certificates"
        text="Generate and manage certificates."
      />
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Generate TC</CardTitle>
            <CardDescription>
              Generate Transfer certificate and Conduit certificate.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-end">
            <Link href="/dashboard/certificates/tc">
              <Button>Generate</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              Generate NOC <Badge variant="secondary">Upcoming</Badge>
            </CardTitle>
            <CardDescription>
              Generate Non objection certificate.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex justify-end">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button disabled>Generate</Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardShell>
  )
}
