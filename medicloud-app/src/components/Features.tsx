import { motion } from 'framer-motion'
import { Video, Calendar, FileText, Pill, CreditCard, Shield } from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Video Consultations',
    desc: 'HD, peer-to-peer encrypted video calls with built-in waiting rooms and screen sharing.',
  },
  {
    icon: Calendar,
    title: 'Scheduling',
    desc: 'Automated booking, timezone detection, and calendar sync with Google and Outlook.',
  },
  {
    icon: FileText,
    title: 'Digital EHR',
    desc: 'Structured clinical notes, ICD-10 coding, and longitudinal patient health records.',
  },
  {
    icon: Pill,
    title: 'ePrescriptions',
    desc: 'Securely send prescriptions directly to pharmacies with automated interactions check.',
  },
  {
    icon: CreditCard,
    title: 'Payments',
    desc: 'Integrated billing, insurance claims processing, and direct patient payments.',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    desc: 'SOC2 Type II, HIPAA, and GDPR compliant with data residency options.',
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

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 overflow-hidden">
      <div className="container-main">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[650px] mx-auto mb-16"
        >
          <h2 className="text-[#1E1E1E] text-[36px] md:text-[44px] font-medium leading-tight">
            Clinical Excellence Integrated
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg mt-4">
            Everything you need to provide top-tier care from anywhere in the world.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardItem}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-[20px] p-8 h-[240px] flex flex-col border border-[#E5E7EB] transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-[#FF8A65]/30"
            >
              <f.icon size={48} className="text-[#FF8A65] mb-6" strokeWidth={1.5} />
              <h3 className="text-[#1E1E1E] text-xl font-medium mb-2">{f.title}</h3>
              <p className="text-[#6B7280] text-[15px] leading-relaxed flex-1">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
