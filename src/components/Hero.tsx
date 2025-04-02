
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="section-padding pt-32 md:pt-40 min-h-screen flex flex-col justify-center">
      <div className="container max-w-4xl">
        <div className="flex flex-col space-y-6">
          <div className="glass px-4 py-2 w-fit rounded-full mb-4 animate-float">
            <p className="text-sm font-medium">Available for freelance work</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-gradient">Creative Developer</span> with Web3 Expertise
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Building beautiful, interactive digital experiences with modern web technologies 
            and blockchain integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-gradient-to-r from-web3-purple to-web3-pink hover:shadow-glow-lg group transition-all duration-300">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-web3-purple/30 hover:border-web3-purple hover:bg-web3-purple/10 transition-all duration-300">
              Download Resume
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full glass hover:shadow-glow transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full glass hover:shadow-glow transition-all duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-sm text-muted-foreground flex flex-col items-center">
          <span>Scroll Down</span>
          <ArrowRight className="h-4 w-4 transform rotate-90 mt-2" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
