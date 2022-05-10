import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function PizzaBlock({ name, imageUrl, price, types, sizes }) {
  const typeNames = ["thin", "traditional"];
  const sizeNames = [26, 30, 40];
  const [type, setType] = useState(types[0]);
  const [size, setSize] = useState(sizes[0]);

  const onSelectType = (type) => {
    setType(type);
  };

  const onSelectSize = (size) => {
    setSize(size);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typeNames &&
            typeNames.map((elem, index) => (
              <li
                onClick={() => onSelectType(index)}
                className={classNames({
                  active: type === index,
                  disabled: !types.includes(index),
                })}
                key={elem}
              >
                {elem}
              </li>
            ))}
        </ul>
        <ul>
          {sizeNames &&
            sizeNames.map((elem) => (
              <li
                onClick={() => onSelectSize(elem)}
                className={classNames({
                  active: size === elem,
                  disabled: !sizes.includes(elem),
                })}
                key={elem}
              >
                {elem} sm.
              </li>
            ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

PizzaBlock.defaultProps = {
  name: "no name",
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;
