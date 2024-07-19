import { menu_list } from "../../assets/assets";
import "./explore-menu.scss";

export const ExploreMenu = ({ setCategory, category }) => {
  console.log(category);
  return (
    <div className="explore_menu" id="explore_menu">
      <h1>اکسپلور</h1>
      <p className="explore_menu_text">لباس خود را انتخاب کنید</p>
      <div className="explore_menu_list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((pre) =>
                pre === item.menu_name ? "All" : item.menu_name
              )
            }
            className="explore_menu_list_item"
          >
            <img
              className={`${category === item.menu_name && "active"}`}
              src={item.menu_image}
              alt=""
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};
