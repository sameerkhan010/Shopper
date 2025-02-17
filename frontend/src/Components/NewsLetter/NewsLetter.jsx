import React from "react";
import "./NewsLetter.css";
import Item from "../Item/Item";
import all_product1 from "../Assets/all_product1";

const NewsLetter = () => {
  return (
    <>
     <div className="newslatter">
      <h1> NEW-PRODUCT'S [Less:-50%] </h1>
      <hr />
      <div className="newslatter-item">
        {all_product1.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
    </>
  );
};

export default NewsLetter;
