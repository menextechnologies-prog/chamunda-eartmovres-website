import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import Services from './components/Services.jsx'
import Fleet from './components/Fleet.jsx'
import WhyUs from './components/WhyUs.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import ServiceArea from './components/ServiceArea.jsx'
import Faq from './components/Faq.jsx'
import FinalCta from './components/FinalCta.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import MachinesPage from './pages/MachinesPage.jsx'
// FloatingActions (floating WhatsApp button) removed on request —
// re-add by importing './components/FloatingActions.jsx' and rendering it here.

// Tiny hash router: "#/machines" opens the machines page, everything else
// (including plain "#section" anchors) renders the home page.
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onHashChange = () => {
      const h = window.location.hash
      setHash(h)
      if (h.startsWith('#/')) {
        window.scrollTo(0, 0)
      } else if (h.length > 1) {
        setTimeout(() => {
          document.getElementById(h.slice(1))?.scrollIntoView({ behavior: 'smooth' })
        }, 60)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  const machines = hash.startsWith('#/machines')

  useEffect(() => {
    if (machines) window.scrollTo(0, 0)
  }, [machines])

  return machines ? <MachinesPage /> : <HomePage />
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Fleet />
        <WhyUs />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <Faq />
        <FinalCta />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
