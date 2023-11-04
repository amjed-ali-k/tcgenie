import { CardSkeleton } from "@/components/card-skeleton"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export default function DashboardStudentsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Students"
        text="Add students to your directory."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
