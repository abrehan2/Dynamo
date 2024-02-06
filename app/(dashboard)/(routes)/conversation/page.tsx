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
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import axios from "axios";
import Empty from "@/components/Empty";
import Skeleton from "@/components/Skeleton";
import { useToast } from "@/components/ui/use-toast";

const Conversation = () => {
  const [message, setMessage] = useState<ChatCompletionRequestMessage[]>([]);
  const [error, setError] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const router = useRouter();
  const isLoading = form.formState.isSubmitting;

  useEffect(() => {
    if (error) {
      toast({
        description: error,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const submitHandler = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...message, userMessage];

      const res = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      setMessage((curr) => [...curr, userMessage, res.data]);
      form.reset();
    } catch (err: any) {
      // TODO: ADD SUBSCRIPTION

      setError(err.message);
    } finally {
      router.refresh();
    }
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

        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Skeleton />
            </div>
          )}

          {message.length === 0 && !isLoading && (
            <Empty label="The conversation has not started yet." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {message.map((m) => (
              <div key={m.content}>{m.content}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
