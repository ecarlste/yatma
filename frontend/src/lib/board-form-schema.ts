import { z } from "zod";

export const boardFormSchema = z.object({
  name: z.string().min(3).max(50),
  columns: z
    .array(
      z.object({
        id: z.string().uuid().optional(),
        name: z.string().min(3).max(50),
      }),
    )
    .optional(),
});

export type BoardFormInput = z.infer<typeof boardFormSchema>;
