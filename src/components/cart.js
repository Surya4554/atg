import React, { useState } from "react";
import "./cart.css";

const Cart = ({ filterItem, categoryName, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pop, setPop] = useState(false);

  return (
    <>
      <div
        className="main-btn"
        onClick={() => {
          filterItem(categoryName);
          setIsOpen(!isOpen);
        }}
      >
        <div className="btn-text">{categoryName} </div>{" "}
        <div className="btn-symbol">
          {" "}
          {isOpen ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}{" "}
        </div>
      </div>
      <section className="main-cart">
        {isOpen &&
          data.map((curElem) => {
            const { id, category, image, name, title, price } = curElem;
            return (
              <div key={id} onClick={() => setPop(true)}>
                {" "}
                
                {categoryName === category ? (
                  <div className="one-section">
                    <h2 className="budget">BUDGET </h2>
                    <div className="img-section">
                      <img src={image} alt="images" />
                    </div>
                    <div className="text-section">
                      <h3>{name}</h3>
                      <h2 className="h-2">{title}</h2>
                      <h2 className="price">
                        ₹ <span>{price}</span>{" "}
                        <button className="cart-btn">Shop</button>
                      </h2>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Cart;
