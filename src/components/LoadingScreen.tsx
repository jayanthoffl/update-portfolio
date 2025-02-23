import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="w-24 h-24 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"
      />
    </div>
  );
}