import { Target, Users, Lightbulb, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
// import teamImage from "@assets/stock_images/modern_professional__7c9e476f.jpg";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada projeto é desenvolvido com métricas claras e objetivos mensuráveis.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais experientes dedicados ao sucesso do seu projeto.",
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Utilizamos as tecnologias mais modernas do mercado.",
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Processos rigorosos de qualidade em todas as etapas.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Quem Somos</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Somos uma equipe apaixonada por tecnologia e design, comprometida em entregar
              soluções digitais que fazem a diferença. Com anos de experiência no mercado,
              ajudamos empresas a alcançarem seus objetivos através da inovação.
            </p>
            <p className="text-lg text-muted-foreground">
              Nossa missão é transformar desafios complexos em soluções simples e eficientes,
              sempre focando na experiência do usuário e nos resultados do negócio.
            </p>
          </motion.div>
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <img
              // src={teamImage}
              alt="Nossa equipe"
              className="rounded-lg w-full h-auto object-cover"
              data-testid="img-team"
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="p-6 hover-elevate h-full" data-testid={`card-value-${index}`}>
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
