import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Shop from "./Pages/shop/Shop.jsx";
import Cart from "./Pages/cart/Cart.jsx";
import { ContextProvider } from "./Context/ContextProvider.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";

function App() {
  return (
    <ContextProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
