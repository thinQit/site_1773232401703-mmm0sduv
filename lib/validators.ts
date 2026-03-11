import { z } from "zod";

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

export const reservationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[+()\-\s\d]+$/, "Invalid phone number format"),
  date: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  time: z.string().trim().regex(timeRegex, "Time must be in HH:mm format"),
  partySize: z.coerce.number().int().min(1).max(6),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;
