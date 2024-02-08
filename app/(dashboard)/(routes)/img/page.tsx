"use client";

// IMPORTS -
import * as z from "zod";
import { Download, ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  amountOptions,
  imgSchema,
  resolutionOptions,
} from "@/app/partials/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";

// COMPONENTS -
import Empty from "@/components/Empty";
import Skeleton from "@/components/Skeleton";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Heading from "@/components/Heading";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";

// CODE -
const Visuals = () => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof imgSchema>>({
    resolver: zodResolver(imgSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
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

  const submitHandler = async (values: z.infer<typeof imgSchema>) => {
    try {
      setImages([]);

      console.log(values);

      const res = await axios.post("/api/img", values);

      const urls = res.data.map((image: { url: string }) => image.url);

      setImages(urls);

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
        title="Visuals"
        description="Let's kick it into high gear and vibe with visuals!"
        Icon={ImageIcon}
        iconColor="text-pink-600"
        bgColor="bg-pink-600/10"
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
                  <FormItem className="md:col-span-7 col-span-12">
                    <FormControl className="m-0 p-0">
                      <Input
                        {...field}
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent
                        shadow-none bg-zinc-100 px-3"
                        disabled={isLoading}
                        placeholder="Turn your prompts into visuals"
                        autoComplete="off"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2 md:order-1 order-1">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resolution"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2 md:order-2 order-1">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 md:col-span-1 ml-auto md:ml-0 md:order-3 order-2"
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
          {images.length === 0 && !isLoading && (
            <Empty label="The conversation has not started yet." />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {images.map((src) => (
              <Card key={src} className="rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image alt="Image" fill src={src} />
                </div>

                <CardFooter className="p-2">
                  <Button
                    variant={"secondary"}
                    className="w-full"
                    onClick={() => window.open(src)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visuals;
