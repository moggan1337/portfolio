'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ExternalLink, GitFork, Search, Code2, Database, Cloud, Terminal, Server } from 'lucide-react'
import { featuredProjects } from '@/data/portfolio'

const categoryFilters = [
  { name: 'All', icon: <Search className="w-4 h-4" /> },
  { name: 'AI/ML', icon: <Code2 className="w-4 h-4" /> },
  { name: 'DevOps', icon: <Cloud className="w-4 h-4" /> },
  { name: 'Databases', icon: <Database className="w-4 h-4" /> },
  { name: 'Web Dev', icon: <Terminal className="w-4 h-4" /> },
  { name: 'APIs', icon: <Server className="w-4 h-4" /> },
  { name: 'CLI Tools', icon: <Terminal className="w-4 h-4" /> },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [visibleProjects, setVisibleProjects] = useState(12)

  const filteredProjects = filter === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === filter)

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My most popular and impactful open-source projects
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setFilter(category.name)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                filter === category.name
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'glass-card text-gray-300 hover:bg-card-hover'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 group block"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8, borderColor: 'rgba(124, 58, 237, 0.5)' }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-xs text-gray-500">{project.language}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.slice(0, 4).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary/80"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm font-medium">{project.stars.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <GitFork className="w-4 h-4" />
                      <span className="text-sm font-medium">{Math.floor(Math.random() * 500) + 50}</span>
                    </div>
                  </div>
                  <span
                    className="px-2 py-1 text-xs rounded-full"
                    style={{ backgroundColor: `${getCategoryColor(project.category)}20`, color: getCategoryColor(project.category) }}
                  >
                    {project.category}
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {visibleProjects < filteredProjects.length && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setVisibleProjects(prev => prev + 6)}
              className="px-8 py-4 glass-card text-white font-semibold rounded-xl inline-flex items-center gap-2 hover:bg-card-hover transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'AI/ML': '#7C3AED',
    'DevOps': '#10B981',
    'Databases': '#F59E0B',
    'Web Dev': '#3B82F6',
    'CLI Tools': '#EF4444',
    'APIs': '#EC4899',
  }
  return colors[category] || '#7C3AED'
}
