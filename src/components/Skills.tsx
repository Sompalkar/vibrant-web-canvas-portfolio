import { useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { skills } from '@/utils/data';
import { motion, useInView } from "framer-motion";
import * as LucideIcons from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const categories = Array.from(
    new Set(skills.map(skill => skill.category))
  );
  
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;
    
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const categoryColors = {
    frontend: 'from-violet-500 to-purple-600',
    backend: 'from-blue-500 to-cyan-600',
    tools: 'from-emerald-500 to-teal-600',
    soft: 'from-pink-500 to-rose-600'
  };

  const getLucideIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="h-6 w-6" /> : <LucideIcons.Code className="h-6 w-6" />;
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-5 z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Tech Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to create modern web experiences
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant={!activeCategory ? "default" : "outline"}
            className={!activeCategory ? 
              "bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-90 shadow-lg hover:shadow-violet-500/25" : 
              "border-violet-500/30"}
            onClick={() => setActiveCategory(null)}
          >
            All
          </Button>
          
          {categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? 
                `bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} hover:opacity-90 shadow-lg` : 
                "border-violet-500/30"}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              variants={item} 
              custom={index}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <Card className="glass backdrop-blur-xl border-white/10 hover:border-violet-500/30 transition-all duration-500 h-full group">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <motion.div 
                    className="relative z-10 text-3xl mb-3 p-3 rounded-xl bg-white/5 border border-white/10 shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {getLucideIcon(skill.icon)}
                  </motion.div>
                  
                  <motion.h3 
                    className="font-medium text-center relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.h3>
                  
                  <motion.span 
                    className="text-xs text-muted-foreground mt-1 capitalize opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                  >
                    {skill.category}
                  </motion.span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
