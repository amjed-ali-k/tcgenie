"use client"

import React, { useState } from "react"
import { Student } from "@prisma/client"
import fmt from "date-fns/format"
import { MousePointerSquareDashed } from "lucide-react"
import { z } from "zod"

import { tcIssueFormSchema } from "@/lib/validations/student"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

import StudentForm from "./details-form"
import SearchUser from "./search-user"

function TCPage() {
  const [selected, setselected] = useState<Student>()
  const onSubmit = (data: z.infer<typeof tcIssueFormSchema>) => {}
  return (
    <div className="p-5">
      <SearchUser value={selected} setValue={setselected} />
      {selected ? (
        <>
          <div className="grid gap-6 p-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>{selected?.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-wrap items-center space-x-5">
                  <div className="my-3">
                    <p className="text-sm font-medium leading-none">
                      {selected?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Admn No: {selected?.admissionNo}
                    </p>
                  </div>
                  <div className="my-3">
                    <p className="text-sm font-medium leading-none">
                      {selected?.parentName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {selected?.parentAddress}
                    </p>
                  </div>
                  <div className="my-3">
                    <p className="text-sm font-medium leading-none">
                      {selected?.caste}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {selected?.religion}
                    </p>
                  </div>
                  <div className="my-3">
                    {selected?.dateOfAdmission && (
                      <p className="text-sm font-medium leading-none">
                        {fmt(selected?.dateOfAdmission, "dd/MM/yyyy")}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {selected?.previousInstitution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div className="mt-3">
            <StudentForm id={selected.id} onSubmit={onSubmit} />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center py-14">
          <MousePointerSquareDashed className="h-24  w-24 text-secondary-foreground" />
          <p>Select student from the list to proceed</p>
        </div>
      )}
    </div>
  )
}

export default TCPage
