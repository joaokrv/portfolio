import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { SocialDock } from '../components/ui/SocialDock'

export function AppRouter() {
  return (
    <HashRouter>
      <SocialDock />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
