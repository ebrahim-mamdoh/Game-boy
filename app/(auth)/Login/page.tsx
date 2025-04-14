'use client'
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from "../../components/defaults/Logo";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MaxWidthWrapper from '@/app/components/defaults/MaxWidthWrapper';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log('Form Data:', data);
  };
  const [isPending, startTransition] = useTransition();

  return (
    <MaxWidthWrapper
      customPadding={" py-14"}
      className="flex flex-col gap-4 items-center w-full bg-black/60 rounded-2xl border border-input"
    >
      <Logo />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-6"
        >
          {/* Email Field */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    className="input-class" // Replace with your input styling
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="password"
                    className="input-class" // Replace with your input styling
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending} type="submit">
            Submit
          </Button>
        </form>
      </Form>

      <div className="capitalize text-base font-semibold flex items-center gap-2">
        <p className="text-gray-50">Do not have an account ?!</p>
        <Link className="text-rose-500 hover:underline" href={"/signup"}>
          Register With Us Now!
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}