import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function PopUp({ orderPopUp, setOrderPopUp }) {
  return (
    <>
      {orderPopUp && (
        <div className="h-screen w-screen flex justify-center items-center fixed top-0 left-0 bg-black/85">
          <div className="w-[300px] bg-white p-4 rounded-lg">
            <div className="flex justify-between">
              <h3>Order Your Watch</h3>
              <IoCloseOutline
                className="text-2xl cursor-pointer "
                onClick={() => {
                  setOrderPopUp(!orderPopUp);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="h-[40px] px-2 w-full border-2 border-solid border-gray-500 rounded-2xl my-2"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="h-[40px] px-2 w-full border-2 border-solid border-gray-500 rounded-2xl my-2"
              />
            </div>

            <div>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className="h-[40px] px-2 w-full border-2 border-solid border-gray-500 rounded-2xl my-2"
              />
            </div>

            <div className="button flex justify-center">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-2xl ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
