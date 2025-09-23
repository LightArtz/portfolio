"use client"

import { motion, type Variants } from "framer-motion"
import { Briefcase, School } from "lucide-react"

const experienceData = [
    {
      icon: <Briefcase />,
      company: "Timedoor Academy",
      role: "Programming Teacher",
      period: "September 2025 – Present",
      description: [
        "Taught fundamental programming concepts using Python, Scratch, and Roblox to a diverse age range of students (5-18) in small classes of 4-5.",
        "Excelled at simplifying complex technical topics and adapting teaching methods to different learning levels and age groups.",
      ],
    },
  {
    icon: <School />,
    company: "Binus Student Learning Community",
    role: "Manager of IT Development",
    period: "February 2025 – Present",
    description: [
      "Led a team of 10+ developers, overseeing technical architecture and project execution from start to finish.",
      "Drove system improvements for key organizational web platforms, enhancing functionality and performance.",
      "Managed the development lifecycle for major projects, including the 'Study2Challenge' hackathon platform and 'Nindyamaya' mentoring platform.",
    ],
  },
]

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export default function ExperienceSection() {
  return (
    <motion.section
      className="relative bg-black text-white py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 opacity-75"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-white text-center mb-16">
          Career & Experience
        </h2>

        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              {/* Icon */}
              <div className="flex items-center justify-center bg-gray-800/50 border border-gray-700/50 rounded-full w-16 h-16 text-purple-400">
                {item.icon}
              </div>

              {/* Content */}
              <div className="border-l-2 border-gray-700/50 pl-8 md:pl-10 py-2">
                <p className="text-gray-400 text-sm font-medium mb-1">{item.period}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{item.role}</h3>
                <p className="text-purple-400 font-semibold text-lg mb-4">{item.company}</p>
                
                {/* Bullet Points */}
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}