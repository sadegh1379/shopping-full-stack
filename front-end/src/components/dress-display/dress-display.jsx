import { useContext } from "react";
import { StoreContext } from "../../context/store-context";
import { DressItem } from "../dress-item/dress-item";
import "./dress-display.scss";

export const DressDisplay = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="dress_display">
      <h2>بهترین لباس پیشنهادی برای شما</h2>
      <div className="dress_display_list">
        {food_list.map((item, index) => (
          <DressItem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
