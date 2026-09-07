import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Is MediCloud HIPAA compliant?',
    a: 'Yes. MediCloud is fully HIPAA compliant with SOC 2 Type II certification, audit logs, encryption at rest and in transit, and BAA agreements ready.',
  },
  {
    q: 'Can I migrate my existing patient data?',
    a: 'Absolutely. Our onboarding team provides full data migration support from most major EHR systems, including Epic, Cerner, and Athenahealth.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes, the Starter plan is free and includes up to 50 patients. No credit card required. You can upgrade to Professional anytime.',
  },
  {
    q: 'What devices does it work on?',
    a: 'MediCloud works on any modern web browser — desktop, tablet, and mobile. No software installation required for patients.',
  },
  {
    q: 'How does the ePrescription feature work?',
    a: 'You can write and send prescriptions directly to any pharmacy in the US and Canada. The system checks for drug interactions automatically using our clinical decision support engine.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 overflow-hidden">
      <div className="container-main max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1E1E1E] text-[36px] md:text-[44px] font-medium leading-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border border-[#E5E7EB] rounded-[16px] overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-[#1E1E1E] text-[15px] font-medium no-underline transition-colors duration-200 hover:bg-[#F8F8F8]"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                {faq.q}
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 ml-4"
                >
                  <Plus size={20} className="text-[#FF8A65]" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[#6B7280] text-[15px] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
