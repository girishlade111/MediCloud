import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import VideoShowcase from './components/VideoShowcase'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <VideoShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
