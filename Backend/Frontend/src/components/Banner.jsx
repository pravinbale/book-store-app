import React from "react";
import banner from "../../public/hero-img.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Banner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const queryMessage = {
      message: data.message,
    };

    try {
      const res = await axios.post("http://localhost:4001/query", queryMessage);
      toast.success(res.data.message);
      reset(); // Reset the form fields after successful submission
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-screen-2xl mb-3 container mx-auto md:px-20 px-4 flex flex-col my-16 md:flex-row">
          <div className="md:w-1/2 order-2 md:order-1 w-full mt-8 md:mt-20">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold">
                Hello, Welcome here to learn something{" "}
                <span className="text-pink-500">new everyday!!!</span>
              </h1>
              <p className="text-xl text-green-500">
                "Education opens doors to endless possibilities, empowering you
                to shape your own destiny through continuous growth...!"
              </p>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Write Your Query"
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && (
                  <span className="text-sm w-full text-red-500">
                    This field is required
                  </span>
                )}
              </label>
            </div>
            <button className="btn btn-secondary mt-6">Post Query</button>
          </div>
          <div className="md:w-1/2 order-1 w-full">
            <img src={banner} className="object-cover px-5 py-3" alt="banner" />
          </div>
        </div>
      </form>
    </>
  );
}

export default Banner;
