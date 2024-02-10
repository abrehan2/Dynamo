"use client";

// IMPORTS -
import * as z from "zod";
import { Code } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "@/app/partials/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";

// COMPONENTS -
import UserAvatar from "@/components/User-Avatar";
import BotAvatar from "@/components/Bot-Avatar";
import Empty from "@/components/Empty";
import Skeleton from "@/components/Skeleton";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";
import ReactMarkdown from "react-markdown";
import { ChatCompletionRequestMessage } from "@/app/partials/types";

// CODE -
const Coding = () => {
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

      const res = await axios.post("/api/code", {
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
        title="Code"
        description="Let's groove with some code! What's on the agenda?"
        Icon={Code}
        iconColor="text-red-600"
        bgColor="bg-red-600/10"
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
                        placeholder="Write me a program in python to calculate the area of triangle"
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
              <div
                key={m.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  m?.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {m?.role === "user" ? <UserAvatar /> : <BotAvatar />}

                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div
                        className="
                        overflow-auto w-full my-2 bg-black/10
                        p-2 rounded-lg
                        "
                      >
                        <pre {...props} />
                      </div>
                    ),

                    code: ({ node, ...props }) => (
                      <code {...props} className="bg-black/10 p-1 rounded-lg" />
                    ),
                  }}
                  className={"text-sm overflow-hidden leading-7"}
                >
                  {m.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
