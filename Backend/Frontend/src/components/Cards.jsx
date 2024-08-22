import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 dark:bg-slate-900 dark:text-white dark:border duration-200">
          <figure>
            <img
              src={item.image}
              className="object-cover h-64 w-96"
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline bg-orange-400 text-white">
                ${item.price}
              </div>
              <div className="cursor-pointer border-[2px] px-2 py-1 rounded-full hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
