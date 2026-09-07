import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'We reduced no-show rates by 40% and doubled our patient reach within the first quarter. The video quality is exceptional.',
    name: 'Dr. Sarah Chen',
    title: 'MediCore Health',
    initials: 'SC',
  },
  {
    quote: 'The integrated EHR and e-prescription workflow saved our clinicians over 12 hours per week. A total game-changer.',
    name: 'Dr. James Adeyemi',
    title: 'CareBridge Network',
    initials: 'JA',
  },
  {
    quote: 'From a compliance standpoint, MediCloud gave us exactly what we needed. HIPAA, SOC2, and audit logs out of the box.',
    name: 'Maria Costa',
    title: 'VitalTech Group',
    initials: 'MC',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[650px] mx-auto mb-16"
        >
          <h2 className="text-[#1E1E1E] text-[36px] md:text-[44px] font-medium leading-tight">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg mt-4">
            See what our users have to say about MediCloud.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardItem}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-[20px] p-8 border border-[#E5E7EB] transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            >
              <Quote size={28} className="text-[#FF8A65]/40 mb-5" />
              <p className="text-[#6B7280] text-[15px] leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#FF8A65] flex items-center justify-center text-white text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#1E1E1E] text-[15px] font-medium">{t.name}</p>
                  <p className="text-[#9CA3AF] text-[13px]">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
