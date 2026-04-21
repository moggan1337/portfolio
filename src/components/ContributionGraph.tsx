'use client'

import { motion } from 'framer-motion'
import { contributionData } from '@/data/portfolio'
import { useState } from 'react'

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', '']

const levelColors = [
  'bg-gray-800',
  'bg-primary/30',
  'bg-primary/50',
  'bg-primary/70',
  'bg-primary',
]

export default function ContributionGraph() {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: typeof contributionData[0] } | null>(null)

  // Group contributions by week
  const weeks: typeof contributionData[] = []
  let currentWeek: typeof contributionData = []
  
  contributionData.forEach((day, index) => {
    const dayOfWeek = new Date(day.date).getDay()
    if (index === 0) {
      // Pad the first week
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push({ date: '', count: 0, level: 0 })
      }
    }
    currentWeek.push(day)
    if (dayOfWeek === 6 || index === contributionData.length - 1) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  })

  const totalContributions = contributionData.reduce((sum, day) => sum + day.count, 0)

  return (
    <section className="py-20 px-4" id="contributions">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contribution Activity</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {totalContributions.toLocaleString()} contributions in the last year
          </p>
        </motion.div>

        <motion.div
          className="glass-card rounded-2xl p-8 overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Month labels */}
          <div className="flex mb-2 ml-8 text-xs text-gray-500">
            {monthLabels.map((month, i) => (
              <div key={month} className="flex-1 text-center" style={{ minWidth: '14px' }}>
                {month}
              </div>
            ))}
          </div>

          <div className="flex">
            {/* Day labels */}
            <div className="flex flex-col justify-between mr-2 text-xs text-gray-500">
              {dayLabels.map((day, i) => (
                <div key={i} className="h-3 flex items-center" style={{ minHeight: '12px' }}>
                  {day}
                </div>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="flex gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm ${day.date ? levelColors[day.level] : 'bg-transparent'}`}
                      whileHover={{ scale: 1.5, zIndex: 10 }}
                      onMouseEnter={(e) => {
                        if (day.date) {
                          const rect = e.currentTarget.getBoundingClientRect()
                          setTooltip({
                            x: rect.left + window.scrollX,
                            y: rect.top + window.scrollY,
                            data: day,
                          })
                        }
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end mt-6 gap-2 text-xs text-gray-500">
            <span>Less</span>
            {levelColors.map((color, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
            ))}
            <span>More</span>
          </div>
        </motion.div>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="fixed z-50 px-3 py-2 text-sm bg-card border border-gray-700 rounded-lg shadow-xl pointer-events-none"
            style={{ left: tooltip.x + 10, top: tooltip.y - 40 }}
          >
            <div className="font-semibold text-white">
              {tooltip.data.count} contributions
            </div>
            <div className="text-gray-400 text-xs">
              {new Date(tooltip.data.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        )}

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {Math.max(...contributionData.map(d => d.count))}
            </div>
            <div className="text-gray-400 text-sm">Best Day</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {Math.round(totalContributions / 365)}
            </div>
            <div className="text-gray-400 text-sm">Average per Day</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {contributionData.filter(d => d.count > 0).length}
            </div>
            <div className="text-gray-400 text-sm">Active Days</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {contributionData.filter(d => d.count > 10).length}
            </div>
            <div className="text-gray-400 text-sm">High Activity Days</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
