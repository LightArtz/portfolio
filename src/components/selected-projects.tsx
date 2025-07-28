"use client"

import type React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

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
    id: "layarnusantara",
    number: "01",
    title: "Layar Nusantara",
    category: "Web Development / Management",
    technologies: { "Frontend": "Next.js, TailwindCSS", "Backend": "Supabase" },
    previewImage: "/project-1-preview.png",
    description: "Layar Nusantara is a platform for discovering Indonesian culture and travel destinations.",
    liveProjectUrl: "https://layar-nusantara.vercel.app/",
    galleryImageUrls: ["/project-1-preview.png"],
  },
  {
    id: "geovest",
    number: "02",
    title: "Geo Vest",
    category: "Web Development / Machine Learning",
    technologies: { "Frontend": "React", "Backend": "Python (Flask)", "ML": "Scikit-learn" },
    previewImage: "/project-2-preview.png",
    description: "Geo Vest uses machine learning to analyze geographical data for investment opportunities.",
    liveProjectUrl: "https://capycapy.mapid.co.id/",
    galleryImageUrls: ["/project-2-preview.png"],
  },
]

export default function SelectedProjects({ onProjectClick }: { onProjectClick: (project: Project) => void }) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }
  const handleMouseEnter = (projectId: string) => setHoveredProject(projectId)
  const handleMouseLeave = () => setHoveredProject(null)

  return (
    <section className="bg-[var(--background)] text-white min-h-screen py-20 px-6 md:px-12 lg:px-20">
      <div ref={containerRef} className="max-w-6xl mx-auto relative" onMouseMove={handleMouseMove}>
        <h2 className="text-2xl md:text-3xl font-normal text-center mb-20">Selected Projects</h2>
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div key={project.id} onClick={() => onProjectClick(project)}>
              <div
                className={`flex items-center py-8 md:py-12 cursor-pointer transition-all duration-300 min-h-[100px] md:min-h-[120px] ${
                  hoveredProject === project.id ? "text-white" : "text-gray-400"
                }`}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-lg md:text-xl font-mono w-16 md:w-20 flex items-center">{project.number}</div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold" style={{ fontWeight: 700 }}>
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

        {hoveredProject && (
          <div
            className="fixed pointer-events-none z-50 animate-in fade-in duration-300"
            style={{ left: mousePosition.x + 20, top: mousePosition.y - 100 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
              <Image
                src={projects.find((p) => p.id === hoveredProject)?.previewImage || ""}
                alt={`${projects.find((p) => p.id === hoveredProject)?.title} preview`}
                width={300}
                height={200}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        )}
        <div className="text-center mt-20">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}