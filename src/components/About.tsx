
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image/Avatar Side */}
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden glass glow-border">
                <div className="w-full h-full bg-gradient-to-br from-web3-purple/20 to-web3-blue/20 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Decoration elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-web3-purple/5 rounded-2xl blur-3xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-web3-blue/5 rounded-2xl blur-3xl"></div>
            </div>
          </div>
          
          {/* Text Side */}
          <div className="w-full md:w-3/5">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-gradient">About Me</span>
              </h2>
              
              <p className="text-muted-foreground">
                I am a passionate developer specializing in frontend development with a background in Web3 technologies. With over 5 years of experience, I've worked on projects ranging from interactive websites to decentralized applications.
              </p>
              
              <p className="text-muted-foreground">
                My approach combines aesthetic design with efficient functionality, ensuring each project not only looks great but performs exceptionally. I'm particularly interested in blockchain technology and its applications in creating more transparent and user-centric digital experiences.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-6">
                <div>
                  <h3 className="text-xl font-mono font-semibold text-web3-purple">5+</h3>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-mono font-semibold text-web3-purple">50+</h3>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-mono font-semibold text-web3-purple">20+</h3>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" className="border-web3-purple/30 hover:border-web3-purple hover:bg-web3-purple/10 transition-all duration-300">
                  More About Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
