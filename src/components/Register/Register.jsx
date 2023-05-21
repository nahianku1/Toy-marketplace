/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthContext } from "../../AuthProvider";
import { IoPersonSharp } from "react-icons/io5";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Register() {
  let [hidden, setHidden] = useState(true);
  let [error, setError] = useState("");
  let usernameRef = useRef("");
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let photoRef = useRef("");
  let navigate = useNavigate();
  let { auth } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Edufun | Register";
  }, []);

  let modifyError = (error) => {
    let modifiedMessage = error.message
      .split("/")[1]
      .split(")")[0]
      .split("-")
      .map((v) => v[0].toUpperCase() + v.slice(1))
      .join(" ");
    setError(modifiedMessage);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailRef.current, passwordRef.current)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: usernameRef.current,
          photoURL: photoRef.current,
        })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            modifyError(error);
          });
      })
      .catch((error) => {
        console.log(error);
        modifyError(error);
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
              <div className=" mb-5 text-[100px] font-bold text-black">
                <IoPersonSharp />
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
                  Email:
                </label>
                <input
                  type="text"
                  className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                  placeholder="Email"
                  onChange={(e) => {
                    emailRef.current = e.target.value;
                  }}
                  required
                />
              </div>

              <div>
                <label htmlFor="" className="block">
                  Password:
                </label>
                <div className="relative">
                  <input
                    type={hidden ? `password` : `text`}
                    className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                    placeholder="Password"
                    onChange={(e) => {
                      passwordRef.current = e.target.value;
                    }}
                    required
                  />
                  {hidden ? (
                    <FaEye
                      onClick={() => setHidden(false)}
                      className="absolute top-2.5 right-2 cursor-pointer"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setHidden(true)}
                      className="absolute top-2.5 right-2 cursor-pointer"
                    />
                  )}
                </div>
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
                  Sing Up
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

export default Register;
