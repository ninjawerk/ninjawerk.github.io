import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { CaseStudy } from './pages/CaseStudy'

/** Scroll to the hash target on navigation, otherwise scroll to top. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
