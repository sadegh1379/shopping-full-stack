import { useState } from "react";
import "./login-modal.scss";
import { IoClose } from "react-icons/io5";

export const LoginModal = ({ setShowLoginModal }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login_modal">
      <form className="login_modal_container">
        <div className="login_modal_title">
          <h2>{currentState === "Sign Up" ? "ثبت نام" : "ورود"}</h2>
          <IoClose
            className="pointer"
            onClick={() => setShowLoginModal(false)}
            size={20}
          />
        </div>
        <div className="login_modal_inputs">
          {currentState === "Sign Up" && (
            <input type="text" placeholder="نام" required />
          )}
          <input type="phone" placeholder="شماره همراه" required />
          <input type="password" placeholder="رمز ورود" required />
        </div>
        <button>{currentState === "Sign Up" ? "ثبت نام" : "ورود"}</button>
        <div className="login_modal_condition">
          <input type="checkbox" required />
          <p>تمام قوانین را خوانده ام</p>
        </div>
        {currentState === "Login" ? (
          <p>
            ساخت اکانت جدید؟{" "}
            <span onClick={() => setCurrentState("Sign Up")}>کلیک کنید</span>
          </p>
        ) : (
          <p>
            اکانت ساخته ام؟{" "}
            <span onClick={() => setCurrentState("Login")}>ورود</span>
          </p>
        )}
      </form>
    </div>
  );
};
