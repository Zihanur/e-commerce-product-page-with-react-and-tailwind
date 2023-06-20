/* tslint:disable:no-unused-variable */

import { useState } from "react";
import "./App.css";
import { FaCartPlus } from "react-icons/fa";
import { data } from "../public/data";
import Swal from "sweetalert2";

function App() {
  const [products] = useState(data);
  const [indexValue, setIndexValue] = useState(0);
  const { image } = products[indexValue];
  const [showCard, setShowCard] = useState(0);
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleAddToCard = () => {
    if(count>0){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Added To Card',
        showConfirmButton: false,
        timer: 800
      })
      setShowCard(count);
    }
    else{
      Swal.fire({
        icon: 'error',
        text: 'Added Positive Value',
      })
    }
  };
  return (
    <div className="">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 bg-slate-50">
        <h1 className="uppercase text-4xl font-bold">Sneakers</h1>
        <ul className="flex gap-4">
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <div className="indicator">
            <span className="indicator-item badge bg-orange-500 text-white">
              {showCard}
            </span>
            <button className="btn">
              <FaCartPlus className="text-orange-500 text-lg"></FaCartPlus>
            </button>
          </div>
          <div className="avatar">
            <div className="w-12 border-2 hover:border-orange-400 rounded-full transition duration-500 ease-in-out">
              <img src="https://i.ibb.co/GTZBHDK/image-avatar.png" />
            </div>
          </div>
        </div>
      </nav>
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 px-12">
        <div className="w-full space-y-4">
          <img className="rounded-3xl w-9/12" src={image} alt="" />
          <ul className="flex gap-3 items-center justify-start">
            {products.map((item, index) => (
              <li key={item.id} onClick={() => setIndexValue(index)}>
                <img
                  className="w-20 rounded-xl bottom-2 hover:opacity-40 hover:border-orange-400 transition duration-200 ease-in-out"
                  src={item.subimage}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full p-16">
          <p className="text-orange-400 font-bold mb-5">Sneaker Company</p>
          <h1 className="text-black text-4xl font-extrabold mb-6">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-slate-400 mb-6">
            These two low-profile sneakers are your perfect casual wear
            companion. Featuring a durable rubber outer sole, they will
            withstand everything the weather can offer
          </p>
          <div className="flex items-center justify-start gap-4 mb-2">
            <h1 className="text-xl font-semibold">$125.00</h1>
            <h1 className="text-orange-500 p-1 text-sm rounded-lg bg-orange-100 font-bold">
              50%
            </h1>
          </div>
          <h1 className="text-slate-400 text-lg font-semibold line-through mb-2">
            $250
          </h1>
          <div className="flex justify-start items-center gap-6">
            <div className=" flex gap-4 items-center justify-evenly bg-gray-100 rounded-lg px-4 py-1">
              <p
                className="flex items-center justify-center text-3xl font-semibold text-orange-600 cursor-pointer"
                onClick={decreaseCount}
              >
                -
              </p>
              <p className="mx-4 text-slate-500 font-semibold">{count}</p>
              <p
                className="flex items-center justify-center text-orange-600 text-3xl font-semibold cursor-pointer"
                onClick={increaseCount}
              >
                +
              </p>
            </div>
            <div>
              <button
                onClick={handleAddToCard}
                className=" bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded-lg flex items-center gap-3"
              >
                <FaCartPlus></FaCartPlus>
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
