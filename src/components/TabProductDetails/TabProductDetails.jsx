/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Vortex } from "react-loader-spinner";
import useSWR from "swr";
import { useLocation, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

function TabProductDetails() {
  let params = useParams();
  let [loading, setLoading] = useState(true);
  let [singledetails, setSingleDetails] = useState([]);
  console.log(params.id);

  useEffect(() => {
    fetch(`https://toy-marketplace-server-kappa.vercel.app/tab-details`)
      .then((res) => res.json())
      .then((data) => {
        let entry = data.map((item) => Object.values(item)[1].find(val=>val._id==params.id));
        let arr=entry.find(item=> item)
        console.log(arr);
        setSingleDetails(arr);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    document.title = "Edufun | Tab Product Details";
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-45px)]">
        <Vortex
          visible={true}
          height="200"
          width="200"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen mb-[60px]">
        <div className="-z-10 fixed bg-sky-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
        <div className="-z-10 fixed  right-10 bg-lime-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
        <div className="-z-10 fixed bottom-0 left-11 bg-pink-300 [filter:blur(120px)] w-[400px] h-[200px]"></div>
        <div className="-z-10 fixed bottom-0 right-11 bg-yellow-200 [filter:blur(120px)] w-[400px] h-[200px]"></div>
        <div className="flex flex-col md:flex-row p-[20px] mt-[90px] mx-[20px] md:mx-[120px] bg-[rgba(255,255,255,0.3)] rounded-lg shadow-2xl">
          <div className="md:w-1/2">
            <img
              src={singledetails.image}
              alt=""
              className="w-full h-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">
              {singledetails.name}
            </h1>
            <p className="text-gray-600 mb-2">
              Sold by: {singledetails.seller_name} ({singledetails.seller_email})
            </p>
            <p className="text-2xl font-bold mb-4">
              Price: {singledetails.price}$
            </p>
            <div className="flex items-center mb-4">
              <Rating
                style={{ maxWidth: 80 }}
                value={singledetails.rating}
                readOnly
              />
              <span className="text-gray-600 ml-2">
                ({singledetails.available_quantity} PCs available)
              </span>
            </div>
            <p className="text-gray-600 mb-8">{singledetails.details}</p>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default TabProductDetails;
