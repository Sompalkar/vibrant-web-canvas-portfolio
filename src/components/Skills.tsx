
import { skills } from '@/utils/data';
import { Card, CardContent } from "@/components/ui/card";
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = Array.from(
    new Set(skills.map(skill => skill.category))
  );
  
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Tech Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to create modern web experiences
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button 
            variant={!activeCategory ? "default" : "outline"}
            className={!activeCategory ? "bg-web3-purple hover:bg-web3-purple/90" : "border-web3-purple/30"}
            onClick={() => setActiveCategory(null)}
          >
            All
          </Button>
          
          {categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "bg-web3-purple hover:bg-web3-purple/90" : "border-web3-purple/30"}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill) => (
            <Card key={skill.name} className="glass hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="text-2xl mb-2">{skill.icon}</div>
                <h3 className="font-medium text-center">{skill.name}</h3>
                <span className="text-xs text-muted-foreground mt-1 capitalize">{skill.category}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
