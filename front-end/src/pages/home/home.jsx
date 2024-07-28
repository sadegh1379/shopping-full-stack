import { useContext, useState } from "react";
import { DressDisplay, ExploreMenu, Header } from "../../components";
import "./home.scss";
import { StoreContext } from "../../context/store-context";

export const Home = () => {
  const [category, setCategory] = useState("All");
  const { dress_list } = useContext(StoreContext);

  console.log(dress_list);
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <DressDisplay category={category} />
    </div>
  );
};
