"use client";

import LoadingButton from "@/components/common/loading-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { forgotPasswordSchema, ForgotPasswordSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdMailOutline } from "react-icons/md";

const ForgotPasswordForm = () => {
  const [isSent, setIsSent] = useState(false);

  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: ForgotPasswordSchema) => {
    console.log(values);
    setIsSent(true);
  };

  return (
    <>
      {isSent ? (
        <div className="flex flex-col items-center gap-5 bg-gray-100 ring-2 ring-gray-200 py-4">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg">
              Email sent to:{" "}
              <span className="text-blue-600 underline">{form.getValues("email")}</span>
            </h1>
            <p className="text-sm text-muted-foreground">Be sure to also check your spam</p>
          </div>

          <div className="p-5 rounded-full flex items-center justify-center bg-blue-100 animate-bounce">
            <MdMailOutline className="size-7 text-blue-600" />
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="johndoe@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton className="w-full" size="lg">
              Reset Password
            </LoadingButton>
          </form>
        </Form>
      )}
    </>
  );
};
export default ForgotPasswordForm;
