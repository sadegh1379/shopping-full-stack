import { useContext } from "react";
import "./order-place.scss";
import { StoreContext } from "../../context/store-context";

export const OrderPlace = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="place_order">
      <div className="place_order_left">
        <p>جزییات خرید شما</p>
        <div className="multi_fields">
          <input type="text" placeholder="نام" />
          <input type="text" placeholder="نام خانوادگی" />
        </div>
        <input type="text" placeholder="ایمیل" />
        <textarea rows={5} type="text" placeholder="ادرس  کامل" />
        <div className="multi_fields">
          <input type="text" placeholder="نام" />
          <input type="text" placeholder="نام خانوادگی" />
        </div>
        <div className="multi_fields">
          <input type="text" placeholder="کد پستی" />
          <input type="text" placeholder="شماره همراه" />
        </div>
      </div>
      <div className="place_order_right">
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
          <button>پرداخت</button>
        </div>
      </div>
    </div>
  );
};
