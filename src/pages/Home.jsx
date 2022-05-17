import React, { useCallback } from "react";
import { Categories, SortPopUp, PizzaBlock } from "../components";
import { useDispatch, useSelector } from "react-redux";

import { setCategory } from "../store/actions/filters";

const categories = ["Мясные", "Веган", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categories} />
        <SortPopUp items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((elem) => <PizzaBlock key={elem.id} {...elem} />)}
      </div>
    </div>
  );
}

export default Home;
