"use client"

import React, { useState } from "react"
import { Student } from "@prisma/client"
import { debounce } from "radash"

import { useGetPermenant } from "@/lib/http"
import { Badge } from "@/components/ui/badge"
import { Combobox } from "@/components/ui/combo-box"

function SearchUser({
  value,
  setValue,
}: {
  value: Student | undefined
  setValue: (value: Student | undefined) => void
}) {
  // const [searchValue, setsearchValue] = useState("")
  const [url, seturl] = useState<string | null>(null)
  const { data: students, isValidating } = useGetPermenant<Student[]>(() => url)

  const handleChange = (value: string) => {
    console.log(value)
    if (!value) return null
    if (value.length > 3) {
      debounce({ delay: 500 }, () => {
        seturl(`/api/students/search?query=${value}`)
      })()
    }
    if (value.length < 4 && url) seturl(null)
  }

  const options = isValidating
    ? [{ label: "Loading...", value: "" }]
    : students?.map((student) => ({
        label: <ResultObject student={student} />,
        value: student.id,
      })) || []
  return (
    <div>
      <Combobox
        onSearchValueChange={(e: any) => handleChange(e.target.value)}
        options={() => options}
        onValueChange={(value) =>
          setValue(students?.find((e) => e.id === value))
        }
        value={value?.name || ""}
        searchPlaceholder="Search for student"
      />
    </div>
  )
}

export default SearchUser

const ResultObject = (props: { student: Student }) => (
  <div className="flex w-full items-center">
    <span className="inline-block w-1/3 overflow-hidden">
      <Badge variant="secondary" className="mr-1">
        Name
      </Badge>
      {props.student.name}
    </span>
    <span className="hidden w-1/3 overflow-hidden lg:inline-block">
      <Badge variant="secondary" className="mr-1">
        Parent
      </Badge>
      {props.student.parentName}
    </span>
    <span className="hidden w-1/3 overflow-hidden xl:inline-block">
      <Badge variant="secondary" className="mr-1">
        Phone
      </Badge>
      {props.student.phoneNo}
    </span>
  </div>
)
