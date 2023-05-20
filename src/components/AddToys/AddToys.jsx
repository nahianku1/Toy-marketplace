/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClipboardSharp, IoPersonSharp } from "react-icons/io5";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AddToys() {
  let [hidden, setHidden] = useState(true);
  let [error, setError] = useState("");
  let usernameRef = useRef("");
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let photoRef = useRef("");

  let handleSubmit = (e) => {
    e.preventDefault();
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
                  Name:
                </label>
                <input
                  type="text"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Name"
                  onChange={(e) => {
                    usernameRef.current = e.target.value;
                  }}
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Photo URL:
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
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Seller Name"
                  onChange={(e) => {
                    usernameRef.current = e.target.value;
                  }}
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Seller Email:
                </label>
                <input
                  type="text"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Seller Email"
                  onChange={(e) => {
                    usernameRef.current = e.target.value;
                  }}
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Seller Email:
                </label>
                <select
                  type="text"
                  defaultValue="Select"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Seller Email"
                  onChange={(e) => {
                    usernameRef.current = e.target.value;
                  }}
                >
                  <option value="math">Mathematical Toy</option>
                  <option value="">Scientific Toy</option>
                  <option value="">Language Toy</option>
                  <option value="">Engineering Toy</option>
                </select>
              </div>

              {error && !error === "Weak Password" ? (
                <p className="text-red-600 font-bold">{error}</p>
              ) : error === "Weak Password" ? (
                <p className="text-red-600 font-bold">
                  Password should be at least 6 characters.
                </p>
              ) : (
                <p className="text-red-600 font-bold">{error}</p>
              )}

              <div>
                <button
                  type="submit"
                  className="bg-black px-4 py-2 rounded-lg text-white font-bold"
                >
                  Save
                </button>
              </div>
              <p className="text-[15px]">
                Already have an account?{" "}
                <Link to="/signin" className="underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AddToys;
