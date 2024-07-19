import { assets } from "../../assets/assets";
import "./dress-item.scss";

export const DressItem = ({ id, name, price, description, image }) => {
  return (
    <div className="dress_item">
      <div className="dress_item_image_container">
        <img src={image} className="dress_item_image" alt="" />
      </div>
      <div className="dress_item_info">
        <div className="dress_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="dress_item_des">{description}</p>
        <p className="dress_item_price">${price}</p>
      </div>
    </div>
  );
};
