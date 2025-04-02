
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image/Avatar Side */}
          <motion.div 
            className="w-full md:w-2/5"
            custom={1}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden glass glow-border hover-lift">
                <div className="w-full h-full bg-gradient-to-br from-web3-purple/20 to-web3-blue/20 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Decoration elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-web3-purple/5 rounded-2xl blur-3xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-web3-blue/5 rounded-2xl blur-3xl"></div>
            </div>
          </motion.div>
          
          {/* Text Side */}
          <div className="w-full md:w-3/5">
            <div className="space-y-6">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold"
                custom={2}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <span className="text-gradient">About Me</span>
              </motion.h2>
              
              <motion.p 
                className="text-muted-foreground"
                custom={3}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                I am a passionate developer specializing in frontend development with a background in Web3 technologies. With over 5 years of experience, I've worked on projects ranging from interactive websites to decentralized applications.
              </motion.p>
              
              <motion.p 
                className="text-muted-foreground"
                custom={4}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                My approach combines aesthetic design with efficient functionality, ensuring each project not only looks great but performs exceptionally. I'm particularly interested in modern web technologies that enhance user experience and accessibility.
              </motion.p>
              
              <motion.div 
                className="pt-4 flex flex-wrap gap-6"
                custom={5}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="hover-lift p-3 glass rounded-lg">
                  <h3 className="text-xl font-mono font-semibold text-web3-purple">5+</h3>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
                
                <div className="hover-lift p-3 glass rounded-lg">
                  <h3 className="text-xl font-mono font-semibold text-web3-purple">50+</h3>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                
                <div className="hover-lift p-3 glass rounded-lg">
                  <h3 className="text-xl font-mono font-semibold text-web3-purple">20+</h3>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="pt-2"
                custom={6}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Button variant="outline" className="border-web3-purple/30 hover:border-web3-purple hover:bg-web3-purple/10 transition-all duration-300">
                  More About Me
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
