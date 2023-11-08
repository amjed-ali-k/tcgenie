"use client"

import React, { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import format from "date-fns/format"
import parse from "date-fns/parse"
import { Command, Loader } from "lucide-react"
import { ControllerRenderProps, useForm } from "react-hook-form"
import * as z from "zod"

import { tcIssueFormSchema } from "@/lib/validations/student"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"

function StudentForm({
  id,
  onSubmit,
}: {
  id: string
  onSubmit: (data: z.infer<typeof tcIssueFormSchema>) => void
}) {
  const form = useForm<z.infer<typeof tcIssueFormSchema>>({
    resolver: zodResolver(tcIssueFormSchema),
  })

  return (
    <div className="px-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-3 gap-4">
            <Input type="hidden" value={id} {...form.register("id")} />
            <FormField
              control={form.control}
              name="dateOfLeaving"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of leaving</FormLabel>
                  <FormControl>
                    <DateInput {...field} />
                  </FormControl>
                  <FormDescription>
                    DD-MM-YYYY format, seperated by - or /
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="classAtTimeOfLeaving"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class at time leaving</FormLabel>
                  <FormControl>
                    <Input autoComplete="on" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reasonForLeaving"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for leaving</FormLabel>
                  <FormControl>
                    <Input autoComplete="on" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tcIssuedNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>TC issued number</FormLabel>
                  <FormControl>
                    <Input autoComplete="on" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>Sl No. of issued TC</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tcIssuedDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>TC Issued date</FormLabel>
                  <FormControl>
                    <DateInput {...field} />
                  </FormControl>
                  <FormDescription>
                    DD-MM-YYYY format, seperated by - or /
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Input autoComplete="on" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>Enter remarks here</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="conduct"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conduct</FormLabel>
                  <FormControl>
                    <Input autoComplete="on" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>Enter conduct here</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="w-64"
          >
            {form.formState.isSubmitting && (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit
            <span className="ml-8 flex items-center">
              <Command className="inline-block h-3 w-3" /> +S
            </span>
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default StudentForm

const DateInput = ({
  onChange,
  onBlur,
  value,
  ...field
}: ControllerRenderProps) => {
  const [currentValue, setcurrentValue] = useState<string>()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setcurrentValue(e.target.value)
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault()
    const val = e.target.value.replaceAll("/", "-").replaceAll(" ", "-")
    if (val === "") return onBlur()
    if (!val) return onBlur()
    try {
      const date = parse(val, "dd-MM-yyyy", new Date())
      setcurrentValue(format(date, "dd-MM-yyyy"))
      onChange(date)
    } catch (error) {
      setcurrentValue("Invalid Date")
    }
    onBlur()
  }

  return (
    <Input
      autoComplete="on"
      placeholder="31-01-2001"
      onBlur={handleBlur}
      onChange={handleChange}
      value={currentValue}
      {...field}
    />
  )
}
