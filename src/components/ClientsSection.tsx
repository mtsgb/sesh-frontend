import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function ClientsSection() {
  const clients = [
    { name: "TechCorp", industry: "Tecnologia" },
    { name: "FinanceHub", industry: "Finanças" },
    { name: "EduLearn", industry: "Educação" },
    { name: "HealthPlus", industry: "Saúde" },
    { name: "RetailMax", industry: "Varejo" },
    { name: "LogiMove", industry: "Logística" },
    { name: "MediaStream", industry: "Mídia" },
    { name: "FoodExpress", industry: "Alimentação" },
    { name: "AutoDrive", industry: "Automotivo" },
    { name: "GreenEnergy", industry: "Energia" },
    { name: "TravelWay", industry: "Turismo" },
    { name: "SportFit", industry: "Esportes" },
  ];

  const testimonials = [
    {
      text: "A equipe superou todas as expectativas. O projeto foi entregue no prazo e com qualidade excepcional.",
      author: "Maria Silva",
      role: "CEO, TechCorp",
    },
    {
      text: "Profissionais altamente qualificados que realmente entendem as necessidades do negócio.",
      author: "João Santos",
      role: "Diretor, FinanceHub",
    },
    {
      text: "Parceria fundamental para o crescimento da nossa empresa. Resultado impecável!",
      author: "Ana Costa",
      role: "CTO, EduLearn",
    },
  ];

  return (
    <section id="clients" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Clientes</h2>
          <p className="text-lg text-muted-foreground">
            Empresas que confiam em nosso trabalho
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              variants={fadeIn}
            >
              <div
                className="aspect-square flex items-center justify-center p-4 rounded-lg bg-card border hover-elevate cursor-pointer"
                data-testid={`client-logo-${index}`}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground/40 mb-1">
                    {client.name}
                  </div>
                  <div className="text-xs text-muted-foreground/60">{client.industry}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              variants={fadeInUp}
            >
              <Card className="p-6 h-full" data-testid={`card-testimonial-${index}`}>
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
