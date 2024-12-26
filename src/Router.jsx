import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Error404 from './pages/Error404/Error404.jsx'
function Router() {
  return (
    <BrowserRouter>
      <div className='spacer'>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
