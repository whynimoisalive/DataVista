"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Star, 
  SatelliteIcon, 
  GlobeIcon, 
  Wrench,
  BookOpen,
  Video,
  Code,
  Map,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  Cpu,
  Database,
  GitBranch,
  Terminal,
  Globe2,
  Rocket
} from "lucide-react"

// Resource data structure
const tracks = [
  {
    id: 1,
    title: "Space Debris Collision Risk Assessment",
    icon: SatelliteIcon,
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    description: "Build applications to assess space debris collision risks for satellites and spacecraft",
    techStack: {
      language: "Python",
      libraries: [
        { name: "AstroPy", description: "astronomical calculations" },
        { name: "Skyfield", description: "high-precision orbital mechanics" },
        { name: "NumPy, pandas", description: "data handling" },
        { name: "scikit-learn", description: "machine learning" },
        { name: "Matplotlib", description: "visualisation" }
      ],
      dataSources: [
        "Two-Line Element (TLE) data",
        "Conjunction Data Messages (CDMs)"
      ],
      tools: ["Google Colab"]
    },
    videos: [
      {
        title: "NASA NESC Academy: Space Debris Overview",
        url: "https://nescacademy.nasa.gov/video/fe98e63f00f74c42bc85bd357ee47b491d",
        type: "nasa"
      },
      {
        title: "ESA Webinar: CubeSats and Space Debris",
        url: "https://www.youtube.com/watch?v=QMACn43z4zo",
        type: "youtube"
      }
    ],
    roadmap: [
      "Acquire TLE and CDM data",
      "Use Skyfield to simulate satellite orbits",
      "Analyse CDMs and apply ML models to assess risk",
      "Visualise trajectories and collision points",
      "Report findings and mitigation strategies"
    ],
    resources: [
      { name: "AstroPy", url: "https://www.youtube.com/playlist?list=PLqgA9FXm2K5zI_--T3WB3STCjJIrIFRG5", icon: Code },
      { name: "Skyfield", url: "https://www.youtube.com/watch?v=FVEEndIwOSA", icon: Rocket },
      { name: "NumPy", url: "https://www.youtube.com/watch?v=QUT1VHiLmmI", icon: Database },
      { name: "pandas", url: "https://www.youtube.com/watch?v=2uvysYbKdjM", icon: Database },
      { name: "scikit-learn", url: "https://www.youtube.com/watch?v=hDKCxebp88A", icon: Cpu },
      { name: "Google Colab", url: "https://www.youtube.com/watch?v=RLYoEyIHL6A", icon: Terminal }
    ],
    tutorial: {
      title: "Satellite Collision Detection",
      url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/SpaceEx_p057/space-exploration/satellite-collision-tracking",
      source: "Science Buddies"
    }
  },
  {
    id: 2,
    title: "Disaster Management Using Earth Observation Data",
    icon: GlobeIcon,
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    description: "Create solutions using satellite data for natural disaster prediction, monitoring, or response",
    techStack: {
      language: "Python",
      libraries: [
        { name: "Rasterio, GDAL", description: "geospatial data processing" },
        { name: "GeoPandas, Shapely", description: "spatial data structures" },
        { name: "NumPy, pandas", description: "data manipulation" },
        { name: "scikit-learn", description: "machine learning" },
        { name: "Matplotlib, Folium", description: "visualisation" }
      ],
      dataSources: ["Sentinel-1", "Sentinel-2", "MODIS"],
      tools: ["Google Earth Engine", "Google Colab"]
    },
    videos: [
      {
        title: "NASA ARSET Series",
        url: "https://www.youtube.com/playlist?list=PLiuUQ9asub3RvLIDzjsedSCZ-itFfef3C",
        type: "playlist"
      },
      {
        title: "Earth Observation Methods Course",
        url: "https://www.youtube.com/watch?v=Pz-96PMm5x8",
        type: "youtube"
      }
    ],
    roadmap: [
      "Collect Sentinel/MODIS imagery",
      "Preprocess with GDAL and Rasterio",
      "Extract indices (NDVI, water indices)",
      "Train models for disaster detection",
      "Visualise affected areas",
      "Deploy to dashboard or app"
    ],
    resources: [
      { name: "GDAL Tutorial", url: "https://www.youtube.com/watch?v=gkdNvwmoV_E", icon: Globe2 },
      { name: "Rasterio Tutorial", url: "https://www.youtube.com/watch?v=LVt8CezezZQ", icon: Map },
      { name: "Shapely", url: "https://www.youtube.com/watch?v=LwpqA2WMR_8", icon: Layers },
      { name: "GeoPandas", url: "https://www.youtube.com/watch?v=tp6uRrzTQRY", icon: Database },
      { name: "CesiumJS", url: "https://www.youtube.com/watch?v=6T_zuMpqPCE", icon: Globe2 },
      { name: "kepler.gl", url: "https://www.youtube.com/watch?v=BEZjt08Myxs", icon: Map },
      { name: "NASA WorldWind", url: "https://www.youtube.com/watch?v=AmgLvn5_vK8", icon: Globe2 },
      { name: "NumPy", url: "https://www.youtube.com/watch?v=QUT1VHiLmmI", icon: Database },
      { name: "pandas", url: "https://www.youtube.com/watch?v=2uvysYbKdjM", icon: Database },
      { name: "scikit-learn", url: "https://www.youtube.com/watch?v=hDKCxebp88A", icon: Cpu },
      { name: "Google Colab", url: "https://www.youtube.com/watch?v=RLYoEyIHL6A", icon: Terminal }
    ],
    tutorial: {
      title: "Deep Learning for Disaster Relief",
      url: "https://www.youtube.com/watch?v=jp1zRjhtZE4",
      source: "enthought.com"
    }
  },
  {
    id: 3,
    title: "Predictive Maintenance for Satellite Systems",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    description: "Develop systems that predict satellite component failures to extend mission life",
    techStack: {
      language: "Python",
      libraries: [
        { name: "NumPy, pandas", description: "data processing" },
        { name: "scikit-learn", description: "ML algorithms" },
        { name: "TensorFlow, Keras", description: "deep learning" },
        { name: "Matplotlib, Seaborn", description: "visualisation" }
      ],
      dataSources: [
        "Satellite telemetry data",
        "NASA Prognostics Data Repository"
      ],
      tools: ["Google Colab"]
    },
    videos: [
      {
        title: "Predictive Maintenance with Deep Learning",
        url: "https://www.youtube.com/watch?v=InMlOMcUzM4",
        type: "youtube"
      },
      {
        title: "Machine Learning for Predictive Maintenance",
        url: "https://www.youtube.com/watch?v=BApzsgq32mM",
        type: "youtube"
      }
    ],
    roadmap: [
      "Acquire satellite telemetry data",
      "Preprocess and normalise data",
      "Engineer features for health prediction",
      "Train ML/DL models",
      "Evaluate with metrics like F1-score",
      "Deploy for real-time monitoring"
    ],
    resources: [
      { name: "NumPy", url: "https://www.youtube.com/watch?v=QUT1VHiLmmI", icon: Database },
      { name: "pandas", url: "https://www.youtube.com/watch?v=2uvysYbKdjM", icon: Database },
      { name: "scikit-learn", url: "https://www.youtube.com/watch?v=hDKCxebp88A", icon: Cpu },
      { name: "TensorFlow", url: "https://www.youtube.com/watch?v=tpCFfeUEGs8", icon: Cpu },
      { name: "PyTorch", url: "https://www.youtube.com/watch?v=V_xro1bcAuA", icon: Cpu },
      { name: "Google Colab", url: "https://www.youtube.com/watch?v=RLYoEyIHL6A", icon: Terminal }
    ],
    tutorial: {
      title: "Machine Learning for Predictive Maintenance",
      url: "https://www.youtube.com/watch?v=ZhXqXPyVKZU",
      source: "A robotic YouTube Tutorial :C"
    }
  }
]

