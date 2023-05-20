/* eslint-disable no-unused-vars */
import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClipboardSharp, IoPersonSharp } from "react-icons/io5";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../AuthProvider";

function AddToys() {
  let { user } = useContext(AuthContext);
  let [hidden, setHidden] = useState(true);
  let [error, setError] = useState("");
  let nameRef = useRef("");
  let photoRef = useRef("");
  let sellernameRef = useRef("");
  let selleremailRef = useRef("");
  let subcategoryRef = useRef("");
  let priceRef = useRef("");
  let ratingRef = useRef("");
  let availableRef = useRef("");
  let descriptionRef = useRef("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let product_name = nameRef.current;
    let product_photo = photoRef.current;
    let sellname = sellernameRef.current;
    let selleremail = selleremailRef.current;
    let sub_category = subcategoryRef.current;
    let price = priceRef.current;
    let rating = ratingRef.current;
    let available = availableRef.current;
    let description = descriptionRef.current;
    console.log({
      product_name,
      product_photo,
      sellname,
      selleremail,
      sub_category,
      price,
      rating,
      available,
      description,
    });
  };
  return (
    <>
      <main className="min-h-screen mb-[60px]">
        <div className="-z-10 fixed bg-sky-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
        <div className="-z-10 fixed  right-10 bg-lime-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
        <div className="-z-10 fixed bottom-0 left-11 bg-pink-300 [filter:blur(120px)] w-[400px] h-[200px]"></div>
        <div className="-z-10 fixed bottom-0 right-11 bg-yellow-200 [filter:blur(120px)] w-[400px] h-[200px]"></div>
        <Header navbar={false} />
        <div className="flex items-center justify-center mt-[50px] ">
          <div className="bg-[rgba(255,255,255,0.2)] shadow-2xl  w-[320px] md:w-[400px] py-[30px] rounded-md ">
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex items-center justify-center flex-col gap-4"
            >
              <div className=" mb-5 text-[20px] flex items-center justify-center flex-col font-bold text-black">
                <IoClipboardSharp className="text-[30px]" />
                <p>Add a new toy entry</p>
              </div>
              <div>
                <label htmlFor="" className="block">
                  Product Name:
                </label>
                <input
                  type="text"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Name"
                  onChange={(e) => {
                    nameRef.current = e.target.value;
                  }}
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Product photo:
                </label>
                <input
                  type="text"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Photo URL"
                  onChange={(e) => {
                    photoRef.current = e.target.value;
                  }}
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Seller Name:
                </label>
                <input
                  type="text"
                  defaultValue={user.displayName}
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Seller Name"
                  onChange={(e) => {
                    sellernameRef.current = e.target.value;
                  }}
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Seller Email:
                </label>
                <input
                  type="text"
                  defaultValue={user.email}
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Seller Email"
                  onChange={(e) => {
                    selleremailRef.current = e.target.value;
                  }}
                />
              </div>

              <div className="">
                <label htmlFor="" className="block">
                  Select Sub-category:
                </label>
                <select
                  type="text"
                  className="w-[210px] block focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Seller Email"
                  onChange={(e) => {
                    subcategoryRef.current = e.target.value;
                  }}
                >
                  <option value="mathematics_toys">Mathematical Toy</option>
                  <option value="scientific_toys">Scientific Toy</option>
                  <option value="language_toys">Language Toy</option>
                  <option value="engineering_toys">Engineering Toy</option>
                </select>
              </div>

              <div>
                <label htmlFor="" className="block">
                  Price:
                </label>
                <input
                  type="text"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Price"
                  onChange={(e) => {
                    priceRef.current = e.target.value;
                  }}
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Rating:
                </label>
                <input
                  type="text"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Rating"
                  onChange={(e) => {
                    ratingRef.current = e.target.value;
                  }}
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Available Quantity:
                </label>
                <input
                  type="text"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Available Quantity"
                  onChange={(e) => {
                    availableRef.current = e.target.value;
                  }}
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Description:
                </label>
                <textarea
                  type="text"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Toy Description"
                  onChange={(e) => {
                    descriptionRef.current = e.target.value;
                  }}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-black px-4 py-2 rounded-lg text-white font-bold"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AddToys;
