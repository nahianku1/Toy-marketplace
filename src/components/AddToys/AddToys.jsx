/* eslint-disable no-unused-vars */
import { useContext, useRef, useState } from "react";
import { IoClipboardSharp, IoPersonSharp } from "react-icons/io5";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../AuthProvider";

function AddToys() {
  let { user } = useContext(AuthContext);

  let handleSubmit = async (e) => {
    e.preventDefault();
    let product_name = e.target.name.value;
    let product_photo = e.target.photo.value;
    let sellname = e.target.sellername.value;
    let selleremail = e.target.selleremail.value;
    let sub_category = e.target.category.value;
    let price = e.target.price.value;
    let rating = e.target.rating.value;
    let available = e.target.available.value;
    let description = e.target.description.value;
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
    let res = await fetch("http://localhost:5000/add-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        product_name,
        product_photo,
        sellname,
        selleremail,
        sub_category,
        price,
        rating,
        available,
        description,
      }),
    });
    let data = await res.json();
    console.log(data);
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
                  name="name"
                  className="focus:shadow-lg outline-none border border-solid 
                  border-green-400 p-1 rounded-md indent-2"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Product photo:
                </label>
                <input
                  type="text"
                  name="photo"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Photo URL"
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Seller Name:
                </label>
                <input
                  type="text"
                  defaultValue={user.displayName}
                  name="sellername"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Seller Name"
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Seller Email:
                </label>
                <input
                  type="text"
                  defaultValue={user.email}
                  name="selleremail"
                  readOnly
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Seller Email"
                />
              </div>

              <div className="">
                <label htmlFor="" className="block">
                  Select Sub-category:
                </label>
                <select
                  type="text"
                  defaultValue={"mathematics_toys"}
                  name="category"
                  className="w-[210px] block focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Seller Email"
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
                  name="price"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Price"
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Rating:
                </label>
                <input
                  type="text"
                  name="rating"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Rating"
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Available Quantity:
                </label>
                <input
                  type="text"
                  name="available"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Available Quantity"
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Description:
                </label>
                <textarea
                  type="text"
                  name="description"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Toy Description"
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
