'use client'

import { motion } from 'framer-motion'
import { Brain, Cloud, Database, Globe, Terminal, Server } from 'lucide-react'
import { categories } from '@/data/portfolio'

const iconMap: Record<string, React.ReactNode> = {
  'brain': <Brain className="w-8 h-8" />,
  'cloud': <Cloud className="w-8 h-8" />,
  'database': <Database className="w-8 h-8" />,
  'globe': <Globe className="w-8 h-8" />,
  'terminal': <Terminal className="w-8 h-8" />,
  'server': <Server className="w-8 h-8" />,
}

export default function Categories() {
  return (
    <section className="py-20 px-4" id="categories">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Project Categories</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my work across different domains and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.name}
              href={`https://github.com/moggan1337?tab=repositories&q=&sort=stargazers`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 group cursor-pointer block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl transition-colors"
                  style={{ backgroundColor: `${category.color}20`, color: category.color }}
                >
                  {iconMap[category.icon]}
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: `${category.color}20`, color: category.color }}>
                  {category.count} repos
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {category.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <span className="text-primary text-sm font-medium group-hover:underline">
                  Browse {category.name} repos →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
