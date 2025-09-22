"use client"

import type React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Define a matching Project type
interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: Record<string, string>;
  liveProjectUrl: string;
  galleryImageUrls: string[];
  previewImage: string;
}

// Updated project data with the correct structure
const projects: Project[] = [
  {
    id: "sqlDataWarehouse",
    number: "01",
    title: "End-to-End SQL Data Warehouse",
    category: "Data Engineering / ETL",
    technologies: { "Data Pipeline": "SQL, PostgreSQL", "Data Modeling": "Draw.io" },
    previewImage: "/4/1.jpg",
    description: "Designed and built a complete data warehouse from scratch for a fictional e-commerce company. This project involved creating a multi-layered architecture (Bronze, Silver, Gold) and developing ETL procedures to integrate disparate data from CRM and ERP systems into a unified dimensional model.",
    liveProjectUrl: "https://github.com/LightArtz/sql-data-warehouse",
    galleryImageUrls: ["/4/1.jpg", "/4/2.jpg", "/4/3.jpg", "/4/4.jpg"],
  },
  {
    id: "salesandcustomerdashboard",
    number: "02",
    title: "Executive Sales & Customer Dashboard",
    category: "Business Intelligence, Data Visualization, Sales Analytics",
    technologies: { "Data Visualization": "Tableau" },
    previewImage: "/1/1.png",
    description: "Developed a comprehensive, dual-view executive dashboard in Tableau to analyze complex sales and customer data. The interactive tool tracks key performance indicators (KPIs) and year-over-year growth, providing actionable insights into product performance and customer behavior.",
    liveProjectUrl: "https://public.tableau.com/app/profile/kelson.vincien/viz/SalesandCustomerDashboard_17538908882010/SalesDashboard?publish=yes",
    galleryImageUrls: ["/1/1.png", "/1/2.png", "/1/3.png", "/1/4.png"],
  },
  {
    id: "geovest",
    number: "03",
    title: "GeoVest: AI-Powered Property Investment Analysis",
    category: "Geospatial Analytics / Full-Stack Development",
    technologies: { "Frontend": "Next.js, Leaflet.js, Maplibre", "Backend": "Python, Supabase", "Machine Learning": "XGBoost, LLM, MCDA", "Collaboration": "Github" },
    previewImage: "/3/6.png",
    description: "An award-winning web application that empowers users to make smarter property investment decisions using AI and geospatial analytics. GeoVest provides an interactive map with deep filtering, historical trends, and a predictive ROI calculator. This project secured 3rd place in the national MAPID competition.",
    liveProjectUrl: "https://github.com/reynardaj/GeoVest",
    galleryImageUrls: ["/3/1.png", "/3/2.png", "/3/3.png", "/3/4.png", "/3/5.png", "/3/6.png"],
  },
  // {
  //   id: "layarnusantara",
  //   number: "04",
  //   title: "Layar Nusantara",
  //   category: "Web Development / Management",
  //   technologies: { "Frontend": "Next.js, TailwindCSS", "Backend": "Supabase", "Collaboration": "Github" },
  //   previewImage: "/2/1.png",
  //   description: "Led the development and management of Layar Nusantara, a full-stack web application designed to promote Indonesian culture and tourism. The platform provides a rich, interactive guide to the country's diverse travel destinations, built on a modern stack including Next.js, TailwindCSS, and Supabase.",
  //   liveProjectUrl: "https://layar-nusantara.vercel.app/",
  //   galleryImageUrls: ["/2/1.png", "/2/3.png", "/2/2.png", "/2/4.png", "/2/5.png", "/2/6.png"],
  // },
  {
    id: "study2challenge",
    number: "04",
    title: "Study2Challenge Hackathon Platform",
    category: "Full-Stack Development / Project Management",
    technologies: { "Frontend": "React, Vite", "Backend": "Node.js, Express.js", "Database": "PostgreSQL", "Collaboration": "Github" },
    previewImage: "/5/1.jpg",
    description: "Led a team of 6 developers and designers to build a full-stack web platform for the 'Study2Challenge' hackathon. I was responsible for the overall project architecture, managing the development lifecycle, and coordinating between the frontend, backend, and UI/UX teams to deliver a seamless user experience.",
    liveProjectUrl: "https://www.study2challenge.bslc.or.id",
    galleryImageUrls: ["/5/1.jpg", "/5/2.jpg", "/5/3.jpg", "/5/4.jpg"],
  },

]

export default function SelectedProjects({ onProjectClick }: { onProjectClick: (project: Project) => void }) {
  const [hoveredProject, setHoveredProject] = useState<{ id: string; index: number } | null>(null)
  const [direction, setDirection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }
  const handleMouseEnter = (projectId: string, index: number) => {
    if (hoveredProject) {
      setDirection(index > hoveredProject.index ? 1 : -1);
    }
    setHoveredProject({ id: projectId, index });
  };
  const handleMouseLeave = () => setHoveredProject(null)

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <motion.section
        className="bg-[var(--background)] text-white py-20 px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
    >
      <div ref={containerRef} className="max-w-6xl mx-auto relative" onMouseMove={handleMouseMove}>
        <h2 className="text-4xl md:text-4xl font-bold text-white text-center mb-20">Selected Projects</h2>
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div key={project.id} onClick={() => onProjectClick(project)}>
              <div
                className={`flex items-center py-8 md:py-12 cursor-pointer transition-all duration-300 min-h-[100px] md:min-h-[120px] ${
                  hoveredProject?.id === project.id ? "text-white" : "text-gray-400"
                }`}
                onMouseEnter={() => handleMouseEnter(project.id, index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-lg md:text-xl font-mono w-16 md:w-20 flex items-center">{project.number}</div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ fontWeight: 700 }}>
                    {project.title}
                  </h3>
                </div>
                {/* Updated rendering for technologies object */}
                <div className="text-right text-sm md:text-base w-48 md:w-64 flex items-center justify-end">
                  {project.category}
                </div>
              </div>
              {index < projects.length - 1 && <div className="h-px bg-white/20"></div>}
            </div>
          ))}
        </div>

        <AnimatePresence initial={false} custom={direction}>
          {hoveredProject && (
            <motion.div
              key={hoveredProject.id}
              className="fixed pointer-events-none z-50"
              style={{ left: mousePosition.x + 20, top: mousePosition.y - 100 }}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                <Image
                  src={projects.find((p) => p.id === hoveredProject.id)?.previewImage || ""}
                  alt={`${projects.find((p) => p.id === hoveredProject.id)?.title} preview`}
                  width={300}
                  height={300}
                  className="rounded-xl object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="text-center mt-20">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </motion.section>
  )
}