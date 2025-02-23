import { motion } from 'framer-motion';
import { useState } from 'react';
import { Cpu, Brain, Code, Database, Server } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  details: string;
}

const skills: Skill[] = [
  {
    name: "Quantum Computing",
    icon: <Cpu className="w-8 h-8 dark:text-purple-400 text-purple-600" />,
    description: "Minor program specialization in Quantum Computing",
    details: "Learnt as minor program in university. Currently doing Research intern role in Deakin University for the topic Topological Data Analysis using Quantum Machine Learning"
  },
  {
    name: "Machine Learning",
    icon: <Brain className="w-8 h-8 dark:text-purple-400 text-purple-600" />,
    description: "Expertise in AI/ML frameworks and algorithms",
    details: "Self paced learning, thorough with Supervised and Unsupervised ML. Worked with TensorFlow, PyTorch and various other skillset"
  },
  {
    name: "Frontend Development",
    icon: <Code className="w-8 h-8 dark:text-purple-400 text-purple-600" />,
    description: "Modern web development and design",
    details: "Self Paced learning for passion and showcase of Designing and Graphic Skills"
  },
  {
    name: "Data Analysis",
    icon: <Database className="w-8 h-8 dark:text-purple-400 text-purple-600" />,
    description: "Professional experience in data analysis",
    details: "Worked as Data Analysis Intern at EduNet foundations. Implement data cleaning and improvised data pipeline by almost 15%"
  },
  {
    name: "Arduino",
    icon: <Server className="w-8 h-8 dark:text-purple-400 text-purple-600" />,
    description: "Hardware programming and IoT development",
    details: "Self learnt while being the Co-Convener of Smart Tech club. Made automated Dustbin and Temperature detection module"
  }
];

export default function Skills() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center dark:text-white text-gray-900 mb-16"
        >
          Skills & Expertise
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden transition-all duration-300 ease-in-out
                ${expandedSkill === skill.name ? 'row-span-2' : ''}
                dark:bg-black/40 bg-white/80 backdrop-blur-sm rounded-lg border
                dark:border-purple-500/10 border-purple-500/30
                dark:hover:border-purple-500/30 hover:border-purple-500/50
                cursor-pointer`}
              onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
            >
              <div className="p-6">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold dark:text-purple-300 text-purple-600 mb-2">
                  {skill.name}
                </h3>
                <p className="dark:text-gray-400 text-gray-600">
                  {expandedSkill === skill.name ? skill.details : skill.description}
                </p>
              </div>
              <motion.div
                initial={false}
                animate={{ height: expandedSkill === skill.name ? 'auto' : '0' }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t dark:from-purple-500/10 from-purple-500/30 to-transparent h-12"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}