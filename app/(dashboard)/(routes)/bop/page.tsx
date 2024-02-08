"use client";

// IMPORTS -
import * as z from "zod";
import { MusicIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "@/app/partials/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

// COMPONENTS -
import Empty from "@/components/Empty";
import Skeleton from "@/components/Skeleton";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";

// CODE -
const Bop = () => {
  const [music, setMusic] = useState<string>();
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
      setMusic(undefined);

      const res = await axios.post("/api/bop", values);
      setMusic(res.data.audio);

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
        title="Bop"
        description="Let's get groovy with some funky beats! What's the vibe you're feeling today?"
        Icon={MusicIcon}
        iconColor="text-purple-600"
        bgColor="bg-purple-600/10"
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
                        placeholder="Piano solo"
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

          {!music && !isLoading && (
            <Empty label="The conversation has not started yet." />
          )}

          {music && (
            <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bop;
