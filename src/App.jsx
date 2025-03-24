import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Resume from "./components/Resume"; // Import Resume page

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        } />

        {/* Resume Page */}
        <Route path="/resume" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Resume />
          </div>
          </div>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
