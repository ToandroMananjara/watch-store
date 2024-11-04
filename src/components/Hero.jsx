import React, { useState } from "react";
import watch1 from "/src/assets/watch/blue-watch.png";
import watch2 from "/src/assets/watch/yellow-watch.png";
import watch3 from "/src//assets/watch/orange-watch.png";

const ImageList = [
  {
    id: 1,
    img: watch1,
    price: "12.99",
    tag: "New",
    title: "Next Gen Blue Watch",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: watch2,
    price: "13.99",
    tag: "Sale",
    title: "Best & Smart Yellow Watch",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: watch3,
    price: "14.99",
    tag: "Hot",
    title: "Apple Ultra Smart Watch 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Hero({ orderPopUp, setOrderPopUp }) {
  const [imageId, setImageId] = useState(watch1);
  const [title, setTitle] = useState("Best & Smart Digital Products");
  const [description, setDescription] = useState(
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  return (
    <div className="min-h-[550px] sm:min-h-[700px] flex items-center bg-gray-100 px-0 mx-auto sm:px-10 md:px-14 lg:px-32 py-5 ">
      <div className="container flex flex-col-reverse sm:flex-row items-center ">
        <div className="hero-left md:px-0 px-5 sm:w-1/2">
          <div className="title">
            <h1 className="text-4xl lg:text-7xl lg:text-pretty py-4">
              <strong>{title}</strong>
            </h1>
          </div>

          <div className="description">
            <p className="text-sm">{description}</p>
          </div>

          <div className="button">
            <button
              className="bg-orange-500 text-white my-8 px-6 py-2 rounded-lg "
              onClick={() => {
                setOrderPopUp(!orderPopUp);
              }}
            >
              Order Now
            </button>
          </div>

          <div className="all-product bg-white rounded-2xl py-1 px-4">
            <div className="container flex justify-center gap-12">
              {ImageList.map((product) => (
                <div
                  className="product flex flex-col items-center lg:flex-row "
                  key={product.id}
                >
                  <div
                    className="product-img cursor-pointer"
                    onClick={() => {
                      setImageId(product.img);
                      setTitle(product.title);
                      setDescription(product.description);
                    }}
                  >
                    <img
                      src={product.img}
                      alt=""
                      className="w-[100px] h-[100px] object-contain"
                    />
                  </div>
                  <div className="detail ">
                    <div className="product-price">
                      <span>
                        $<strong>{product.price}</strong>
                      </span>
                    </div>
                    <div className="product-tag flex justify-center text-sm">
                      <span>{product.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-right h-full flex justify-center items-start sm:w-1/2">
          <div className="product-img">
            <img src={imageId} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
