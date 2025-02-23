import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const timeline: TimelineEvent[] = [
  {
    date: "January 2024",
    title: "Event Executive at Centre of Drone Technology",
    description: "Joined SRMAP's Centre of Drone Technology as Event Executive, organizing workshops and events focused on drone technology and its applications."
  },
  {
    date: "March 2024",
    title: "Co-Convener of Smart Tech Club",
    description: "Became Co-Convener at SRMAP's Smart Tech Club, leading initiatives in emerging technologies and fostering innovation among students."
  },
  {
    date: "May 2024",
    title: "Data Analyst Intern",
    description: "Started internship at EduNet as Data Analyst, working on educational data analysis and predictive modeling projects."
  },
  {
    date: "September 2024",
    title: "Founded Microsoft Student Community",
    description: "Founded and led one of the biggest communities at the university with over 1000 students, organizing workshops, hackathons, and technical training sessions."
  },
  {
    date: "January 2025",
    title: "Quantum ML Research Intern",
    description: "Started Quantum Machine Learning Research internship at Deakin University, Australia, focusing on quantum algorithms for machine learning applications."
  }
];

export default function Journey() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center dark:text-white text-gray-900 mb-16"
      >
        My Journey
      </motion.h1>
      
      <div className="max-w-4xl mx-auto">
        {timeline.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex items-center mb-8"
    >
      <div
        className={`flex w-full ${
          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
        } items-center`}
      >
        <div className="w-5/12">
          <motion.div
            className="dark:bg-black/40 bg-white/80 backdrop-blur-sm p-6 rounded-lg border dark:border-purple-500/10 border-purple-500/30 dark:hover:border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-semibold dark:text-purple-300 text-purple-600 mb-2">
              {event.date}
            </h3>
            <h4 className="text-xl font-bold dark:text-white text-gray-900 mb-2">
              {event.title}
            </h4>
            <p className="dark:text-gray-400 text-gray-600">{event.description}</p>
          </motion.div>
        </div>

        <div className="w-2/12 flex justify-center">
          <div className="relative flex flex-col items-center">
            <div className="w-4 h-4 rounded-full dark:bg-purple-500 bg-purple-600" />
            {index !== timeline.length - 1 && (
              <div className="w-1 h-24 dark:bg-purple-500/30 bg-purple-300/50 transform translate-y-4" />
            )}
          </div>
        </div>

        <div className="w-5/12" />
      </div>
    </motion.div>
  );
}