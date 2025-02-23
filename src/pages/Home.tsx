import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParticleBackground from '../components/ParticleBackground';

interface AboutSection {
  title: string;
  content: string;
}

const aboutSections: AboutSection[] = [
  {
    title: "Leadership at Microsoft Student Community",
    content: "As the Lead of the Microsoft Student Community (MSC) at SRM University AP, I have successfully organized workshops, expert talks, and networking events to empower students with industry-relevant technical skills. Under my leadership, MSC has grown into a thriving community offering training in Microsoft technologies, hackathons, and startup incubation support."
  },
  {
    title: "Quantum Computing Journey",
    content: "My journey in technology began with a fascination for quantum computing and artificial intelligence. This passion led me to pursue specialized courses and research opportunities, culminating in my current role as a Quantum Machine Learning Research intern at Deakin University, Australia."
  },
  {
    title: "Leadership Roles",
    content: "In addition to my academic pursuits, I have demonstrated strong leadership capabilities through various roles. As the Event Executive at the Centre of Drone Technology and Co-Convener of the Smart Tech Club, I've organized numerous successful technical events and workshops that have significantly impacted the student community."
  },
  {
    title: "Technical Expertise",
    content: "My expertise spans multiple domains, including quantum computing, machine learning, and data analysis. I've worked with various frameworks and technologies, constantly pushing the boundaries of what's possible in these fields. My experience with Python, AI/ML frameworks, and quantum computing platforms has allowed me to contribute meaningfully to research projects and practical applications."
  },
  {
    title: "Community Impact",
    content: "Beyond technical skills, I'm passionate about knowledge sharing and community building. Through my leadership roles, I've helped create platforms for students to learn, grow, and showcase their talents. I believe in the power of technology to drive positive change and am committed to contributing to this transformation."
  }
];

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex items-center justify-center px-4"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold dark:text-white text-gray-900 mb-6"
              >
                Jayanth Ramakrishnan
              </motion.h1>
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl dark:text-purple-300 text-purple-600 mb-8"
              >
                2nd Year B.Tech CSE Student
              </motion.h2>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-64 h-64 mx-auto rounded-full bg-purple-500/10 border-2 border-purple-500/20 flex items-center justify-center dark:text-purple-300 text-purple-600"
            >
              <span className="text-sm">
              <img 
                src="jayanth.jpeg"
                alt="My Photo"
                className="w-full h-full object-cover rounded-full"
              />
              </span>
            </motion.div>
          </div>
        </motion.section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold dark:text-white text-gray-900 mb-16 text-center"
            >
              About Me
            </motion.h2>
            <div className="space-y-24">
              {aboutSections.map((section, index) => (
                <AboutSection
                  key={section.title}
                  title={section.title}
                  content={section.content}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function AboutSection({ title, content, index }: AboutSection & { index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.3
      }}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
    >
      <div className="w-full md:w-1/3">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-16 rounded-full dark:bg-purple-500/20 bg-purple-100 flex items-center justify-center"
          >
            <div className="w-8 h-8 rounded-full dark:bg-purple-400 bg-purple-500" />
          </motion.div>
          {index !== aboutSections.length - 1 && (
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute top-16 left-8 w-0.5 dark:bg-purple-500/20 bg-purple-100"
              style={{ height: "calc(100% + 6rem)" }}
            />
          )}
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="dark:bg-black/40 bg-white/80 backdrop-blur-sm p-6 rounded-lg border dark:border-purple-500/10 border-purple-500/30"
        >
          <h3 className="text-xl font-bold dark:text-purple-300 text-purple-600 mb-4">{title}</h3>
          <p className="dark:text-gray-300 text-gray-700">{content}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}