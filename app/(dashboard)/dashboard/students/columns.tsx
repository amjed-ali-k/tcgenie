"use client"

import { Student } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'admissionNo',
    header: 'Admission No',
  },
  {
    accessorKey: 'dateOfAdmission',
    header: 'Date of Admission',
    cell: (props) => format(props.getValue() as Date, 'dd/MM/yyyy'),
  },
  {
    accessorKey: 'class',
    header: 'Class',
  },
  {
    accessorKey: 'tcIssuedDate',
    header: 'TC Issued Date',
    cell: ({getValue}) =>  getValue() ? format(getValue() as Date, 'dd/MM/yyyy'): 'Not issued',
  },
  {
    accessorKey: 'remarks',
    header: 'Remarks',
  }
]
