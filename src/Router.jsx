import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Error404 from './pages/Error404/Error404.jsx';
import SingleProperty from './pages/SingleProperty/SingleProperty.jsx';
import BodyClassSwitcher from './BodyClassSwitcher.jsx';


function Router() {
  return (
    <BrowserRouter>
      <BodyClassSwitcher />
      <div className='spacer'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/SingleProperty/:id" element={<SingleProperty />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;