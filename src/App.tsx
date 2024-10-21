import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/Notfound"; // Import the NotFound component
import ContactUs from "./pages/Contact-us";
import Career from "./pages/Career";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Job from "./components/career/Job";
import Software from "./pages/Services/Software-Development";
import Courses from "./pages/Courses";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact-us/" element={<ContactUs />} />
        <Route path="/career/" element={<Career />} />
        <Route path="/job/" element={<Job />} />
        <Route path="/services/software-development/" element={<Software />} />
        <Route path="/courses/" element={<Courses />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
