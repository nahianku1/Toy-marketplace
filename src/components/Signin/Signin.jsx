/* eslint-disable no-unused-vars */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { FaLock, FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import Header from "../Header/Header";
let GithubProvider = new GithubAuthProvider();
let GoogleProvider = new GoogleAuthProvider();
function Signin() {
  let [hidden, setHidden] = useState(true);
  let [error, setError] = useState("");

  let { auth } = useContext(AuthContext);
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let navigate = useNavigate();

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

    signInWithEmailAndPassword(auth, emailRef.current, passwordRef.current)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        modifyError(error);
      });
  };

  let handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        modifyError(error)
      });
  };
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-white">
        <div className="bg-[#00cec9] w-[320px] md:w-[400px] py-[30px] rounded-md ">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex items-center justify-center flex-col gap-4"
          >
            <div className=" mb-5 text-6xl text-black">
              <FaLock />
            </div>
            <div>
              <label htmlFor="" className="block">
                Email:
              </label>
              <input
                type="text"
                autoComplete="true"
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
                  autoComplete="true"
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
            {error && <p className="text-red-600 font-bold">{error}</p>}

            <div>
              <button
                type="submit"
                className="bg-black px-4 py-2 rounded-lg text-white font-bold"
              >
                Sing In
              </button>
              {/* <p>Don't have an account? <Link to='/register'>Register</Link></p> */}
            </div>
            <p className="text-[15px]">
              Don't have an account?{" "}
              <Link to="/register" className="underline">
                Register
              </Link>
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-[90px] bg-black"></div>
              <div className="relative -top-[1px]">OR</div>
              <div className="h-[2px] w-[90px] bg-black"></div>
            </div>
          </form>
          <div className="flex flex-col gap-4 px-[70px] mt-[20px]">
            <button
              onClick={handleGoogleSignIn}
              className="bg-red-500 rounded-md text-white flex items-center justify-center gap-2 py-2 px-2 md:px-4"
            >
              <FaGoogle className="text-white text-2xl" />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
