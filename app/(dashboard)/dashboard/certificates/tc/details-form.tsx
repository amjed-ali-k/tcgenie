"use client"

import React, { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Student } from "@prisma/client"
import format from "date-fns/format"
import parse from "date-fns/parse"
import { Command, Loader } from "lucide-react"
import { ControllerRenderProps, useForm } from "react-hook-form"
import * as z from "zod"

import { tcIssueFormSchema } from "@/lib/validations/student"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { Textarea } from "@/components/ui/textarea"
import { DateInput } from "@/components/date-input"

function StudentForm({
  student,
  onSubmit,
}: {
  student: Student
  onSubmit: (data: z.infer<typeof tcIssueFormSchema>) => void
}) {
  const form = useForm<z.infer<typeof tcIssueFormSchema>>({
    resolver: zodResolver(tcIssueFormSchema),
    defaultValues: student as any,
  })
  console.log(form.formState.errors)
  return (
    <div className="px-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Accordion
            defaultValue="item-2"
            type="single"
            collapsible
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Student Details</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-4 px-1">
                  <FormField
                    control={form.control}
                    name="admissionNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Admission no</FormLabel>
                        <FormControl>
                          <Input placeholder="123456" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="name"
                            placeholder="Amjed Ali K"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Name of student</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="parentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Parent Name</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="name"
                            placeholder="Name"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Parent Name of student
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 px-1">
                  <FormField
                    control={form.control}
                    name="parentAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Parent Address</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={7}
                            autoComplete="street-address"
                            placeholder="Enter full address"
                            className="h-auto"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          You can use multi-line text here.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phoneNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              autoComplete="tel"
                              placeholder="97xxxxxxxx"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>Phone No of student</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="caste"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Caste</FormLabel>
                          <FormControl>
                            <Input
                              autoComplete="on"
                              placeholder="Caste"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>Caste of student</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="religion"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Religion</FormLabel>
                          <FormControl>
                            <Input
                              autoComplete="on"
                              placeholder=""
                              {...field}
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of birth</FormLabel>
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
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 px-1">
                  <FormField
                    control={form.control}
                    name="class"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Class</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="on"
                            placeholder="EL S1"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="previousInstitution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Institution</FormLabel>
                        <FormControl>
                          <Input autoComplete="on" placeholder="" {...field} />
                        </FormControl>
                        <FormDescription>
                          Previous institution student attended
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tcRecievedNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TC recieved no</FormLabel>
                        <FormControl>
                          <Input autoComplete="on" placeholder="" {...field} />
                        </FormControl>
                        <FormDescription>
                          TC No when it is recieved on admission
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tcRecievedDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TC recieved date</FormLabel>
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
                    name="dateOfAdmission"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Admission</FormLabel>
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
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Issue Details</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-4 px-1">
                  <Input
                    type="hidden"
                    value={student.id}
                    {...form.register("id")}
                  />
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
                  <FormField
                    control={form.control}
                    name="workingDays"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Working Days</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="on"
                            placeholder="203"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="attendedDays"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attended Days</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="on"
                            placeholder="203"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastAttendanceDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last attendance date</FormLabel>
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
                    name="rollRemovedDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Roll removed date</FormLabel>
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
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="allFeesPaid"
                    render={({ field }) => (
                      <FormItem className="flex h-fit flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>All fees are paid</FormLabel>
                          <FormDescription>
                            You only have to enter this information when
                            generating certificate.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isQualifiedForHigherClass"
                    render={({ field }) => (
                      <FormItem className="flex h-fit flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Is qualified for higher class</FormLabel>
                          <FormDescription>
                            You only have to enter this information when
                            generating certificate.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hasFeeConcession"
                    render={({ field }) => (
                      <FormItem className="flex h-fit flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Has fee concession</FormLabel>
                          <FormDescription>
                            You only have to enter this information when
                            generating certificate.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-3 gap-4 px-1">
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
