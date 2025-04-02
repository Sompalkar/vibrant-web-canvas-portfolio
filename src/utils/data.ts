
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
  category: 'frontend' | 'backend' | 'web3' | 'design' | 'other';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NFT Marketplace",
    description: "A modern NFT marketplace built with React and Ethereum smart contracts.",
    tags: ["React", "Ethereum", "Solidity", "Web3.js"],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "DeFi Dashboard",
    description: "A dashboard to track and manage DeFi investments across multiple chains.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Web3"],
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Blockchain Explorer",
    description: "A custom blockchain explorer with advanced analytics and visualization.",
    tags: ["React", "Node.js", "GraphQL", "Ethereum"],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Digital Agency Website",
    description: "A modern website for a digital agency with animations and interactive elements.",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://example.com",
  },
];

export const skills: Skill[] = [
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "TypeScript", icon: "TS", category: "frontend" },
  { name: "TailwindCSS", icon: "🌊", category: "frontend" },
  { name: "Ethereum", icon: "Ξ", category: "web3" },
  { name: "Solidity", icon: "◈", category: "web3" },
  { name: "Node.js", icon: "⬢", category: "backend" },
  { name: "GraphQL", icon: "◻", category: "backend" },
  { name: "Figma", icon: "🎨", category: "design" },
];
