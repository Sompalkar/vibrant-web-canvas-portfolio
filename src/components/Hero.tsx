
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="home" className="section-padding pt-32 md:pt-40 min-h-screen flex flex-col justify-center">
      <div className="container max-w-4xl">
        <motion.div 
          className="flex flex-col space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <div className="glass px-4 py-2 w-fit rounded-full mb-4 hover-lift">
              <p className="text-sm font-medium">Available for freelance work</p>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            variants={item}
          >
            <span className="text-gradient">Creative Developer</span> with Web3 Expertise
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            variants={item}
          >
            Building modern, responsive web applications with cutting-edge technologies 
            and elegant design solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={item}
          >
            <Button className="bg-gradient-to-r from-web3-purple to-web3-pink hover:shadow-glow-lg group transition-all duration-300">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-web3-purple/30 hover:border-web3-purple hover:bg-web3-purple/10 transition-all duration-300">
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-4 pt-8"
            variants={item}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full glass hover-glow"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full glass hover-glow"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full glass hover-glow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a href="#about" className="text-sm text-muted-foreground flex flex-col items-center">
          <span>Scroll Down</span>
          <ArrowRight className="h-4 w-4 transform rotate-90 mt-2 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
