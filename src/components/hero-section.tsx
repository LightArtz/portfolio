import type React from "react"
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[var(--background)] relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center w-full">
          {/* Left Column - Profile Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.3),0_0_60px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4),0_0_80px_rgba(255,255,255,0.15)] transition-all duration-300">
                <Image
                    src="/profile-picture.jpg"
                    alt="Profile picture"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="text-white space-y-6 order-2 lg:order-2 text-center lg:text-left">
            {/* Small intro line */}
            <p className="text-gray-300 text-lg md:text-xl font-light font-inter">I am Kelson Vincien, and I enjoy...</p>

            {/* Combined large headline */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight font-inter">
                Turning raw data into
              </h1>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight font-inter">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Actionable business insights
                </span>
              </h1>
            </div>

            {/* Job title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium mt-8 font-inter">
              Data Analyst / Python & SQL Developer
            </h2>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start space-x-8 mt-10">
              <SocialIcon
                href="https://www.linkedin.com/in/kelson-vincien/"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                }
                label="LinkedIn"
              />
              <SocialIcon
                href="https://github.com/LightArtz"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                }
                label="GitHub"
              />
              <SocialIcon
                href="mailto:kelson.vincien@gmail.com"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                label="Email"
              />
              <SocialIcon
                href="/Kelson Vincien_CV.pdf"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10,9 9,9 8,9" />
                    <path d="M12 15l-3 3 3 3" />
                  </svg>
                }
                label="Resume"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SocialIconProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-white/5 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 group"
      aria-label={label}
    >
      <span className="group-hover:brightness-125 transition-all duration-300">{icon}</span>
    </a>
  )
}
