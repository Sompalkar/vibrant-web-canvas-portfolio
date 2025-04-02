
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { BriefcaseBusiness, Calendar, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Web3 Technologies Inc.",
    date: "2022 - Present",
    description: "Leading frontend development for decentralized applications. Implementing responsive UI with React, TypeScript, and Web3 libraries.",
    icon: BriefcaseBusiness,
    type: "work"
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovation Labs",
    date: "2020 - 2022",
    description: "Developed modern web applications using React and NextJS. Collaborated with UX designers to create intuitive interfaces.",
    icon: BriefcaseBusiness,
    type: "work"
  },
  {
    title: "Master's in Computer Science",
    company: "Tech University",
    date: "2018 - 2020",
    description: "Specialized in User Experience and Frontend Development. Thesis on improving website accessibility through AI.",
    icon: GraduationCap,
    type: "education"
  },
  {
    title: "Web Development Bootcamp",
    company: "Code Academy",
    date: "2018",
    description: "Intensive 12-week bootcamp focusing on JavaScript, React, and modern frontend technologies.",
    icon: Award,
    type: "education"
  },
  {
    title: "Junior Developer",
    company: "Startup Ventures",
    date: "2017 - 2018",
    description: "Built and maintained responsive websites. Implemented designs using HTML, CSS, and JavaScript.",
    icon: BriefcaseBusiness,
    type: "work"
  },
];

const TimelineItem = ({ experience, index }: { experience: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      className={`timeline-item mb-16 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="timeline-marker">
        <motion.div 
          className="absolute w-full h-full bg-web3-purple rounded-full"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
        />
      </div>
      
      <div className={`w-full md:w-5/12 pl-6 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <motion.div 
          className="glass p-6 rounded-lg hover-lift"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(126, 34, 206, 0.3)" }}
        >
          <div className="flex items-center mb-2">
            <div className="p-2 rounded-full bg-web3-purple/10 mr-3">
              <experience.icon className="h-5 w-5 text-web3-purple" />
            </div>
            <h3 className="font-bold text-lg">{experience.title}</h3>
          </div>
          
          <div className="mb-2">
            <div className="text-sm text-muted-foreground flex items-center">
              <span className="font-medium text-web3-pink">{experience.company}</span>
            </div>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{experience.date}</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">{experience.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Experience & Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise
          </p>
        </motion.div>
        
        <div className="timeline-container px-4">
          <motion.div 
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
