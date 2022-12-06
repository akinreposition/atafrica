import AnnouncementBanner from "./components/layout/AnnouncementBanner"
import Navigation from "./components/layout/Navigation"
import Home from "./pages/Home"

export default function App() {
  return (
    <div className="bg-gradient-to-b from-light-slate to-ambient-orange text-eggplant min-h-screen bg-fixed py-4">
      
      <AnnouncementBanner />
      <Navigation />
      <Home />
    </div>
  )
}