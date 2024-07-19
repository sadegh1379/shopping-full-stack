import react, { useState } from "react";
import "./navbar.scss";
import { assets } from "../../assets/assets";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar_menu">
        <li
          onClick={() => setActiveMenu("home")}
          className={`${activeMenu === "home" && "active"}`}
        >
          خانه
        </li>
        <li
          onClick={() => setActiveMenu("menu")}
          className={`${activeMenu === "menu" && "active"}`}
        >
          منو
        </li>
        <li
          onClick={() => setActiveMenu("mobile")}
          className={`${activeMenu === "mobile" && "active"}`}
        >
          موبایل اپ
        </li>
        <li
          onClick={() => setActiveMenu("us")}
          className={`${activeMenu === "us" && "active"}`}
        >
          درباره ما
        </li>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar_search_icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};
