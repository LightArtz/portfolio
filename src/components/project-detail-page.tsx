"use client"

import { X, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface ProjectDetailPageProps {
  title: string
  description: string
  technologies: {
    frontend?: string
    backend?: string
    other?: string[]
  }
  liveProjectUrl?: string
  galleryImageUrls: string[]
  onClose: () => void
  isOpen: boolean
}

export default function ProjectDetailPage({
  title,
  description,
  technologies,
  liveProjectUrl,
  galleryImageUrls,
  onClose,
  isOpen,
}: ProjectDetailPageProps) {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black text-white overflow-y-auto">
      <div className="min-h-screen p-6 md:p-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight">{title}</h1>
            {liveProjectUrl && (
              <a
                href={liveProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors mt-2"
                aria-label="Open project in new tab"
              >
                <ExternalLink size={32} className="md:w-10 md:h-10" />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Close project details"
          >
            <X size={32} className="md:w-10 md:h-10" />
          </button>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Description */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">DESCRIPTION</h2>
            <div className="w-full h-px bg-gray-600 mb-6"></div>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">{description}</p>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">TECHNOLOGIES</h2>
            <div className="w-full h-px bg-gray-600 mb-6" />
            <div className="space-y-3">
                {Object.entries(technologies).map(([key, value]) => (
                <div key={key}>
                    <span className="text-gray-400">{key}: </span>
                    <span className="text-white">{value}</span>
                </div>
                ))}
            </div>
           </div>
        </div>

        {/* Image Gallery */}
        {galleryImageUrls.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-8">IMAGE GALLERY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {galleryImageUrls.map((imageUrl, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-900">
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={`${title} screenshot ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
