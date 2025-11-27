"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    FieldDescription,
    FieldGroup,
} from "@/components/ui/field";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { ROLES } from "@/lib/roles";
import { LoaderCircle } from "lucide-react";

const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(1, "Password is required"),
    role: z.string().refine((val) => ROLES.includes(val), {
        message: "Select a persona",
    }),
});

type LoginValues = z.infer<typeof loginSchema>;


export function LoginForm({
    onSubmit,
}: {
    onSubmit?: (data: LoginValues) => Promise<void> | void;
}) {
    const form = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            role: "endUser",
        },
    });

    async function handleSubmit(values: LoginValues) {
        console.log(values);
        await onSubmit?.(values);
    }

    const isLoading = form.formState.isSubmitting;

    return (
        <div className={cn("flex flex-col gap-6")}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="p-6 md:p-8">
                            <FieldGroup>

                                {/* HEADER */}
                                <div className="flex flex-col items-center gap-2 text-center">
                                    <h1 className="text-2xl font-bold">Welcome back</h1>
                                    <p className="text-muted-foreground text-balance">
                                        Login to your Acme Inc account
                                    </p>
                                </div>

                                {/* EMAIL */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    id="email"
                                                    type="email"
                                                    placeholder="m@example.com"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* PASSWORD */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-center">
                                                <FormLabel>Password</FormLabel>
                                                <a
                                                    href="#"
                                                    className="ml-auto text-sm underline-offset-2 hover:underline"
                                                >
                                                    Forgot your password?
                                                </a>
                                            </div>
                                            <FormControl>
                                                <Input {...field} id="password" type="password" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* ROLE SELECT */}
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Select a Persona</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a Persona" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="endUser">End user</SelectItem>
                                                            <SelectItem value="admin">Admin</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* SUBMIT BUTTON */}
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? <LoaderCircle className="animate-spin"/> : "Login"}
                                </Button>

                                <FieldDescription className="text-center">
                                    Don&apos;t have an account?{" "}
                                    <Link to="/auth/signup" className="underline">
                                        Sign up
                                    </Link>
                                </FieldDescription>

                            </FieldGroup>
                        </form>
                    </Form>

                    {/* IMAGE PANEL */}
                    <div className="bg-muted relative hidden md:block">
                        <img
                            src="/auth.jpg"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
