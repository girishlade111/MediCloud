import { motion } from 'framer-motion'
import { Shield, Play } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section className="relative min-h-[850px] flex items-center pt-20 overflow-hidden">
      <div className="container-main w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left Column */}
          <div className="w-full lg:w-[45%]">
            {/* Badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-1.5 bg-[#003E46]/10 text-[#003E46] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <Shield size={14} />
              <span>HIPAA Compliant & Secure</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-[#1E1E1E] text-[42px] md:text-[56px] lg:text-[64px] font-medium leading-[1.05] max-w-[550px]"
            >
              Run Your Virtual
              <br />
              Clinic Effortlessly
            </motion.h1>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-[#6B7280] text-base md:text-lg mt-6 max-w-[500px] leading-relaxed"
            >
              All-in-one telehealth platform designed for modern practices. Manage patients, clinical notes, and secure HD video consultations in one unified workspace.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-[#FF8A65] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full no-underline transition-colors duration-200 hover:bg-[#e67a5a]"
              >
                Get a Demo
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#E5E7EB] text-[#1E1E1E] text-[15px] font-semibold px-8 py-3.5 rounded-full no-underline transition-colors duration-200 hover:border-[#9CA3AF]"
              >
                <Play size={18} />
                Take a Quick Tour
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Large soft grey circle */}
              <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-[#F8F8F8] opacity-50" />

              {/* Doctor image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="320" height="380" viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[260px] md:w-[320px]" aria-hidden="true">
                  <ellipse cx="160" cy="340" rx="100" ry="20" fill="#E5E7EB" />
                  <circle cx="160" cy="140" r="70" fill="#E5E7EB" />
                  <path d="M100 220 Q160 200 220 220 L240 300 Q160 280 80 300 L100 220Z" fill="#E5E7EB" />
                  <rect x="145" y="195" width="30" height="80" rx="10" fill="#E5E7EB" />
                  <rect x="145" y="195" width="30" height="80" rx="10" fill="#E5E7EB" />
                </svg>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-4 left-0 md:-left-4 bg-[#003E46] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-lg"
              >
                0% <span className="font-normal opacity-80">Uptime</span>
              </motion.div>

              {/* Floating Badge 2 - Right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-16 right-0 md:-right-4 bg-[#003E46] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-lg"
              >
                &#10003; Primary Physician
              </motion.div>

              {/* Floating Badge 3 - Bottom Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-20 -left-2 md:-left-6 bg-[#003E46] text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-lg"
              >
                &#9733; 4.9 Rating
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
