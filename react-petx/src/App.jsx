import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Pets from "./components/PetSection/Pets";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import EnquiryPage from "./components/Enquiry/EnquiryPage";
import PetDetails from "./components/PetDetails/PetDetails";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:id" element={<PetDetails />} />
          <Route path="/enquiry/:id" element={<EnquiryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
