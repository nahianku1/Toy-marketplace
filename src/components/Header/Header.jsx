import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FaBars } from "react-icons/fa";
import { IoPersonCircleSharp, IoMoon, IoSunnySharp } from "react-icons/io5";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  console.log(`Rendered`);
  let navigate = useNavigate();
  let [open, setOpen] = useState(false);
  let [theme, setTheme] = useState("light");
  let [scrolled, setScrolled] = useState(false);

  let handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  let { auth, user } = useContext(AuthContext);
  let handleLogout = () => {
    signOut(auth);
    navigate("/signin");
  };
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <div>
      {open && <Sidebar setOpen={setOpen} open={open} />}
      <div>
        <title>{auth?.currentUser?.displayName}</title>
      </div>
      <nav
        className={
          scrolled
            ? "border-b z-10 fixed top-0  [background-color:rgba(255,255,255,0.3)] w-[100%] shadow-lg backdrop-blur-[4px] border-solid border-gray-300 p-3 font-bold items-center flex justify-evenly"
            : "bg-transparent  fixed w-[100%] top-0 p-3 font-bold items-center flex justify-evenly"
        }
      >
        <div>
          <div>
            <img
              src="/images/logo.png"
              alt=""
              className="object-cover object-center"
            />
          </div>
          <h1 className="font-pacifico cursor-pointer">
            <Link to="/">Fantasy Recipes</Link>
          </h1>
        </div>
        <div className="flex gap-3 ">
          <div className="hidden gap-3  md:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="inline-block text-black md:hidden"
          >
            <FaBars className="dark:text-white" />
          </button>
        </div>
        <div className="flex items-center  gap-4">
          {theme === "light" ? (
            <IoMoon
              className="cursor-pointer text-2xl font-bold"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <IoSunnySharp
              className="cursor-pointer text-2xl font-bold"
              onClick={() => setTheme("light")}
            />
          )}
          {user && user?.photoURL ? (
            <>
              <Link to="/userprofile">
                <img
                  data-tooltip-id="registerTip"
                  data-tooltip-content={auth?.currentUser?.displayName}
                  src={auth?.currentUser?.photoURL}
                  className=" cursor-pointer w-[40px] h-[40px] object-cover object-center rounded-full"
                />
              </Link>

              <Tooltip id="registerTip" place="top" effect="solid" />
            </>
          ) : user && !user?.photoURL ? (
            <Link to="/userprofile">
              <IoPersonCircleSharp className="text-3xl cursor-pointer" />
            </Link>
          ) : (
            ""
          )}

          {user ? (
            <button
              className="font-bold px-[18px] py-[10px] rounded-3xl bg-orange-400"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          ) : (
            <button className="font-bold">
              <Link to="/signin">Sign In</Link>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
