
import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code } from "lucide-react";
import { projects } from '@/utils/data';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const categories = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my expertise in modern web development
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant={!filter ? "default" : "outline"}
            className={!filter ? "bg-web3-purple hover:bg-web3-purple/90 hover-lift" : "border-web3-purple/30 hover-lift"}
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          
          {categories.map((category) => (
            <Button 
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "bg-web3-purple hover:bg-web3-purple/90 hover-lift" : "border-web3-purple/30 hover-lift"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} variants={item} custom={index}>
              <Card className="glass hover:shadow-glow transition-all duration-300 group overflow-hidden border-white/5 hover:border-web3-purple/30">
                <div className="relative overflow-hidden h-48">
                  <div className="w-full h-full bg-gradient-to-br from-web3-purple/20 to-web3-blue/20 absolute z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Code className="h-4 w-4 text-web3-purple" />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-web3-purple/30 bg-web3-purple/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass hover-glow"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass hover-glow"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  
                  <Button size="sm" variant="outline" className="border-web3-purple/30 hover:border-web3-purple hover:bg-web3-purple/10 hover-lift">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
