import { assets } from "../../assets/assets";
import "./footer.scss";

export const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer_content">
        <div className="footer_content_left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            quo quidem modi neque similique, quas, ratione totam, recusandae
            pariatur explicabo atque voluptatum fugit nam nesciunt ea tempore
            aliquam mollitia necessitatibus.
          </p>
          <div className="footer_social_icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer_content_center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer_content_right">
          <h2>GET IN TOUCH</h2>
          <li>+98 9376770472</li>
          <li>akbarisadegh382@gmail.com</li>
        </div>
      </div>
      <hr />
      <p className="footer_copyright">
        Copyright 2024 c Poozli.com. All Right Reserved.
      </p>
    </div>
  );
};
