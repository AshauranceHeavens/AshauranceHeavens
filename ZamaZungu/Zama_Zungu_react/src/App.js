import Header from "./components/Header";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Routes>
        <Route path="/ZamaZungu/" element={<Home />} />
        <Route path="/ZamaZungu/About" element={<AboutPage />} />
        <Route path="/ZamaZungu/Products" element={<ProductsPage />} />
        <Route path="/ZamaZungu/Contacts" element={<ContactsPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
