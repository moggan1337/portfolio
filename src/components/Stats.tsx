'use client'

import { motion } from 'framer-motion'
import { Folder, CheckCircle, GitCommit, Star, Users, Code2 } from 'lucide-react'
import { stats } from '@/data/portfolio'

const iconMap: Record<string, React.ReactNode> = {
  'folder': <Folder className="w-8 h-8" />,
  'check-circle': <CheckCircle className="w-8 h-8" />,
  'git-commit': <GitCommit className="w-8 h-8" />,
  'star': <Star className="w-8 h-8" />,
}

export default function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(124, 58, 237, 0.6)' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/20 text-primary mb-4 group-hover:bg-primary/30 transition-colors">
                {iconMap[stat.icon]}
              </div>
              <motion.h3
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-secondary/20 text-secondary mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
            <p className="text-gray-400 text-sm">Followers</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/20 text-accent mb-4">
              <Code2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">2M+</h3>
            <p className="text-gray-400 text-sm">Lines Written</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-pink-500/20 text-pink-500 mb-4">
              <GitCommit className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-400 text-sm">Organizations</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-cyan-500/20 text-cyan-500 mb-4">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">200+</h3>
            <p className="text-gray-400 text-sm">Open PRs Merged</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
