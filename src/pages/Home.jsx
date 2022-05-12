import React from "react";
import { Categories, SortPopUp, PizzaBlock } from "../components";

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(item) => alert(item)}
          items={["Meat", "Vegan", "Grill", "Spicy", "Closed"]}
        />
        <SortPopUp
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((elem) => <PizzaBlock key={elem.id} {...elem} />)}
      </div>
    </div>
  );
}

export default Home;
