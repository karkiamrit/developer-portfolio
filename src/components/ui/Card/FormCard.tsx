"use client"
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import TextArea  from "@/components/ui/textarea"
import CustomButtonGroup from "../jointbutton";

const FormSchema = z.object({
    firstname: z.string().min(3, {
        message: "First name must be atleast 3 characters long",
    }),
    lastname: z.string().min(3, {
        message: "Last name must be atleast 3 characters long",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    message: z.string().min(10, {
        message: "Message must be atleast 10 characters long",
    }).max(1000, {
        message: "Message must be less than 1000 characters long",
    }),
    phone: z.string().length(10, {
        message: "Phone number must be 10 digits long",
    }),
    subject: z.string().min(3, {
        message: "Subject must be atleast 3 characters long",
    }).max(100, {
        message: "Subject must be less than 100 characters long",
    }),
});

const FormCard = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            message: "",
            phone: "",
            subject: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }
    return (
        <Form {...form}>
            <form onChange={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <div className="flex flex-row gap-5">
                    <FormField 
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                            <FormItem className="mt-10 ml-[50px]">
                                <FormControl>
                                    <Input type="string" placeholder="First Name*" {...field} className="bg-white xl:h-16 h-10 xl:w-72 w-48 rounded-[25px] pl-4 " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                            <FormItem className="mt-10">
                                <FormControl>
                                    <Input type="string" placeholder="Last Name*" {...field} className="bg-white xl:h-16 h-10 xl:w-72 w-48 rounded-[25px] pl-4 " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                </div>
                <div className="flex flex-row gap-5">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="ml-[50px]">
                                <FormControl>
                                    <Input type="string" placeholder="Email*" {...field} className="bg-white xl:h-16 h-10 xl:w-72 w-48 rounded-[25px] pl-4 " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="string" placeholder="Phone*" {...field} className="bg-white xl:h-16 h-10 xl:w-72 w-48 rounded-[25px] pl-4" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                </div>
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem className="ml-[50px]">
                            <FormControl>
                                <Input type="string" placeholder="Subject*" {...field} className="bg-white xl:w-[596px] xl:h-16 h-10 w-[405px]  rounded-[25px] pl-4 " />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="ml-[50px] ">
                            <FormControl>
                                <TextArea placeholder="Message*"  {...field} className="bg-white h-36 xl:w-[596px] w-[405px] rounded-[25px] pl-4 pt-5 resize-none" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <div className="-ml-[330px] pb-10"> 
                    <CustomButtonGroup subbuttonColor="white" mainbuttonColor="#424242" iconTextColor="#424242" content="Send Message"/>  
                </div>    
                 

            </form>
        </Form>
    )
}
export default FormCard