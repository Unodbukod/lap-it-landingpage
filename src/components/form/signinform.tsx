"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";


const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must 8 above characters'}),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="item-center justify-center">
      <div className=" text-center">
        <h1 className="font-bold text-[25px]">Sign In</h1>
        <h1 className="text-gray-500 text-[13px]">
        Enter your email below to sign in to your account.
        </h1>
      </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormControl >
                    <Input className="text-xs" placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="-">
                  <FormControl >
                    <Input className="text-xs" placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center ">
            <Button
                className="w-[200px] bg-white text-black  border-b-gray-60 border hover:text-white hover:bg-blue-500"
                type="submit"
              >
                Sign In with Email
              </Button>
            </div>
            <div className="text-center">
                <h1 className="text-xs text-gray-400">━━━━━━━ OR CONTINUE WITH ━━━━━━━</h1>
            </div>
            <div className="flex justify-center">
              <Button
                className=" bg-white text-black border border-gray-60 hover:text-white hover:bg-blue-500"
                type="submit"
              >
                <div className="w-6 h-6 mr-2">
                  <FaGoogle className="mt-[2px] w-5 h-5"/>
                </div>
                Sign In with Google
              </Button>
            </div>
            <div className="text-center">
                <a href="/login/signup"><h1 className="text-xs text-gray-400">Dont have an account yet? Sign up</h1></a>
            </div>
          </form>
        </Form>
      </div>
  );
};

export default SignInForm;