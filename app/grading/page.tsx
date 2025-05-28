"use client"

import React from "react"
import { motion } from "framer-motion"
import { Calculator, Award, Users, Filter, Gift, ListChecks, Star } from "lucide-react"

export default function GradingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background opacity-100"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted backdrop-blur-md rounded-full border border-border mb-6">
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Competition Grading</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Grading Criteria
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto px-6">
            Understanding how submissions are evaluated for DataVista 2025.
          </p>
        </motion.div>

        {/* Grading Sections */}
        <div className="container mx-auto px-6 pb-20 space-y-16">
          {/* Score Formula Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-foreground">
              <Award className="w-7 h-7 text-accent" />
              Data Vista – Score Formula
            </h2>
            <div className="bg-card backdrop-blur-md rounded-2xl p-6 md:p-8 border border-border shadow-xl text-center">
              <p className="text-xl md:text-2xl font-mono text-accent tracking-wider">
                Final Score = [(R₁ × 0.10) + (R₂ × 0.35) + (R₃ × 0.55)] + B<sub className="text-sm">Q</sub> + B<sub className="text-sm">P</sub>
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-accent" />
                Where:
              </h3>
              <ul className="list-disc list-inside text-secondary space-y-2 pl-4">
                <li><strong className="text-foreground">R₁</strong>: Score in <strong className="text-accent">Round 1</strong> (objective or score-based quiz/task)</li>
                <li>
                  <strong className="text-foreground">R₂</strong>: Score in <strong className="text-accent">Round 2</strong>, judged by an <strong className="text-accent">industry professional</strong>
                  <blockquote className="mt-2 ml-4 pl-3 border-l-2 border-border text-sm text-muted-foreground">
                    <strong>AI filtering</strong> is applied <strong>before</strong> scoring to remove:
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Redundant submissions</li>
                      <li>Incomplete submissions</li>
                      <li>Trash/low-effort submissions</li>
                    </ul>
                    Only <strong>valid</strong> entries move on to human judging.
                  </blockquote>
                </li>
                <li><strong className="text-foreground">R₃</strong>: Score in <strong className="text-accent">Round 3</strong>, judged by a <strong className="text-accent">human judge</strong></li>
                <li><strong className="text-foreground">B<sub className="text-sm">Q</sub></strong>: Bonus for correct <strong className="text-accent">Bonus Question</strong> (+0.035)</li>
                <li><strong className="text-foreground">B<sub className="text-sm">P</sub></strong>: Bonus for <strong className="text-accent">Bonus Round participation</strong> (+0.03)</li>
              </ul>
              <p className="text-secondary mt-3 pl-4">
                <Star className="w-4 h-4 inline mr-1 text-accent" /> All scores R₁, R₂, and R₃ are <strong className="text-foreground">normalized to 1.0</strong> before weights are applied.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                Maximum Final Score:
              </h3>
              <div className="bg-muted backdrop-blur-md rounded-lg p-4 border border-border shadow-md text-center inline-block">
                <p className="text-xl font-mono text-accent">
                  Max Score = 1.0 + 0.035 + 0.03 = <span className="font-bold text-2xl">1.065</span>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Judging Workflow Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-foreground">
              <Users className="w-7 h-7 text-accent" />
              Judging Workflow
            </h2>
            <p className="text-center text-secondary mb-6">Each track follows the <strong className="text-foreground">same evaluation and scoring structure</strong>, but is <strong className="text-foreground">judged independently</strong>.</p>
            <div className="space-y-6">
              {[
                { title: "Round 1 – Objective Evaluation", weight: "10%", details: "Purely score-based (e.g., quiz, automated challenge).", iconColor: "text-accent" },
                { 
                  title: "Round 2 – AI Filter + Human Judging", 
                  weight: "35%", 
                  details: "Valid entries are judged by an industry expert.", 
                  iconColor: "text-accent",
                  subDetails: [
                    "AI filtering removes: Spam or trash entries, Redundant or copied work, Incomplete submissions."
                  ],
                  note: "Three separate winners – one per track."
                },
                { title: "Round 3 – Final Submission / Presentation", weight: "55%", details: "Judged solely by a human judge.", iconColor: "text-accent" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-card backdrop-blur-md rounded-xl p-6 border border-border shadow-lg`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <h3 className={`text-2xl font-semibold mb-2 text-foreground`}>{item.title}</h3>
                  <p className="text-secondary mb-1">{item.details}</p>
                  <p className="text-sm text-muted-foreground mb-2">Carries <strong className={item.iconColor}>{item.weight} weight</strong>.</p>
                  {item.subDetails && (
                    <blockquote className="mt-2 ml-4 pl-3 border-l-2 border-border text-sm text-muted-foreground">
                      {item.subDetails.map((sd, i) => <p key={i}>{sd}</p>)}
                    </blockquote>
                  )}
                  {item.note && <p className={`mt-2 text-sm ${item.iconColor} italic`}>{item.note}</p>}
                </motion.div>
              ))}
              
              <motion.div
                  className="bg-card backdrop-blur-md rounded-xl p-6 border border-border shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                <h3 className="text-2xl font-semibold mb-2 text-foreground flex items-center gap-2">
                  <Gift className="w-6 h-6 text-accent" /> Bonus Additions
                </h3>
                <ul className="list-disc list-inside text-secondary space-y-1 pl-4">
                  <li><strong>Bonus Question</strong> (if answered correctly): <span className="text-accent font-semibold">+0.035</span></li>
                  <li><strong>Bonus Round Participation</strong>: <span className="text-accent font-semibold">+0.03</span></li>
                </ul>
                <blockquote className="mt-3 ml-4 pl-3 border-l-2 border-border text-sm text-muted-foreground">
                  The <strong className="text-accent">Bonus FUN Round</strong> will have <strong className="text-foreground">separate winners</strong>, selected independently of the main scoring.
                  Winners of the Bonus FUN Round will receive <strong className="text-foreground">Amazon vouchers</strong> as rewards.
                </blockquote>
              </motion.div>
            </div>
          </motion.section>

          {/* Track Structure Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-foreground">
              <Filter className="w-7 h-7 text-accent" />
              Track Structure
            </h2>
            <div className="bg-card backdrop-blur-md rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <ul className="space-y-3 text-secondary">
                {[
                  "There are three independent tracks.",
                  "Each track is scored and judged separately.",
                  "Each produces its own set of winners.",
                  "The same scoring formula and judging logic apply across all tracks."
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                  >
                    <Star className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
