import { z } from "zod";

export const boardFormSchema = z.object({
  name: z.string().nonempty("Can't be empty"),
  columns: z
    .array(
      z.object({
        id: z.string().uuid().optional(),
        name: z.string().nonempty("Can't be empty"),
      }),
    )
    .optional(),
});

export type BoardFormInput = z.infer<typeof boardFormSchema>;
