import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import work1 from "@assets/stock_images/modern_web_design_pr_26d208ae.jpg";
// import work2 from "@assets/stock_images/modern_web_design_pr_855057ce.jpg";
// import work3 from "@assets/stock_images/modern_web_design_pr_73d363ce.jpg";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function WorksSection() {
  const projects = [
    {
      title: "Plataforma E-commerce",
      category: "Desenvolvimento Web",
      description: "Sistema completo de vendas online com gestão de estoque e pagamentos.",
      // image: work1,
    },
    {
      title: "App Mobile Financeiro",
      category: "Aplicativo Mobile",
      description: "Aplicativo para gestão financeira pessoal com análises inteligentes.",
      // image: work2,
    },
    {
      title: "Dashboard Corporativo",
      category: "Business Intelligence",
      description: "Painel de controle com métricas e relatórios em tempo real.",
      // image: work3,
    },
    {
      title: "Portal Educacional",
      category: "Plataforma Digital",
      description: "Sistema de ensino online com videoaulas e avaliações.",
      // image: work1,
    },
    {
      title: "Sistema de Agendamento",
      category: "Automação",
      description: "Solução para agendamento e gestão de consultas médicas.",
      // image: work2,
    },
    {
      title: "Rede Social Corporativa",
      category: "Comunicação",
      description: "Plataforma de comunicação interna para empresas.",
      // image: work3,
    },
  ];

  return (
    <section id="works" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Nossos Trabalhos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card
                className="overflow-hidden hover-elevate group cursor-pointer h-full"
                data-testid={`card-work-${index}`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    // src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3" data-testid={`badge-category-${index}`}>
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
