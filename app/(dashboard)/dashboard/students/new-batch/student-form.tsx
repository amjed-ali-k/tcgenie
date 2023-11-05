"use client"

import React, { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import format from "date-fns/format"
import parse from "date-fns/parse"
import { Command, Loader } from "lucide-react"
import { ControllerRenderProps, useForm } from "react-hook-form"
import * as z from "zod"

import { newStudentFormSchema } from "@/lib/validations/student"
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
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

import { addStudent } from "./add-student"

function StudentForm() {
  const form = useForm<z.infer<typeof newStudentFormSchema>>({
    resolver: zodResolver(newStudentFormSchema),
    defaultValues: {
      admissionNo: undefined,
      name: undefined,
      parentName: undefined,
      parentAddress: undefined,
      phoneNo: undefined,
      caste: undefined,
      religion: undefined,
      dateOfBirth: undefined,
      class: undefined,
      previousInstitution: undefined,
      tcRecievedNo: undefined,
      tcRecievedDate: undefined,
      dateOfLeaving: undefined,
      classAtTimeOfLeaving: undefined,
      reasonForLeaving: undefined,
      tcIssuedNo: undefined,
      tcIssuedDate: undefined,
      remarks: undefined,
      conduct: undefined,
    },
  })

  const [isSubmitting, setisSubmitting] = useState(false)
  const firstInput = useRef<HTMLInputElement>()
  async function onSubmit(values: z.infer<typeof newStudentFormSchema>, e) {
    setisSubmitting(true)
    const res = await addStudent(values)

    toast({
      variant: res.type as any,
      title: res.msg,
    })

    setisSubmitting(false)
    if (res.type === "destructive") return

    form.reset(
      {},
      {
        keepValues: false,
      }
    )
    firstInput.current?.focus()
    // scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="px-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="admissionNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admission no</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="123456"
                      {...field}
                      ref={(n) => {
                        firstInput.current = n as any
                        field.ref(n)
                      }}
                    />
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
                    <Input autoComplete="name" placeholder="Name" {...field} />
                  </FormControl>
                  <FormDescription>Parent Name of student</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
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
                      <Input autoComplete="on" placeholder="Caste" {...field} />
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
                      <Input autoComplete="on" placeholder="" {...field} />
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
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class</FormLabel>
                  <FormControl>
                    <Input autoComplete="on" placeholder="EL S1" {...field} />
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
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
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
          <Button disabled={isSubmitting} type="submit" className="w-64">
            {isSubmitting && <Loader className="mr-2 h-4 w-4 animate-spin" />}
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
