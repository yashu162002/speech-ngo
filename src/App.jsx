import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Activities from "./pages/Activities";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/programs" element={<Programs />} />

        <Route path="/impact" element={<Impact />} />

        <Route path="/activities" element={<Activities />} />

        <Route path="/team" element={<Team />} />

        <Route path="/donate" element={<Donate />} />

        <Route path="/volunteer" element={<Volunteer />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;