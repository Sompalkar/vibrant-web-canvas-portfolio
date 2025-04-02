
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects } from '@/utils/data';

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const categories = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work ranging from web applications to blockchain projects
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button 
            variant={!filter ? "default" : "outline"}
            className={!filter ? "bg-web3-purple hover:bg-web3-purple/90" : "border-web3-purple/30"}
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          
          {categories.map((category) => (
            <Button 
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "bg-web3-purple hover:bg-web3-purple/90" : "border-web3-purple/30"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden h-48">
                <div className="w-full h-full bg-gradient-to-br from-web3-purple/20 to-web3-blue/20 absolute z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
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
                      className="p-2 rounded-full glass hover:shadow-glow transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass hover:shadow-glow transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                
                <Button size="sm" variant="outline" className="border-web3-purple/30 hover:border-web3-purple hover:bg-web3-purple/10">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
