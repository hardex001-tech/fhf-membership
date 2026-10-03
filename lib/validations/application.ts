import { z } from "zod";

export const applicationSchema = z.object({
  // Step 1: Personal Info
  fullName: z.string().min(3, "Full name is required"),
  gender: z.enum(["Female", "Male", "Other"]),
  dob: z.string().optional(),
  phone: z.string().min(8, "Valid phone number is required"),
  whatsapp: z.string().optional(),
  email: z.string().email("Valid email address is required"),
  address: z.string().min(3, "Address is required"),
  state: z.string().min(2, "State of residence is required"),
  lga: z.string().min(2, "LGA is required"),
  occupation: z.string().optional(),
  organization: z.string().optional(),
  education: z.string().optional(),
  
  // Step 2: Membership Info
  membershipType: z.string(),
  reasonToJoin: z.string().min(5, "Please provide a brief reason (min 5 characters)").optional().or(z.literal("")),
  skills: z.array(z.string()).optional(),
  volunteerExp: z.boolean().optional(),
  previousOrg: z.string().optional(),

  // Step 3: Emergency Contact
  emergeName: z.string().min(2, "Emergency contact name required"),
  emergeRelation: z.string().min(2, "Relationship required"),
  emergePhone: z.string().min(8, "Emergency contact phone required"),

  // Step 4: Documents & Identification
  passportUrl: z.string().optional(),
  idType: z.enum(["NATIONAL_ID", "DRIVERS_LICENSE", "INTERNATIONAL_PASSPORT", "VOTERS_CARD", "STUDENT_ID"]).optional(),
  idNumber: z.string().optional(),
  idUrl: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
