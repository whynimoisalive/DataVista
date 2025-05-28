"use client"; // Add this at the top if not already a client component or if using hooks like useRef

import Link from "next/link"
import { Star, RocketIcon, GlobeIcon, SatelliteIcon, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"; // Import React

export default function Home() {
  const overviewSectionRef = React.useRef<HTMLElement>(null);

  const handleLearnMoreClick = () => {
    overviewSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 space-y-10 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 pb-2">
              DataVista Competition 2025
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              Build applications to solve real space industry problems using publicly available data
            </p>
          </div>

        
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/resources">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
              >
                View Resources
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-900 rounded-full px-8"
            >
              <Link href="https://forms.gle/Wx4SxTFbbKZhATbG8" target="_blank" className="flex items-center">
                Submit Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewSectionRef} id="overview" className="py-20 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-block rounded-full bg-zinc-900 p-2 mb-4">
              <RocketIcon className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Competition Overview</h2>
            <p className="text-zinc-400 max-w-3xl">
              DataVista is a space data challenge where you build applications to solve real space industry problems
              using publicly available data and free APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <div className="rounded-full bg-blue-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                </div>
                <CardTitle className="text-xl">PDF Presentation</CardTitle>
                <CardDescription className="text-zinc-400">
                  Maximum 15 slides, converted from PPT/PPTX, max 10MB
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <div className="rounded-full bg-purple-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Video Demo</CardTitle>
                <CardDescription className="text-zinc-400">2-5 minutes, shared via Google Drive link</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 text-white">
              <CardHeader>
                <div className="rounded-full bg-pink-500/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-500"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Source Code</CardTitle>
                <CardDescription className="text-zinc-400">
                  GitHub Repository or ZIP file containing all source code
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="stars"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-block rounded-full bg-zinc-900 p-2 mb-4">
              <SatelliteIcon className="h-6 w-6 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Competition Tracks</h2>
            <p className="text-zinc-400 max-w-3xl">Choose ONE track to focus on for your project submission</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 text-white hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <div className="rounded-full bg-blue-500/10 w-8 h-8 flex items-center justify-center">
                    <Star className="h-4 w-4 text-blue-500" />
                  </div>
                  Track #1
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Space Debris Collision Risk Assessment</h3>
                <p className="text-zinc-400">
                  Build an application that addresses space debris collision risks for satellites and spacecraft.
                </p>
              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 text-white hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <div className="rounded-full bg-purple-500/10 w-8 h-8 flex items-center justify-center">
                    <GlobeIcon className="h-4 w-4 text-purple-500" />
                  </div>
                  Track #2
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Disaster Management Using Earth Observation Data</h3>
                <p className="text-zinc-400">
                  Create a solution that uses satellite data for natural disaster prediction, monitoring, or response.
                </p>
              </CardContent>
              <CardFooter>
  
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 text-white hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <div className="rounded-full bg-pink-500/10 w-8 h-8 flex items-center justify-center">
                    <SatelliteIcon className="h-4 w-4 text-pink-500" />
                  </div>
                  Track #3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">Predictive Maintenance for Satellite Systems</h3>
                <p className="text-zinc-400">
                  Develop a system that predicts satellite component failures to extend mission life.
                </p>
              </CardContent>
              <CardFooter>

              </CardFooter>
              // In the Tracks Section (around line 140-170), update each CardFooter:
              <CardFooter>
                <Link href="/resources?track=1">
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
                    View resources
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-block rounded-full bg-zinc-900 p-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Submission Format</h2>
            <p className="text-zinc-400 max-w-3xl">
              Follow these guidelines to ensure your submission is properly evaluated
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
                PDF Presentation Requirements
              </h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Maximum 15 slides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>File format: PDF only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>File size limit: 10MB maximum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Convert from PowerPoint to PDF before submission</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-500"
                >
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
                Video Demo Requirements
              </h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>3-5 minutes in length</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Google Drive link with public access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Show your working application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Demonstrate key features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Use real data in your demo</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                </svg>
                Source Code Submission (MANDATORY)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-white">Option A: GitHub Repository</h4>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Create a public GitHub repository</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>
                        Add <code className="bg-zinc-800 px-1 rounded">whynimoisalive</code> as collaborator
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Include basic README with setup instructions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-white">Option B: ZIP File</h4>
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Create a ZIP file with all source code</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Include README.txt with setup instructions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">•</span>
                      <span>Submit alongside your PowerPoint</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
            Ready to launch your space data solution?
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-8">
            Join the DataVista Competition 2025 and showcase your innovative solutions to real space industry problems.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8"
          >
            <Link href="https://forms.gle/Wx4SxTFbbKZhATbG8" target="_blank" className="flex items-center">
              Submit Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-zinc-950 border-t border-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-zinc-500 text-sm">© 2025 DataVista Competition. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://forms.gle/Wx4SxTFbbKZhATbG8"
                target="_blank"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Submission Link
              </Link>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-zinc-400 hover:text-white transition-colors">
                I'm feeling lucky
              </Link>
       
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
