"use client"

import { Student } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"

import { DataTableColumnHeader } from "@/components/coulmn-header"

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "admissionNo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Admission No" />
    ),
  },
  {
    accessorKey: "dateOfAdmission",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date of Admission" />
    ),
    cell: ({ getValue }) =>
      getValue() ? format(getValue() as Date, "dd/MM/yyyy") : "",
  },
  {
    accessorKey: "class",
    header: "Class",
  },
  {
    accessorKey: "tcIssuedDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="TC Issued" />
    ),
    cell: ({ getValue }) =>
      getValue() ? format(getValue() as Date, "dd/MM/yyyy") : "",
  },
  {
    accessorKey: "remarks",
    header: "Remarks",
  },
]
