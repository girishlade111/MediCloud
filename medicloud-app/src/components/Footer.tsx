import { motion } from 'framer-motion'

const columns = [
  {
    title: 'Platform',
    links: ['Features', 'How It Works', 'Telehealth', 'EHR System', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Documentation', 'API Status', 'Community', 'Contact Support'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'HIPAA Notice', 'Cookie Policy', 'GDPR'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#003E46] pt-16 pb-8 overflow-hidden">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {columns.map((col) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white text-[14px] no-underline transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="#FF8A65"/>
              <path d="M14 20L18 24L26 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white text-base font-medium">MediCloud</span>
          </a>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
            <span className="text-white/60 text-sm">All systems operational</span>
          </div>

          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} MediCloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
