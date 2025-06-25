import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FloatingDock } from './components/ui/floating-dock';
import HomePage from './pages/HomePage';
import { GitFork, Github, House, Instagram, Linkedin, ShieldCheck, Twitter, UserRound } from 'lucide-react';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';

function App() {
  return (
    <BrowserRouter>
      {/* Full-Screen Page Container */}
      <div className="relative w-screen h-screen overflow-hidden">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certificates' element={<Certificates />} />
        </Routes>

        {/* FloatingDock - Fixed at Bottom Center */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <FloatingDock
            items={[
              { title: "Home", icon: <House color="#ffffff" />, href: "/" },
              { title: "About me", icon: <UserRound color="#ffffff" />, href: "/about" },
              { title: "Projects", icon: <GitFork color="#ffffff" />, href: "/projects" },
              { title: "Certificates", icon: <ShieldCheck color="#ffffff" />, href: "/certificates" },
              { title: "LinkedIn", icon: <Linkedin color="#ffffff" />, href: "https://www.linkedin.com/in/jatan-mathasoliya/" },
              { title: "Github", icon: <Github color="#ffffff" />, href: "https://github.com/Jatan-Mathasoliya" },
              { title: "Instagram", icon: <Instagram color="#ffffff" />, href: "https://www.instagram.com/jatanmathasoliya/" },
              { title: "Twitter", icon: <Twitter color="#ffffff" />, href: "https://x.com/JatanM_010" },
            ]}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
