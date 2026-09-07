import { type ReactNode, createContext, useContext } from 'react'

interface SectionContextType {
  registerSection: (id: string, ref: HTMLElement | null) => void
  scrollToSection: (id: string) => void
}

const SectionContext = createContext<SectionContextType>({
  registerSection: () => {},
  scrollToSection: () => {},
})

export function SectionProvider({ children }: { children: ReactNode }) {
  const sections = new Map<string, HTMLElement>()

  const registerSection = (id: string, ref: HTMLElement | null) => {
    if (ref) sections.set(id, ref)
  }

  const scrollToSection = (id: string) => {
    const el = sections.get(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <SectionContext.Provider value={{ registerSection, scrollToSection }}>
      {children}
    </SectionContext.Provider>
  )
}

export function useSection() {
  return useContext(SectionContext)
}
