import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AboutPage } from "./pages/AboutPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [count, setCount] = useState(0);

	return (
		  <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pb-7">
          <Routes>
            <Route path="/" element={<HomePage />} />
						<Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
	);
}

export default App;
