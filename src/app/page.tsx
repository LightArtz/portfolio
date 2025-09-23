"use client"

import { useState } from "react"
import HeroSection from "../components/hero-section"
import SelectedProjects from "../components/selected-projects"
import ProjectDetailPage from "../components/project-detail-page"
import SkillsSection from "../components/skills-section"
import Footer from "../components/footer";
import ExperienceSection from "@/components/experience-section"

// Define the corrected Project interface
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

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleCloseDetail = () => {
    setSelectedProject(null)
  }

  return (
    <main>
      <HeroSection />
      <ExperienceSection />
      <SelectedProjects onProjectClick={handleProjectClick} />
      <SkillsSection />
      {selectedProject && (
        <ProjectDetailPage
          {...selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseDetail}
        />
      )}
      <Footer />
    </main>
  )
}