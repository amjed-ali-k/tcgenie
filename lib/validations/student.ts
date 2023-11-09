import parse from "date-fns/parse"
import * as z from "zod"

export const newStudentFormSchema = z.object({
  admissionNo: z.string(),
  name: z.string().min(4, { message: "Name must be atleast 4 characters" }),
  parentName: z.string().optional(),
  parentAddress: z.string().optional(),
  phoneNo: z
    .string()
    .min(10, {
      message: "Phone number must be atleast 10 characters",
    })
    .optional(),
  caste: z.string().optional(),
  religion: z.string().optional(),
  dateOfBirth: z.date().optional(),
  dateOfAdmission: z.date().optional(),
  class: z.string().optional(),
  previousInstitution: z.string().optional(),
  tcRecievedNo: z.string().optional(),
  tcRecievedDate: z.date().optional(),
  //--
  dateOfLeaving: z.date().optional(),
  classAtTimeOfLeaving: z.string().optional(),
  reasonForLeaving: z.string().optional(),
  tcIssuedNo: z.string().optional(),
  tcIssuedDate: z.date().optional(),
  remarks: z.string().optional(),
  conduct: z.string().optional(),
})

const parseDate = (val: string | Date) => {
  try {
    return new Date(val)
  } catch (error) {
    try {
      return parse(val.toString(), "dd-MM-yyyy", new Date())
    } catch (error) {
      return null
    }
  }
}

export const tcIssueFormSchema = z.object({
  id: z.string(),
  admissionNo: z.string(),
  name: z.string().min(4, { message: "Name must be atleast 4 characters" }),
  parentName: z.string().optional(),
  parentAddress: z.string().optional(),
  phoneNo: z
    .string()
    .min(10, {
      message: "Phone number must be atleast 10 characters",
    })
    .optional(),
  caste: z.string().optional(),
  religion: z.string().optional(),
  dateOfBirth: z.union([z.string(), z.date()]).transform(parseDate).optional(),
  dateOfAdmission: z.union([z.string(), z.date()]).transform(parseDate),
  class: z.string().optional(),
  previousInstitution: z.string().optional(),
  tcRecievedNo: z.string().optional(),
  tcRecievedDate: z
    .union([z.string(), z.date()])

    .transform(parseDate)
    .optional(),
  dateOfLeaving: z.union([z.string(), z.date()]).transform(parseDate),
  classAtTimeOfLeaving: z.string().optional(),
  reasonForLeaving: z.string().optional(),
  tcIssuedNo: z.string(),
  tcIssuedDate: z.union([z.string(), z.date()]).transform(parseDate).optional(),
  remarks: z.string().optional(),
  conduct: z.string(),
  // Additional Fields
  isQualifiedForHigherClass: z.boolean().default(false),
  allFeesPaid: z.boolean().default(false),
  hasFeeConcession: z.boolean().default(false),
  lastAttendanceDate: z.union([z.string(), z.date()]).transform(parseDate),
  rollRemovedDate: z.union([z.string(), z.date()]).transform(parseDate),
  workingDays: z.string().optional(),
  attendedDays: z.string().optional(),
  appliedDate: z.union([z.string(), z.date()]).transform(parseDate),
})
