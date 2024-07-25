import { useContext } from "react";
import { StoreContext } from "../../context/store-context";
import { food_list } from "../../assets/assets";
import "./cart.scss";

export const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart_items">
        <div className="cart_items_title">
          <p>ایتم</p>
          <p>نام</p>
          <p>قیمت</p>
          <p>تعداد</p>
          <p>جمع کل</p>
          <p>حذف</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart_items_title cart_items_item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="pointer"
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
