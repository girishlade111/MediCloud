import { motion } from 'framer-motion'

const logos = [
  {
    name: 'MediCore',
    paths: (
      <>
        <rect x="2" y="6" width="28" height="20" rx="4" fill="#D1D5DB" />
        <rect x="6" y="10" width="20" height="3" rx="1.5" fill="#9CA3AF" />
        <rect x="6" y="16" width="14" height="2" rx="1" fill="#9CA3AF" />
      </>
    ),
  },
  {
    name: 'HealthSync',
    paths: (
      <>
        <circle cx="16" cy="16" r="14" fill="#D1D5DB" />
        <path d="M10 16h12M16 10v12" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: 'CareBridge',
    paths: (
      <>
        <rect x="2" y="4" width="28" height="24" rx="4" fill="#D1D5DB" />
        <circle cx="10" cy="14" r="4" fill="#9CA3AF" />
        <path d="M16 12l6 4-6 4" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    name: 'VitalTech',
    paths: (
      <>
        <path d="M4 16l8-8 8 8M6 14v10h8v-6h4v6h4V14" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  {
    name: 'PulseNet',
    paths: (
      <>
        <rect x="4" y="6" width="24" height="20" rx="6" fill="#D1D5DB" />
        <path d="M12 22l4-12 2 6 2-6 4 12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function TrustedBy() {
  return (
    <section className="bg-[#F8F8F8] py-10 overflow-hidden" aria-label="Trusted by">
      <div className="container-main">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-8 md:gap-12"
        >
          <motion.div variants={item} className="w-full md:w-auto">
            <h2 className="text-[#1E1E1E] text-lg font-semibold mb-1">Trusted by</h2>
            <p className="text-[#9CA3AF] text-sm max-w-[260px]">
              We safeguard your practice with full security and HIPAA compliance.
            </p>
          </motion.div>
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={item}
              whileHover={{ opacity: 1 }}
              className="opacity-40 hover:opacity-80 transition-opacity duration-300"
            >
              <svg width="100" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-20 md:w-24">
                {logo.paths}
              </svg>
              <span className="sr-only">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
