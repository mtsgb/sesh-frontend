import { useState } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import './ContactSection.scss';

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="bg-transparent">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
        variants={fadeInUp}
        className="max-w-md mx-auto"
      >
        <Card className="relative bg-card p-6 md:p-8 border-none">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("closeContactModal"))}
            className="absolute top-4 right-4 text-button-contact hover:text-accent transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl className="border-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-0
                      border border-border"
                    >
                      <Input placeholder="Seu nome" {...field} autoFocus />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl className="border-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-0
                      border border-border"
                    >
                      <Input type="email" placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa (opcional)</FormLabel>
                    <FormControl className="border-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-0
                      border border-border"
                    >
                      <Input placeholder="Nome da empresa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl className="border-none">
                      <Textarea
                        placeholder="Conte-nos sobre seu projeto..."
                        className="min-h-32 max-h-52 resize-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-0
                        border border-border"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full font-thin bg-accent border-none shadow-sm transition-all duration-300  hover:bg-accent/80 hover:font-light hover:shadow-md" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Form>
        </Card>
      </motion.div>
    </section>
  );
}
