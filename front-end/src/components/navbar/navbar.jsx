import react, { useState } from "react";
import "./navbar.scss";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

export const Navbar = ({ setShowLoginModal }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar_menu">
        <Link
          to="/"
          onClick={() => setActiveMenu("home")}
          className={`${activeMenu === "home" && "active"}`}
        >
          خانه
        </Link>
        <a
          href="#explore_menu"
          onClick={() => setActiveMenu("menu")}
          className={`${activeMenu === "menu" && "active"}`}
        >
          منو
        </a>

        <a
          href="#footer"
          onClick={() => setActiveMenu("us")}
          className={`${activeMenu === "us" && "active"}`}
        >
          درباره ما
        </a>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar_search_icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLoginModal(true)}>sign in</button>
      </div>
    </div>
  );
};
