import { useContext, useState } from "react";
import { DressDisplay, ExploreMenu, Header } from "../../components";
import "./home.scss";
import { StoreContext } from "../../context/store-context";

export const Home = () => {
  const [category, setCategory] = useState("All");
  const { food_list } = useContext(StoreContext);

  console.log(food_list);
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <DressDisplay category={category} />
    </div>
  );
};
