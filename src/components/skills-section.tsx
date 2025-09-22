"use client"

import type React from "react"
import Image from "next/image";
import { motion } from "framer-motion";
// import { AnimatePresence } from "framer-motion";

import { useState } from "react"

import { FaAws, FaGitAlt, FaGithub, } from "react-icons/fa";

interface Skill {
  name: string
  icon: React.ReactNode
  color?: string
}

interface SkillCard {
  title: string
  description: string
  skills: Skill[]
}

// I've commented out the Testimonial interface as it's no longer used.
/*
interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  image: string
}
*/

const skillsData: SkillCard[] = [
  {
    title: "Data Engineering & Databases",
    description:
      "Proficient in building and managing data systems. I specialize in Python and SQL to design ETL processes, model data warehouses, and ensure data integrity from source to destination.",
    skills: [
      { name: "Python", icon: "/icon/language/python.svg", color: "#3776AB" },
      { name: "SQL", icon: "/icon/language/sql.svg", color: "#4479A1" },
      { name: "PostgreSQL", icon: "/icon/language/postgresql.svg", color: "#4169E1" },
      { name: "Pandas", icon: "/icon/language/pandas.svg", color: "#150458" },
      { name: "NumPy", icon: "/icon/language/numpy.svg", color: "#4D77CF" },
      { name: "Docker", icon: "/icon/language/docker.svg", color: "#2496ED" },
    ],
  },
  {
    title: "Orchestration & Big Data Technologies",
    description:
      "Familiar with foundational concepts of modern data stack tools. I have a working knowledge of orchestrating workflows and processing large datasets using industry-standard technologies.",
    skills: [
      { name: "Apache Airflow", icon: "/icon/de/airflow.svg", color: "#00d1c1" },
      { name: "Apache Spark", icon: "/icon/de/spark.svg", color: "#E25A1C" },
      { name: "Databricks", icon: "/icon/de/databricks.svg", color: "#FF3621" },
      { name: "AWS (S3, EC2)", icon: <FaAws />, color: "#FF9900" },
      // { name: "Hadoop", icon: "/icon/de/hadoop.svg", color: "#f9e01e" },
    ],
  },
    {
    title: "Data Visualization",
    description:
      "Passionate about building intuitive dashboards and compelling data narratives. I specialize in transforming raw numbers into clear, actionable stories that drive business decisions.",
    skills: [
      { name: "Tableau", icon: "/icon/2-Tableau.svg", color: "#E97627" },
      { name: "Matplotlib", icon: "/icon/2-Matplotlib.svg", color: "#8B008B" },
      { name: "Seaborn", icon: "/icon/2-Seaborn.svg", color: "#4c72b0" },
    ],
  },
  {
    title: "Development & Project Management",
    description:
      "Experienced in version control and agile methodologies. I focus on clear communication and efficient workflows to ensure that data projects deliver timely and relevant business value.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
      { name: "Agile", icon: "/icon/4-Agile.png", color: "#654FF0" },
      { name: "Scrum", icon: "/icon/4-Scrum2.png" },
      { name: "Jira", icon: "/icon/4-Jira.svg", color: "#0052CC" },
    ],
  },
];

// I've commented out the placeholder testimonial data.
/*
const testimonialsData: Testimonial[] = [
  {
    quote:
      ":D",
    author: "Someone",
    title: "CEO",
    company: "Big Company",
    image: "/placeholder-user-1.jpg", 
  },
  {
    quote:
      ":)",
    author: "Someone",  
    title: "CEO",
    company: "Big Company",
    image: "/placeholder-user-1.jpg", 
  },
  {
    quote:
      ":))",
    author: "Someone",
    title: "CEO",
    company: "Big Company",
    image: "/placeholder-user-1.jpg", 
  },
];
*/

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; x: number; y: number } | null>(null)
  
  // I've commented out the state and variants related to the testimonial slider.
  /*
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(0)

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };
  */

  const handleSkillHover = (skill: Skill, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setHoveredSkill({
      name: skill.name,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    })
  }

  const handleSkillLeave = () => {
    setHoveredSkill(null)
  }

  return (
    <motion.section
        className="relative bg-black py-20 px-6"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
    >
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-75"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-4xl font-bold text-white text-center mb-20">My Skills</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((card, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl p-8 border border-gray-700/50 transition-all duration-300 shadow-lg hover:border-purple-500 hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-2xl h-100 lg:h-85 xl:h-65 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm flex-grow">{card.description}</p>

              <div className="flex flex-wrap gap-4">
                {card.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative flex items-center justify-center w-14 h-14 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-200 hover:scale-110 hover:brightness-125"
                    onMouseEnter={(e) => handleSkillHover(skill, e)}
                    onMouseLeave={handleSkillLeave}
                  >
                    {typeof skill.icon === 'string' ? (
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        width={36}
                        height={36}
                      />
                    ) : (
                      <span className="text-4xl" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* --- I've commented out the entire testimonial section below --- */}
        {/*
        <div className="my-40 text-center">
            <h2 className="text-4xl md:text-4xl font-bold text-white text-center mb-15">Testimonials</h2>
            
            <div className="relative max-w-3xl mx-auto h-80 flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentTestimonial}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute w-full"
                    >
                        <div className="relative h-40 flex items-center justify-center">
                            <span className="absolute -top-4 left-0 text-8xl text-purple-500/50 font-serif opacity-70">“</span>
                            <blockquote className="text-lg md:text-2xl text-gray-200 leading-relaxed pl-12">
                                {testimonialsData[currentTestimonial].quote}
                            </blockquote>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <Image
                                src={testimonialsData[currentTestimonial].image}
                                alt={testimonialsData[currentTestimonial].author}
                                width={60}
                                height={60}
                                className="rounded-full"
                            />
                            <div className="ml-4 text-left">
                                <p className="font-bold text-white">{testimonialsData[currentTestimonial].author}</p>
                                <p className="text-gray-400 text-sm">
                                    {testimonialsData[currentTestimonial].title}, {testimonialsData[currentTestimonial].company}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-3 mt-12">
                {testimonialsData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (index !== currentTestimonial) {
                                const newDirection = index > currentTestimonial ? 1 : -1;
                                setDirection(newDirection);
                                setCurrentTestimonial(index);
                            }
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentTestimonial === index ? 'bg-purple-500 scale-125 cursor-pointer' : 'bg-gray-600 hover:bg-gray-500 cursor-pointer'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
        */}
        
      </div>

      {/* Tooltip */}
      {hoveredSkill && (
        <div
          className="fixed z-50 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: hoveredSkill.x,
            top: hoveredSkill.y,
          }}
        >
          {hoveredSkill.name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600" />
        </div>
      )}
    </motion.section>
  )
}