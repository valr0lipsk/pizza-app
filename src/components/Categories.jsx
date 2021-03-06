import React, { useState, memo } from "react";
import { nanoid } from "nanoid";

const Categories = memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            onSelectItem(null);
          }}
          className={activeItem === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={nanoid()}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
