import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./pages/About/About.jsx";
import Error404 from "./pages/Error404/Error404.jsx";
import Estate from "./pages/Estate/Estate.jsx";
import Home from "./pages/Home/Home.jsx";

function Router() {
  return (
    <BrowserRouter>
      <div className="spacer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/estate/:id" element={<Estate />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
