"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  CalendarDays, 
  Clock, 
  MapPin, 
  Users, 
  HelpCircle, 
  Link as LinkIcon,
  Sparkles,
  FileText,
  MessageSquare
} from "lucide-react"
import Link from "next/link"

const timelineData = {
  rounds: [
    {
      title: "Phase 1: Ignition",
      start: "12:00 AM, 17 May",
      end: "31 May, 11:59pm",
      mode: "Online",
      description: "A 3-hour open-book timed online quiz. Includes 10 questions and 1 bonus question, all auto-graded. Topics include data extraction, transformation, cleaning, API/web scraping, statistical analysis, image/signal processing, time series, data visualization, file formats, encryption, and multi-source integration.",
      link: "https://forms.office.com/r/2ya6g1nDkf",
      linkText: "Phase 1 Quiz"
    },
    {
      title: "Phase 2: Mission Dashboard",
      start: "3:00pm, 22 May",
      end: "8:00 PM, 1 Jun",
      mode: "Online",
      description: "Present a clear problem statement and relevant data source (real or simulated), preferably tied to real-world use (e.g. ISRO planning, disaster response). Deliverables: PPT with team info, problem, data, methodology, visuals, prototype (video or website), and tech stack.",
      link: "https://rb.gy/9pufya",
      linkText: "Phase 2 Site"
    },
    {
      title: "Phase 2.5: Networking Session and Bonus Round",
      start: "9:00 AM, 6 Jun",
      end: "12:00 PM, 6 Jun",
      location: "ICSR Room 3",
      description: "A surprise bonus round to test creativity and team synergy.",
      morseCode: "..-. ..- -. / . ...- . -. - / .-- .. - .... / . -..- -.-. .. - .. -. --. / .--. .-. .. --.. . ..."
    },
    {
      title: "Round 3: Dashboard Presentation & Q&A",
      start: "3:00 PM, 7 Jun",
      end: "5:30 PM, 7 Jun",
      location: "ICSR Room 3",
      description: "Teams present their final prototypes in person. Judges will conduct a debate-like Q&A to test the strength and reasoning of your approach."
    }
  ],
  rules: {
    link: "https://docs.google.com/document/d/1XiLA5-9Vh1Gx03-2omkIoMPg7haWQhv6pxf7OfomagM/edit?tab=t.0"
  },
  faqs: [
    {
      question: "Is prior space or astronomy knowledge required?",
      answer: "No, prior space or astronomy knowledge is not required for this competition. This is primarily a geospatial data science and remote sensing hackathon, not an astronomy or astrophysics competition."
    },
    {
      question: "Are participants allowed to use LLMs such as ChatGPT?",
      answer: "Yes, but we will conduct a plagiarism check in Round 2."
    },
    {
      question: "Can we form teams and what's the ideal team size?",
      answer: "Yes, you can form your own teams. If you don't have one, just indicate it in the registration form—we'll assign you to a team."
    },
    {
      question: "Can we propose our own problem statement instead of using the predefined problems?",
      answer: "No, you can't."
    }
  ]
}

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
        <div className="stars"></div>
        <div className="twinkling"></div>
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
            <CalendarDays className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Competition Timeline</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Event Timeline
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto px-6">
            Key dates, rules, and frequently asked questions for DataVista 2025.
          </p>
        </motion.div>

        {/* Timeline Sections */}
        <div className="container mx-auto px-6 pb-20 space-y-16">
          {/* Rounds Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Sparkles className="w-7 h-7 text-purple-400" />
              Competition Rounds
            </h2>
            <div className="space-y-8">
              {timelineData.rounds.map((round, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{round.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-4 text-zinc-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span><strong>Start:</strong> {round.start}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-red-400" />
                      <span><strong>End:</strong> {round.end}</span>
                    </div>
                    {round.mode && (
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-green-400" />
                        <span><strong>Mode:</strong> {round.mode}</span>
                      </div>
                    )}
                    {round.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-yellow-400" />
                        <span><strong>Location:</strong> {round.location}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-zinc-400 mb-4 leading-relaxed">{round.description}</p>
                  {round.morseCode && (
                    <p className="text-zinc-500 font-mono text-sm mb-4">MO: {round.morseCode}</p>
                  )}
                  {round.link && (
                    <Link href={round.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                      <LinkIcon className="w-4 h-4" />
                      {round.linkText || "Learn More"}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Rules Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <FileText className="w-7 h-7 text-green-400" />
              Competition Rules
            </h2>
            <div className="text-center">
              <Link href={timelineData.rules.link} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold">
                <LinkIcon className="w-5 h-5" />
                View Rules Document
              </Link>
            </div>
          </motion.section>

          {/* FAQs Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <HelpCircle className="w-7 h-7 text-yellow-400" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {timelineData.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <h4 className="text-xl font-semibold mb-2 text-yellow-300 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5"/> {faq.question}
                  </h4>
                  <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
