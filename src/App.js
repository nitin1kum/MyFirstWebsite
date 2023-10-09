import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Services from "./Components/Services"
import Home from "./Components/Home"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Error from "./Components/Error"
import TopButton from "./Components/TopButton"
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <TopButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;