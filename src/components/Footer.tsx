import { Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="dark:bg-black/50 bg-white/50 backdrop-blur-md py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold dark:text-purple-300 text-purple-600 mb-4">
              Jayanth Ramakrishnan
            </h3>
            <p className="dark:text-gray-400 text-gray-600">
              2nd Year B.Tech CSE Student passionate about technology and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold dark:text-purple-300 text-purple-600 mb-4">
              Contact Info
            </h3>
            <div className="space-y-2">
              <div className="flex items-center dark:text-gray-400 text-gray-600">
                <Mail size={16} className="mr-2" />
                <span>jayanthvasudeva@gmail.com</span>
              </div>
              <div className="flex items-center dark:text-gray-400 text-gray-600">
                <MapPin size={16} className="mr-2" />
                <span>SRM University AP</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold dark:text-purple-300 text-purple-600 mb-4">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/jayanth-ramakrishnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 text-gray-600 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/thejayanthramakrishnan"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 text-gray-600 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/jayanthoffl"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 text-gray-600 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t dark:border-gray-800 border-gray-200 text-center dark:text-gray-400 text-gray-600">
          <p>&copy; {new Date().getFullYear()} Jayanth Ramakrishnan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}