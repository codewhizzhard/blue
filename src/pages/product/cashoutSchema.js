import { z } from "zod";

const CashOutSchema = z.object({
  ////paymentRef: z.string().min(3, "Payment reference is too short").max(50, "Too long"),
  
  saveUserDetails: z.boolean().optional(),

  userDetails: z.object({
    firstName: z.string().min(2, "First name too short").max(30, "First name too long"),
    lastName: z.string().min(2, "Last name too short").max(30, "Last name too long"),
    country: z.string().min(2, "Invalid country").max(56),
    phoneNumber: z.string().min(7, "Too short").max(15, "Too long"),
  }),

  /* shippingMethod: z.object({
    dateToArrive: z.string().min(5, "Invalid date").max(30),
    deliveryCharges: z.string().min(1).max(10), // If number, use `.transform` or `.preprocess`
  }), */

  shippingAddress: z.object({
    streetAddress: z.string().min(5, "Address too short").max(100, "Address too long"),
    appartmentSuiteOrUnit: z.string().min(1).max(30).optional(),
    city: z.string().min(2, "City too short").max(50),
    state: z.string().min(2, "State too short").max(50),
    postalCode: z.string().min(3, "Postal code too short").max(10, "Postal code too long"),
  }),
});

export default CashOutSchema;
