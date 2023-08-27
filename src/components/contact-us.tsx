import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import contact from "../../public/contact.svg";
import Image from "next/image";
import Section from "./section";

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  content: z.string().nonempty(),
});

export default function ContactUs() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <Section
      className="grid lg:grid-cols-2 gap-16 items-center"
      title="Connecting with Us Made Simple."
      description="Reach out to us effortlessly through our user-friendly contact form. Whether you have questions, project inquiries, or simply want to chat, we're here to listen and provide tailored solutions. Your communication matters, and we're excited to connect with you"
    >
      <div className="items-center justify-end hidden lg:flex">
        <Image src={contact} alt="Contact us" />
      </div>
      <div className="flex justify-start">
        <Form {...form}>
          <form
            className="flex flex-col gap-4 w-full lg:max-w-lg"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" />
                  </FormControl>
                  <FormDescription>Enter your name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="example@example.com" type="email" />
                  </FormControl>
                  <FormDescription>Enter your email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="content"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your email here.</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Hello, I hope this email..."
                      rows={8}
                    />
                  </FormControl>
                  <FormDescription>Enter your name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-fit">
              <Send className="w-4 h-4" />
              Send
            </Button>
          </form>
        </Form>
      </div>
    </Section>
  );
}
