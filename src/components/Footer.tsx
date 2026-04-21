'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react'
import { socialLinks } from '@/data/portfolio'

const iconMap: Record<string, React.ReactNode> = {
  'github': <Github className="w-6 h-6" />,
  'linkedin': <Linkedin className="w-6 h-6" />,
  'twitter': <Twitter className="w-6 h-6" />,
  'mail': <Mail className="w-6 h-6" />,
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-20 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">@moggan1337</h3>
            <p className="text-gray-400 text-sm">
              Building the future, one commit at a time.
            </p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </motion.a>
            ))}
          </motion.div>

          {/* Right - Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>
            © {new Date().getFullYear()} moggan1337. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of ☕
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/moggan1337" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </motion.div>

        {/* Built with badge */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-gray-400">
            <span>Built with</span>
            <span className="text-primary font-semibold">Next.js</span>
            <span>+</span>
            <span className="text-secondary font-semibold">Tailwind CSS</span>
            <span>+</span>
            <span className="text-accent font-semibold">Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
