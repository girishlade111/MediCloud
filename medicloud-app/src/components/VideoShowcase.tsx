import { motion } from 'framer-motion'
import { Play, CheckCircle } from 'lucide-react'

const checklist = [
  'Multi-device HD video conferencing',
  'Real-time clinical documentation',
  'Secure patient portal & messaging',
  'Automated billing & coding',
]

export default function VideoShowcase() {
  return (
    <section className="bg-[#F8F8F8] py-20 md:py-28 overflow-hidden">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[55%]"
          >
            <div className="relative w-full aspect-video bg-[#E5E7EB] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer"
                >
                  <Play size={32} className="text-[#FF8A65] ml-1" fill="#FF8A65" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[45%]"
          >
            <h2 className="text-[#1E1E1E] text-[36px] md:text-[44px] font-medium leading-tight">
              Everything a Virtual Clinic Needs
            </h2>
            <p className="text-[#6B7280] text-base mt-5 leading-relaxed max-w-[500px]">
              We have built a comprehensive platform to make delivery of care online easy, safe, and compliant.
            </p>

            <ul className="mt-8 space-y-4">
              {checklist.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={20} className="text-[#FF8A65] mt-0.5 shrink-0" />
                  <span className="text-[#1E1E1E] text-[15px] font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="mt-10"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#FF8A65] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full no-underline transition-colors duration-200 hover:bg-[#e67a5a]"
              >
                See All Features
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
