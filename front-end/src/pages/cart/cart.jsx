import { useContext } from "react";
import { StoreContext } from "../../context/store-context";
import { dress_list } from "../../assets/assets";
import "./cart.scss";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

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
        {dress_list.map((item, index) => {
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
      <div className="cart_bottom">
        <div className="cart_total">
          <h2>جمع سبد خرید</h2>
          <div>
            <div className="cart_total_details">
              <p>جمع فرعی</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>کارمزد</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <b>جمع</b>
              <b>{getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>ادامه خرید</button>
        </div>
        <div className="cart_promocode">
          <div>
            <p>اگر کد تخفیف دارید؟وارد کنید</p>
            <div className="promocode_input">
              <input type="text" placeholder="کد تخفیف" />
              <button>اعمال</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
