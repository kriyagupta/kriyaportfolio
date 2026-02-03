import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import virtualAssistantImg from "@/assets/virtual-assistant.png";
import vegetableImg from "@/assets/vegetable-ecommerce.png";
import jobPortalImg from "@/assets/job-portal.jpg";
import expenseTrackerImg from "@/assets/expense-tracker.png";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal",
      subtitle: "Full-Stack Application",
      description:
        "A complete job listing platform with separate modules for Admin, Employer, and User. Features secure login/authentication and job posting functionalities.",
      tech: ["Python", "Django", "MySQL", "Bootstrap"],
      image: jobPortalImg,
      link: null,
    },
    {
      title: "AI Virtual Assistant",
      subtitle: "Interactive Web App",
      description:
        "Web-based AI assistant interface with smooth user experience and interactive UI. Built with modern frontend technologies.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: virtualAssistantImg,
      link: "https://kriyagupta.github.io/virtual-assistant/",
    },
    {
      title: "Expense Tracker",
      subtitle: "Frontend Application",
      description:
        "Application to help users manage and track daily spending with data visualization and clean interface design.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: expenseTrackerImg,
      link: "https://kriyagupta.github.io/Expense-tracker/",
    },
    {
      title: "Vegetable E-commerce",
      subtitle: "Responsive Website",
      description:
        "Responsive frontend for a vegetable selling platform with modern design and smooth user experience.",
      tech: ["HTML", "CSS", "Bootstrap"],
      image: vegetableImg,
      link: "https://kriyagupta.github.io/kriyagupta-vegetable/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CardWrapper = project.link ? 'a' : 'div';
            const cardProps = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <CardWrapper
                  {...cardProps}
                  className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-border"
                >
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                      </div>
                      {project.link && (
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
