import { motion } from 'framer-motion'

const steps = [
  { number: '1', title: 'Sign Up', desc: 'Create your provider profile and customize your clinic branding.' },
  { number: '2', title: 'Add Staff', desc: 'Invite your team of doctors, specialists, and front-desk admins.' },
  { number: '3', title: 'Start Consults', desc: 'Begin hosting secure consultations and managing patient care.' },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const stepItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#003E46] py-24 md:py-28 overflow-hidden">
      <div className="container-main">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[700px] mx-auto mb-16"
        >
          <h2 className="text-white text-[36px] md:text-[44px] font-medium leading-tight">
            Get started with MediCloud in 3 easy steps
          </h2>
          <p className="text-white/70 text-base md:text-lg mt-4 leading-relaxed">
            Simple, supported, and designed to fit the way you work.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-[900px] mx-auto"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={stepItem}
              className="text-center"
            >
              <motion.span
                whileHover={{ scale: 1.15 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#003E46] text-lg font-bold"
              >
                {step.number}
              </motion.span>
              <h3 className="text-white text-2xl font-medium mt-6 mb-3">{step.title}</h3>
              <p className="text-white/70 text-[15px] leading-relaxed max-w-[260px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#FF8A65] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full no-underline transition-colors duration-200 hover:bg-[#e67a5a]"
          >
            Get a Demo
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white text-[#1E1E1E] text-[15px] font-semibold px-8 py-3.5 rounded-full no-underline transition-colors duration-200 hover:bg-gray-100"
          >
            Take a Quick Tour
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
