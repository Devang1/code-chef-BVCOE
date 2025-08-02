"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Target, Eye, Lightbulb, Rocket, Heart, Star } from "lucide-react"
import ExpandableCardDemo from "@/components/ui/expandable-card-demo-standard";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function VisionMission() {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) return null 
  return (
    <section
      id="vision"
      className="py-16 md:py-24 bg-gradient-to-b from-[#121212] to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 border border-primary/5 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block p-2 md:p-3 bg-primary/10 rounded-full mb-4 md:mb-6"
          >
            <Rocket className="w-6 h-6 md:w-8 md:h-8 text-primary animate-bounce-slow" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4 md:mb-6">Vision & Mission</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Our guiding principles and aspirations that drive us forward
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 mb-12 md:mb-16">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-blue-800/50 hover:border-primary/70 transition-all duration-500 shadow-2xl hover:shadow-primary/20 h-full">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                  <Eye className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white">Vision</h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-300 leading-relaxed text-base md:text-lg"
              >
               At CodeChef, we imagine a world in which programming is a fun gaming experience where coders are not just solving problems, but unlocking new worlds, leveling up their skills, and maybe even making friends along the way. We want to ignite your curiosity wherever possible and celebrate every single milestone (whether big or small) while we turn learning into a festival of discovery. Typically, we focus on providing challenges, contests and a community so that through competitive learning, you can challenge yourself against your peers. Whether you’re racing through challenges, teaming up for contests, or sharing your “aha!” moments, CodeChef is where you come for the fun and stay for the adventure—making coding not just a skill, but a joy-filled journey for everyone.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="mt-4 md:mt-6 flex justify-end"
              >
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-purple-800/50 hover:border-primary/70 transition-all duration-500 shadow-2xl hover:shadow-primary/20 h-full">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl md:rounded-2xl flex items-center text-white justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white">Mission</h3>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="text-white leading-relaxed text-base md:text-lg"
              >
                <ExpandableCardDemo />
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="mt-4 md:mt-6 flex justify-end"
              >
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}