export default function ResourcesPage() {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "techstack", label: "Tech Stack", icon: Code },
    { id: "videos", label: "Videos", icon: Video },
    { id: "roadmap", label: "Roadmap", icon: Map },
    { id: "resources", label: "Resources", icon: Database },
    { id: "tutorial", label: "Hands-On", icon: Wrench }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 400 - 200],
                y: [0, Math.random() * 400 - 200],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-20 pb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Competition Resources</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Resource Library
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto px-6">
            Everything you need to build winning solutions for DataVista Competition 2025
          </p>
        </motion.div>

        {/* Track selector */}
        <div className="container mx-auto px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {tracks.map((track, index) => (
              <motion.button
                key={track.id}
                onClick={() => setSelectedTrack(index)}
                className={`relative group px-6 py-4 rounded-2xl border transition-all duration-300 ${
                  selectedTrack === index
                    ? 'border-white/30 bg-white/10 backdrop-blur-md'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${track.bgGradient}`}>
                    <track.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Track #{track.id}</div>
                    <div className="text-sm text-zinc-400 max-w-[200px]">{track.title}</div>
                  </div>
                </div>
                {selectedTrack === index && (
                  <motion.div
                    layoutId="trackSelector"
                    className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Section tabs */}
        <div className="container mx-auto px-6 mb-12">
          <div className="flex justify-center">
            <div className="flex gap-2 p-2 bg-white/5 backdrop-blur-md rounded-2xl">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-white/20 text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedTrack}-${activeSection}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto"
            >
              {/* Overview Section */}
              {activeSection === "overview" && (
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div 
                    className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tracks[selectedTrack].bgGradient} mb-6`}>
                      {React.createElement(tracks[selectedTrack].icon, { className: "w-8 h-8" })}
                    </div>
                    <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${tracks[selectedTrack].color} bg-clip-text text-transparent`}>
                      {tracks[selectedTrack].title}
                    </h2>
                    <p className="text-zinc-300 leading-relaxed">
                      {tracks[selectedTrack].description}
                    </p>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.div 
                      className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Database className="w-5 h-5 text-blue-400" />
                        Data Sources
                      </h3>
                      <ul className="space-y-2">
                        {tracks[selectedTrack].techStack.dataSources.map((source, i) => (
                          <li key={i} className="flex items-center gap-2 text-zinc-400">
                            <ChevronRight className="w-4 h-4" />
                            {source}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div 
                      className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-purple-400" />
                        Development Tools
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tracks[selectedTrack].techStack.tools.map((tool, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Tech Stack Section */}
              {activeSection === "techstack" && (
                <div className="space-y-6">
                  <motion.div 
                    className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Code className="w-6 h-6 text-green-400" />
                      <h3 className="text-2xl font-semibold">Technology Stack</h3>
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-sm text-zinc-400">Primary Language</span>
                      <div className="text-xl font-mono mt-1">{tracks[selectedTrack].techStack.language}</div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {tracks[selectedTrack].techStack.libraries.map((lib, i) => (
                        <motion.div
                          key={i}
                          className="bg-white/5 rounded-xl p-4 border border-white/10"
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <div className="font-semibold text-lg mb-1">{lib.name}</div>
                          <div className="text-sm text-zinc-400">{lib.description}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Videos Section */}
              {activeSection === "videos" && (
                <div className="grid md:grid-cols-2 gap-6">
                  {tracks[selectedTrack].videos.map((video, i) => (
                    <motion.a
                      key={i}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-red-500/20 rounded-xl group-hover:bg-red-500/30 transition-colors">
                          <Video className="w-6 h-6 text-red-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2 group-hover:text-red-400 transition-colors">
                            {video.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <span className="capitalize">{video.type}</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              )}

              {/* Roadmap Section */}
              {activeSection === "roadmap" && (
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center gap-3 mb-8">
                    <Map className="w-6 h-6 text-green-400" />
                    <h3 className="text-2xl font-semibold">Development Roadmap</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {tracks[selectedTrack].roadmap.map((step, i) => (
                      <motion.div
                        key={i}
                        className="flex gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center font-bold">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg">{step}</p>
                          {i < tracks[selectedTrack].roadmap.length - 1 && (
                            <div className="w-0.5 h-12 bg-gradient-to-b from-green-500/50 to-transparent ml-5 mt-2" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources Section */}
              {activeSection === "resources" && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tracks[selectedTrack].resources.map((resource, i) => (
                    <motion.a
                      key={i}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                          <resource.icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-semibold">{resource.name}</h4>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <span>View Tutorial</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              )}

              {/* Tutorial Section */}
              {activeSection === "tutorial" && (
                <motion.div
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl mb-6">
                    <Wrench className="w-8 h-8 text-yellow-400" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-2">{tracks[selectedTrack].tutorial.title}</h3>
                  <p className="text-zinc-400 mb-6">by {tracks[selectedTrack].tutorial.source}</p>
                  
                  <a
                    href={tracks[selectedTrack].tutorial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    Start Tutorial
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}