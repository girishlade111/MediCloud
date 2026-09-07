import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 0,
    popular: false,
    features: [
      'Up to 50 patients',
      'HD video consultations',
      'Basic scheduling',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: 99,
    popular: true,
    features: [
      'Unlimited patients',
      'HD video + screen sharing',
      'Advanced scheduling & calendar',
      'Digital EHR w/ ICD-10 coding',
      'ePrescriptions',
      'Integrated payments',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: null,
    popular: false,
    features: [
      'Everything in Professional',
      'Custom integrations',
      'Dedicated account manager',
      'Custom SLA & SSO',
      'On-premise deployment',
      'White-label options',
    ],
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[650px] mx-auto mb-16"
        >
          <h2 className="text-[#1E1E1E] text-[36px] md:text-[44px] font-medium leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg mt-4">
            Choose the plan that fits your practice. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={cardItem}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-[20px] p-8 flex flex-col border transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] ${
                tier.popular
                  ? 'bg-[#FF8A65] text-white border-[#FF8A65]'
                  : 'bg-white text-[#1E1E1E] border-[#E5E7EB]'
              }`}
            >
              {tier.popular && (
                <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-medium mb-3">{tier.name}</h3>
              <div className="mb-6">
                {tier.price !== null ? (
                  <>
                    <span className={`text-[42px] font-medium ${tier.popular ? 'text-white' : 'text-[#1E1E1E]'}`}>
                      ${tier.price}
                    </span>
                    <span className={`text-base ml-1 ${tier.popular ? 'text-white/70' : 'text-[#9CA3AF]'}`}>/mo</span>
                  </>
                ) : (
                  <span className={`text-[32px] font-medium ${tier.popular ? 'text-white' : 'text-[#1E1E1E]'}`}>
                    Custom
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={18} className={`${tier.popular ? 'text-white' : 'text-[#FF8A65]'} mt-0.5 shrink-0`} />
                    <span className={`text-[15px] ${tier.popular ? 'text-white/90' : 'text-[#6B7280]'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center justify-center text-[15px] font-semibold px-6 py-3 rounded-full no-underline transition-colors duration-200 ${
                  tier.popular
                    ? 'bg-white text-[#FF8A65] hover:bg-gray-100'
                    : 'bg-[#FF8A65] text-white hover:bg-[#e67a5a]'
                }`}
              >
                {tier.price === 0 ? 'Get Started Free' : tier.price ? 'Subscribe' : 'Contact Sales'}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
