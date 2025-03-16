import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"


export const defaultValues = {
    fullName: "",
    email: "",
    Phone: "",
    subject: "",
    message: ""
}

const contactSchema = {
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    Phone: z.string().min(1, "Phone number is required"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required")
}

export const resolver = zodResolver(contactSchema)