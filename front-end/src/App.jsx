import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Cart, OrderPlace } from "./pages";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="*" element={<>not found</>} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderPlace />} />
      </Routes>
    </div>
  );
};
export default App;
