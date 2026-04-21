'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'

const categories = [
  { name: 'Frontend', color: '#7C3AED' },
  { name: 'Backend', color: '#10B981' },
  { name: 'Database', color: '#F59E0B' },
  { name: 'DevOps', color: '#3B82F6' },
  { name: 'AI/ML', color: '#EC4899' },
  { name: 'API', color: '#EF4444' },
]

export default function Skills() {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to build amazing things
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const category = categories.find(c => c.name === skill.category)
            return (
              <motion.div
                key={skill.name}
                className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span
                      className="px-2 py-0.5 text-xs rounded-full"
                      style={{ backgroundColor: `${category?.color}20`, color: category?.color }}
                    >
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: category?.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'TypeScript', icon: 'TS' },
              { name: 'Python', icon: '🐍' },
              { name: 'Go', icon: '🐹' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'Redis', icon: '🔴' },
              { name: 'Docker', icon: '🐳' },
              { name: 'Kubernetes', icon: '☸️' },
              { name: 'AWS', icon: '☁️' },
              { name: 'GCP', icon: '🌐' },
              { name: 'TensorFlow', icon: '🧠' },
              { name: 'PyTorch', icon: '🔥' },
              { name: 'GraphQL', icon: '◈' },
              { name: 'Node.js', icon: '🟢' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="glass-card rounded-xl px-5 py-3 flex items-center gap-2 hover:bg-card-hover transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -5 }}
                title={tech.name}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
