import { useState } from "react";
import { ExploreMenu, Header } from "../../components";
import "./home.scss";

export const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};
