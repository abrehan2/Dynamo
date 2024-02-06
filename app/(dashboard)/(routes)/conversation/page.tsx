"use client";

// IMPORTS -
import * as z from "zod";
import Heading from "@/components/Heading";
import { MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "@/app/partials/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Conversation = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const submitHandler = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Let's groove into this conversation! What's on your mind?"
        Icon={MessageCircle}
        iconColor="text-green-600"
        bgColor="bg-green-600/10"
      />

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitHandler)}
              className="
              rounded-lg
              border
              w-full
              p-4
              px-3
              md:px-6
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="md:col-span-11 col-span-12">
                    <FormControl className="m-0 p-0">
                      <Input
                        {...field}
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent
                        shadow-none bg-zinc-100 px-3"
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?"
                        autoComplete="off"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                className="col-span-12 md:col-span-1 ml-auto md:ml-0"
                disabled={isLoading}
              >
                Say
              </Button>
            </form>
          </Form>
        </div>

        <div className="space-y-4 mt-4">Response</div>
      </div>
    </div>
  );
};

export default Conversation;
