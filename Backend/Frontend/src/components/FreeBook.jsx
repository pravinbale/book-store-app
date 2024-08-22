import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function FreeBook() {
  const [book, setBook] = useState([]);
  const getBook = async () => {
    try {
      const responce = await axios.get("http://localhost:4001/book");
      console.log(responce.data);
      const data = responce.data.filter((data) => data.category === "Free");
      console.log(data);
      setBook(data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  useEffect(() => {
    getBook();
  }, [setBook]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isEmpty = book.length === 0;

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae, quis! ipsum natus alias provident dolore!
          </p>
        </div>

        {!isEmpty && (
          <div>
            <Slider {...settings}>
              {book.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </>
  );
}

export default FreeBook;
