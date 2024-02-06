// IMPORTS -
import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Woah, hold up! Where's the prompt at?",
  }),
});