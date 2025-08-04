"use client"

import { useState } from "react"
import { Search, ExternalLink, Code, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link";

// Sample project data
const projects = [
  {
    id: 1,
    name: "Game Analysis Dashboard",
    technologies: ["Tableau"],
    liveUrl: "https://public.tableau.com/views/GlobalVideoGameAnalysis/GameAnalysisDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    sourceUrl: null,
    type: "Visualization",
    availability: ["Live"],
  },
  {
    id: 2,
    name: "Maven Roasters: Sales & Customer Behavior Dashboard",
    technologies: ["Tableau"],
    liveUrl: "https://public.tableau.com/views/MAVENROASTERSSALESCUSTOMERBEHAVIORDASHBOARD/MavenRoastersSalesCustomerBehaviorDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    sourceUrl: null,
    type: "Visualization",
    availability: ["Live"],
  },
  {
    id: 3,
    name: "Spotify Dashboard",
    technologies: ["Tableau"],
    liveUrl: "https://public.tableau.com/app/profile/augusto.jonathan6027/viz/shared/P9SGKRG94",
    sourceUrl: null,
    type: "Visualization",
    availability: ["Live"],
  },
  {
    id: 4,
    name: "Socially",
    technologies: ["Next.js", "Tailwind CSS", "Supabase" ],
    liveUrl: "https://socially-two-dun.vercel.app/",
    sourceUrl: "https://github.com/LightArtz/socially",
    type: "Web App",
    availability: ["Live", "Open Source"],
  },
  {
    id: 5,
    name: "Interactive Analysis of Jakarta's Air Quality",
    technologies: ["Tableau"],
    liveUrl: "https://public.tableau.com/shared/77RGC6HS6?:display_count=n&:origin=viz_share_linkk",
    sourceUrl: null,
    type: "Visualization",
    availability: ["Live"],
  },
  {
    id: 6,
    name: "E-Learning BSLC",
    technologies: ["Laravel", "HTML", "CSS", "Github"],
    liveUrl: "https://elearning.bslc.or.id/",
    sourceUrl: null,
    type: "Web App",
    availability: ["Live"],
  },
  {
    id: 7,
    name: "Sentiment Analyzer",
    technologies: ["Python", "Next.js", "Tailwind CSS"],
    liveUrl: null,
    sourceUrl: "https://github.com/LightArtz/sentiment-analyzer",
    type: "Web App",
    availability: ["Open Source"],
  },
  {
    id: 8,
    name: "CapyNion",
    technologies: ["Python", "React", "Tailwind CSS", "Motoko"],
    liveUrl: null,
    sourceUrl: "https://github.com/LightArtz/CapyNion",
    type: "Web3",
    availability: ["Open Source"],
  },
]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Get unique values for filters
  const uniqueTypes = Array.from(new Set(projects.map((p) => p.type)))
  const uniqueTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies))).sort()
  const uniqueAvailability = Array.from(new Set(projects.flatMap((p) => p.availability)))

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(project.type)
    const matchesTech =
      selectedTechnologies.length === 0 || selectedTechnologies.some((tech) => project.technologies.includes(tech))
    const matchesAvailability =
      selectedAvailability.length === 0 || project.availability.some((avail) => selectedAvailability.includes(avail))

    return matchesSearch && matchesType && matchesTech && matchesAvailability
  })

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage)

  const clearFilters = () => {
    setSelectedTypes([])
    setSelectedTechnologies([])
    setSelectedAvailability([])
    setSearchTerm("")
    setCurrentPage(1)
  }

  const handleFilterChange = (value: string, type: "type" | "tech" | "availability") => {
    if (type === "type") {
      setSelectedTypes((prev) => (prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]))
    } else if (type === "tech") {
      setSelectedTechnologies((prev) => (prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]))
    } else {
      setSelectedAvailability((prev) => (prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]))
    }
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Link href="/" className="items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4 inline-flex">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
            </Link>
            <div className="bg-gray-800 rounded-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-6">Filters</h2>

              <Accordion type="multiple" className="space-y-4">
                {/* Type Filter */}
                <AccordionItem value="type" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-gray-300 cursor-pointer">Type</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    {uniqueTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-3">
                        <Checkbox
                          id={`type-${type}`}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => handleFilterChange(type, "type")}
                          className="border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 cursor-pointer"
                        />
                        <label htmlFor={`type-${type}`} className="text-sm text-gray-300 cursor-pointer">
                          {type}
                        </label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                {/* Technology Filter */}
                <AccordionItem value="technology" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-gray-300 cursor-pointer">Technology</AccordionTrigger>
                  <AccordionContent className="space-y-3 max-h-60 overflow-y-auto">
                    {uniqueTechnologies.map((tech) => (
                      <div key={tech} className="flex items-center space-x-3">
                        <Checkbox
                          id={`tech-${tech}`}
                          checked={selectedTechnologies.includes(tech)}
                          onCheckedChange={() => handleFilterChange(tech, "tech")}
                          className="border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 cursor-pointer"
                        />
                        <label htmlFor={`tech-${tech}`} className="text-sm text-gray-300 cursor-pointer">
                          {tech}
                        </label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                {/* Availability Filter */}
                <AccordionItem value="availability" className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-gray-300 cursor-pointer">Availability</AccordionTrigger>
                  <AccordionContent className="space-y-3">
                    {uniqueAvailability.map((availability) => (
                      <div key={availability} className="flex items-center space-x-3">
                        <Checkbox
                          id={`availability-${availability}`}
                          checked={selectedAvailability.includes(availability)}
                          onCheckedChange={() => handleFilterChange(availability, "availability")}
                          className="border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 cursor-pointer"
                        />
                        <label htmlFor={`availability-${availability}`} className="text-sm text-gray-300 cursor-pointer">
                          {availability}
                        </label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full mt-6 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent cursor-pointer"
              >
                Clear Filter
              </Button>
            </div>
          </div>

          {/* Projects Section */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-6">Kelson&apos;s Projects</h1>

              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search projects by name"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Projects Table */}
            <div className="bg-gray-800 rounded-lg overflow-hidden p-3">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-gray-800">
                    <TableHead className="text-gray-300 font-semibold">PROJECT NAME</TableHead>
                    <TableHead className="text-gray-300 font-semibold">TECHNOLOGIES</TableHead>
                    <TableHead className="text-gray-300 font-semibold text-right">LINKS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedProjects.map((project) => (
                    <TableRow key={project.id} className="border-gray-700 hover:bg-gray-700/50 transition-colors">
                      <TableCell className="font-medium text-white py-4">{project.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-gray-700 text-gray-300 border border-gray-600 text-xs px-2 py-1 font-normal hover:bg-gray-700"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end items-center gap-4 min-h-[40px]">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Live Site
                            </a>
                          )}
                          {project.sourceUrl && (
                            <a
                              href={project.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 text-sm transition-colors"
                            >
                              <Code className="h-3.5 w-3.5" />
                              Source Code
                            </a>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-end items-center gap-1 mt-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="text-gray-400 hover:text-white hover:bg-gray-700 disabled:opacity-30 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                      currentPage === page
                        ? "bg-white text-gray-900"
                        : "text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="text-gray-400 hover:text-white hover:bg-gray-700 disabled:opacity-30 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
