import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FaBars } from "react-icons/fa";
import { IoPersonCircleSharp, IoMoon, IoSunnySharp } from "react-icons/io5";
import Sidebar from "../Sidebar/Sidebar";

function Header({ navbar }) {
  console.log(`Rendered`);
  let navigate = useNavigate();
  let [open, setOpen] = useState(false);
  let [theme, setTheme] = useState("light");
  let [scrolled, setScrolled] = useState(false);
  let location = useLocation();
  console.log(location);
  let [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setMobile(true);
    }
  }, []);

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

  if (!navbar) {
    return (
      <div>
        {open && <Sidebar setOpen={setOpen} open={open} />}
        <div>
          <title>{auth?.currentUser?.displayName}</title>
        </div>
        <nav className="bg-transparent p-3 duration-500 font-bold items-center flex justify-evenly">
          {mobile && (
            <div className="flex gap-1 items-center justify-center">
              <img
                src="/images/ball.png"
                alt=""
                className="object-cover object-center"
              />
              <p className="font-pacifico">Edufun Toys</p>
            </div>
          )}

          <div className="flex gap-3 ">
            <div className="hidden gap-3  md:flex">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all-toys">All Toys</NavLink>
              <NavLink to="/my-toys">My Toys</NavLink>
              <NavLink to="/add-toy">Add Toy</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/about">Contact</NavLink>
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
            {user && user?.photoURL ? (
              <>
                <Link to="#">
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
              <>
                <Link to="#">
                  <IoPersonCircleSharp
                    data-tooltip-id="registerTip"
                    data-tooltip-content={auth?.currentUser?.displayName}
                    className="text-3xl cursor-pointer"
                  />
                </Link>
                <Tooltip id="registerTip" place="top" effect="solid" />
              </>
            ) : (
              ""
            )}

            {user ? (
              <button
                className="font-bold [box-shadow:inset_4px_4px_8px_white] px-[20px] py-[10px] rounded-3xl bg-orange-400"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            ) : (
              <button className="font-bold shadow-[inset_4px_4px_8px_white] px-[20px] py-[10px] rounded-3xl bg-orange-400">
                <Link to="/signin">Sign In</Link>
              </button>
            )}
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div>
      {open && <Sidebar setOpen={setOpen} open={open} />}
      <div>
        <title>{auth?.currentUser?.displayName}</title>
      </div>
      <nav
        className={
          scrolled
            ? "border-b z-10 fixed top-0 duration-500 [background-color:rgba(255,255,255,0.3)] w-[100%] shadow-lg backdrop-blur-[4px] border-solid border-gray-300 p-3 font-bold items-center flex justify-evenly"
            : "bg-transparent fixed top-0 w-[100%] p-3 duration-500 font-bold items-center flex justify-evenly"
        }
      >
        {mobile && (
          <div className="flex gap-1 items-center justify-center">
            <img
              src="/images/ball.png"
              alt=""
              className="object-cover object-center"
            />
            <p className="font-pacifico">Edufun Toys</p>
          </div>
        )}

        <div className="flex gap-3 ">
          <div className="hidden gap-3  md:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all-toys">All Toys</NavLink>
            <NavLink to="/my-toys">My Toys</NavLink>
            <NavLink to="/add-toy">Add Toy</NavLink>

            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
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
          {user && user?.photoURL ? (
            <>
              <Link to="#">
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
            <>
              <Link to="#">
                <IoPersonCircleSharp
                  data-tooltip-id="registerTip"
                  data-tooltip-content={auth?.currentUser?.displayName}
                  className="text-3xl cursor-pointer"
                />
              </Link>
              <Tooltip id="registerTip" place="top" effect="solid" />
            </>
          ) : (
            ""
          )}

          {user ? (
            <button
              className="font-bold [box-shadow:inset_4px_4px_8px_white] px-[20px] py-[10px] rounded-3xl bg-orange-400"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          ) : (
            <button className="font-bold shadow-[inset_4px_4px_8px_white] px-[20px] py-[10px] rounded-3xl bg-orange-400">
              <Link to="/signin">Sign In</Link>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
