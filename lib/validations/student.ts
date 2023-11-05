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
