import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./dress-item.scss";
import { StoreContext } from "../../context/store-context";

export const DressItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="dress_item">
      <div className="dress_item_image_container">
        <img src={image} className="dress_item_image" alt="" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
            alt=""
            className="add"
          />
        ) : (
          <div className="dress_item_counter">
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
          </div>
        )}
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
