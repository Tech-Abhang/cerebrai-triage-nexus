
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

type SignInValues = z.infer<typeof formSchema>;

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const form = useForm<SignInValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(data: SignInValues) {
    toast({
      title: "Signed in (demo)",
      description: (
        <span>
          Welcome, <b>{data.email}</b>!
        </span>
      ),
    });
    setTimeout(() => navigate("/"), 1200);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-blue-950 dark:via-purple-950 dark:to-gray-900">
      <div className="w-full max-w-md bg-white/80 dark:bg-card/70 shadow-2xl rounded-2xl p-8 flex flex-col gap-6 border border-gray-100 dark:border-gray-800 glass-morphism animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-fuchsia-400 to-emerald-500 dark:from-blue-300 dark:via-fuchsia-200 dark:to-emerald-300">
          Sign In
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        type="email"
                        placeholder="you@email.com"
                        autoComplete="email"
                        className="pl-10 pr-3 py-2"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        type="password"
                        placeholder="Enter password"
                        autoComplete="current-password"
                        className="pl-10 pr-3 py-2"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-primary/90 hover:bg-primary text-white font-semibold py-2 rounded-md transition-all duration-150 shadow hover:scale-105"
            >
              Sign In
            </Button>
          </form>
        </Form>
        <div className="text-center text-gray-500 text-sm">
          Back to
          <button
            className="ml-2 text-primary hover:underline underline-offset-2"
            onClick={() => navigate("/")}
            tabIndex={0}
            type="button"
          >
            Landing Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
