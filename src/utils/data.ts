import { IconType } from "react-icons/lib";
import { 
  Code, Database, Binary, Braces, Server, 
  Languages, Globe, Blocks, Cpu, AppWindow,
  Brain, Users, MessageSquare, GitBranch,
  Construction, Boxes, Coffee, Leaf,
  Cloud, CloudCog, Terminal, Workflow,
  Bot, FileJson, PackageSearch
} from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'web3' | 'design' | 'other' | 'tools' | 'soft';
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  description?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
}

export interface Award {
  title: string;
  description: string;
}

export const personalInfo = {
  name: "Somnath Palkar",
  title: "CS '24 | Full-stack Developer",
  subtitle: "Associate Software Engineer at Accenture (Starting Sep 2024)",
  location: "Hadapsar, Pune, India",
  phone: "(+91) 8265047578",
  email: "palkarsom1@gmail.com",
  linkedin: "https://linkedin.com/in/sompalkar",
  github: "https://github.com/sompalkar",
  portfolio: "https://somnm.vercel.app/"
}

export const experience = [
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    date: "Starting Sep 2024",
    type: "Full-time",
    location: "Pune, India",
    achievements: [
      "Automated CI/CD pipelines and cloud deployments, accelerating release cycles by 50%",
      "Built and enhanced frontend components with React & TypeScript, improving load times and user engagement",
      "Collaborated with cross-functional teams to implement cloud-native solutions",
      "Contributed to microservices architecture design and implementation",
      "Implemented automated testing strategies improving code quality"
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "PlaceBooking.com",
    description: "A comprehensive property booking platform with secure authentication, payment integration, and cloud storage for property images. Features include property listing, booking management, and secure payments.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Cloudinary", "Payment Gateway", "TypeScript"],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://placebooking.vercel.app",
    githubUrl: "https://github.com/sompalkar/placebooking",
  },
  {
    id: 2,
    title: "SocioMedia.com",
    description: "A full-featured social media platform with user authentication, post sharing, theme switching, and follow functionality. Implements real-time updates and responsive design.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Socket.io", "Redux"],
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/sompalkar/sociomedia",
  },
  {
    id: 3,
    title: "Mern GPT",
    description: "A personalized GPT implementation using OpenAI's API with responsive UI and authentication. Optimized for performance with 30% faster loading times.",
    tags: ["MERN", "OpenAI", "TypeScript", "JWT", "TailwindCSS"],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://merngpt.vercel.app",
    githubUrl: "https://github.com/sompalkar/merngpt",
  },
];

export const skills = [
  // Frontend
  { name: "JavaScript", icon: "⚡ JS", category: 'frontend' },
  { name: "TypeScript", icon: "💼 TS", category: 'frontend' },
  { name: "React", icon: "⚛️ React", category: 'frontend' },
  { name: "HTML5", icon: "📝 HTML", category: 'frontend' },
  { name: "CSS3", icon: "🎨 CSS", category: 'frontend' },
  { name: "Next.js", icon: "▲ Next", category: 'frontend' },
  { name: "Redux", icon: "🔄 Redux", category: 'frontend' },
  { name: "TailwindCSS", icon: "🌊 Tailwind", category: 'frontend' },
  
  // Backend
  { name: "Node.js", icon: "⬢ Node", category: 'backend' },
  { name: "Python", icon: "🐍 Python", category: 'backend' },
  { name: "Django", icon: "🦄 Django", category: 'backend' },
  { name: "Java", icon: "☕ Java", category: 'backend' },
  { name: "C++", icon: "++ C++", category: 'backend' },
  { name: "Express", icon: "🚂 Express", category: 'backend' },
  { name: "MongoDB", icon: "🍃 MongoDB", category: 'backend' },
  { name: "MySQL", icon: "🐬 MySQL", category: 'backend' },
  { name: "PostgreSQL", icon: "🐘 PostgreSQL", category: 'backend' },
  { name: "Redis", icon: "🔴 Redis", category: 'backend' },
  
  // DevOps & Cloud
  { name: "Docker", icon: "🐋 Docker", category: 'tools' },
  { name: "Kubernetes", icon: "⚈ K8s", category: 'tools' },
  { name: "AWS", icon: "☁️ AWS", category: 'tools' },
  { name: "Linux", icon: "🐧 Linux", category: 'tools' },
  { name: "Ansible", icon: "🔧 Ansible", category: 'tools' },
  { name: "DevOps", icon: "♾️ DevOps", category: 'tools' },
  { name: "CI/CD", icon: "🔄 CI/CD", category: 'tools' },
  { name: "Git", icon: "🔄 Git", category: 'tools' },
  
  // Soft Skills
  { name: "Problem Solving", icon: "🧠 Problem Solving", category: 'soft' },
  { name: "Communication", icon: "💬 Communication", category: 'soft' },
  { name: "Team Work", icon: "👥 Team Work", category: 'soft' },
  { name: "AI/ML", icon: "🤖 AI/ML", category: 'soft' }
];

export const education = [
  {
    institution: "SavitriBai Phule University, Pune",
    degree: "Bachelor In Computer Application",
    duration: "2021 - 2024",
    grade: "CGPA - 8.6",
  }
];

export const certificates = [
  {
    title: "Meta Frontend Course - React Basics",
    issuer: "Meta",
  },
  {
    title: "Advanced React Concepts",
    issuer: "Meta",
  }
];

export const awards = [
  {
    title: "Hackathon Participant",
    description: "Participated in multiple hackathons, showcasing problem-solving and coding skills."
  },
  {
    title: "Tech Event Organizer",
    description: "Attended and organized various tech events in college to foster a learning environment."
  }
];
