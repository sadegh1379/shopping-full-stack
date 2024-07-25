import { Route, Routes } from "react-router-dom";
import { Footer, LoginModal, Navbar } from "./components";
import { Home, Cart, OrderPlace } from "./pages";
import { useState } from "react";

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
      <div className="app">
        <Navbar setShowLoginModal={setShowLoginModal} />
        <Routes>
          <Route path="*" element={<>not found</>} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderPlace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;
