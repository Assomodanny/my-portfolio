import { MotionConfig } from 'framer-motion'
import BackToTop from './components/layout/BackToTop'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Skills from './components/sections/Skills'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  )
}

export default App