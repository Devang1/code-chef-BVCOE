"use client"

import { motion, useAnimation, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export function EventPhotosCarousel() {
  const controls = useAnimation()
  const carouselRef = useRef<HTMLDivElement>(null)
  const [carouselWidth, setCarouselWidth] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Sample event photos - replace with your actual images
  const eventPhotos = [
    { id: 1, src: '/event/techtonic.jpg', alt: 'Techtonic 2.0' },
    { id: 2, src: '/event/idea-roulette.jpg', alt: 'Idea Roulette' },
    { id: 7, src: '/event/idea-roulette1.jpg', alt: 'Idea Roulette' },
    { id: 3, src: '/event/dsa-webinar.jpg', alt: 'DSA Webinar' },
    { id: 4, src: '/event/dataverse.jpg', alt: 'Dataverse workshop' },
    { id: 5, src: '/event/mba-insights.jpg', alt: 'MBA Insights seminar' },
    { id: 6, src: '/event/ipl-auction.jpg', alt: 'IPL Auction' },
    { id: 8, src: '/event/learn-to-create.jpg', alt: 'Learn To Create' },
  ]

  // Calculate the width of the carousel
  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  // Auto-scroll animation
  useEffect(() => {
    if (isPlaying) {
      controls.start({
        x: -carouselWidth,
        transition: {
          x: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [isPlaying, carouselWidth, controls])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 0) {
      // Dragged right - go to previous
      goToPrev()
    } else if (info.offset.x < 0) {
      // Dragged left - go to next
      goToNext()
    }
  }

  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? eventPhotos.length - 1 : prev - 1))
    controls.start({ x: -currentIndex * 300 }) // Adjust 300 to your item width
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev === eventPhotos.length - 1 ? 0 : prev + 1))
    controls.start({ x: -currentIndex * 300 }) // Adjust 300 to your item width
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="py-12 md:py-16 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 i">
        <h3 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4 md:mb-6 text-center">
          Event Highlights
        </h3>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 my-4">
            Highlights from the moments that sparked innovation, coding, and collaboration
        </p>
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 hover:bg-primary transition-all"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 hover:bg-primary transition-all"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Play/Pause button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 hover:bg-primary transition-all"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>

          <motion.div 
            ref={carouselRef}
            className="overflow-hidden cursor-grab"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div 
              className="flex gap-4 md:gap-6"
              drag="x"
              dragConstraints={{ right: 0, left: -carouselWidth }}
              animate={controls}
              onDragEnd={handleDragEnd}
            //   onHoverStart={() => setIsPlaying(false)}
            //   onHoverEnd={() => setIsPlaying(true)}
            >
              {[...eventPhotos, ...eventPhotos].map((photo, index) => (
                <motion.div 
                  key={`${photo.id}-${index}`}
                  className="relative min-w-[250px] md:min-w-[300px] h-[180px] md:h-[220px] rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 250px, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span className="text-white font-medium">{photo.alt}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}