import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      const responce = await axios.get("/book");
      setBook(responce.data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl pt-12 container mx-auto  md:px-20 px-4">
        <div className="mt-10  items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            "Books are a treasure trove of knowledge. It is essential to
            inculcate reading habits from an early age to develop vocabulary and
            imaginative skills!""
            <br />
            <span className="text-orange-500">
              !..Here are some of our most sellig products..!
            </span>
          </p>
          <Link to="/">
            <button className="bg-pink-500 hover:bg-pink-700 duration-300 mt-6 text-white px-4 py-2 rounded-full">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
