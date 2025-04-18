
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Coffee, Heart, Star } from "lucide-react";

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

  const statsItems = [
    { 
      icon: <Code className="h-5 w-5 text-web3-purple" />,
      value: "5+", 
      label: "Years of Experience" 
    },
    { 
      icon: <Coffee className="h-5 w-5 text-web3-pink" />,
      value: "50+", 
      label: "Projects Completed" 
    },
    { 
      icon: <Star className="h-5 w-5 text-web3-blue" />,
      value: "20+", 
      label: "Happy Clients" 
    },
    { 
      icon: <Heart className="h-5 w-5 text-web3-green" />,
      value: "10+", 
      label: "Open Source Contributions" 
    }
  ];

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
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-xl overflow-hidden glass glow-border hover-lift">
                <div className="w-full h-full bg-gradient-to-br from-web3-purple/20 to-web3-blue/20 flex items-center justify-center">
                  <div className="p-8 backdrop-blur-sm bg-black/10 rounded-full">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              
              {/* Decoration elements */}
              <motion.div 
                className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-web3-purple/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-web3-blue/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
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

              <motion.p 
                className="text-muted-foreground"
                custom={5}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                In my free time, I contribute to open-source projects, write technical articles, and explore emerging technologies in the web3 space. I believe in continuous learning and staying updated with the latest industry trends.
              </motion.p>
              
              <motion.div 
                className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
                custom={6}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {statsItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="hover-lift p-4 glass rounded-lg flex flex-col items-center text-center"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px -5px rgba(126, 34, 206, 0.3)",
                    }}
                  >
                    <div className="mb-2">{item.icon}</div>
                    <h3 className="text-xl font-mono font-semibold">{item.value}</h3>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="pt-4"
                custom={7}
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
