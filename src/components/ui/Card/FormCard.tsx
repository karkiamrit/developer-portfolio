'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { TextArea } from "@/components/ui/textarea"

const FormSchema = z.object({
    firstname: z.string().min(3, {
        message: 'First name must be atleast 3 characters long',
    }),
    lastname: z.string().min(3, {
        message: 'Last name must be atleast 3 characters long',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address',
    }),
    message: z.string().min(10, {
        message: 'Message must be atleast 10 characters long',
    }).max(1000, {
        message: 'Message must be less than 1000 characters long',
    }),
    phone: z.string(
        {
            message: 'Please enter a valid phone number',
        }
    ).min(10, {
        message: 'Phone number must be atleast 10 digits long',
    }).max(10, {
        message: 'Phone number must be 10 digits long',
    }),
    subject: z.string({
        message: 'Please enter a subject',
    }).min(3, {
        message: 'Subject must be atleast 3 characters long',
    }).max(100, {
        message: 'Subject must be less than 100 characters long',
    }),
});
type Props = {}

const FormCard = (props: Props) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            message: '',
            phone: '',
            subject: '',
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }
    return (
        <Form {...form}>
            <form onChange={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField className=''
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                        <FormItem className='w-64 rounded-[90px] mt-10 ml-10'>
                            <FormControl>
                                <Input type="string" placeholder="First Name*" {...field} className='h-16 rounded-[25px] pl-4 ' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="string" placeholder="Last Name*" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="string" placeholder="Email*" {...field} />
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
                                <Input type="string" placeholder="Phone*" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="string" placeholder="Subject*" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <TextArea placeholder="Message*"  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                {/* <Button type="submit" className="w-full bg-orange-200"></Button>     */}

            </form>
        </Form>
    )
}
export default FormCard