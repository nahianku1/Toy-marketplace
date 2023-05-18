import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ setOpen, open }) {
  return (
    <div
      className={
        open
          ? "flex  flex-col gap-3 [transform:rotateY(0deg)] origin-left transition duration-300 items-start p-[20px] justify-start fixed z-50 inset-0 min-h-screen w-[200px] bg-white shadow-lg shadow-slate-400"
          : "flex [transform:rotateY(90deg)] transition origin-left duration-300 flex-col gap-3 items-start p-[20px] justify-start fixed z-50 inset-0 min-h-screen w-[200px] bg-white shadow-lg shadow-slate-400"
      }
    >
      <div className="flex gap-[27px] items-center">
        <p className="font-pacifico ">Fantasy Mart</p>
        <button
          onClick={() => setOpen(false)}
          className="  bg-gray-200  border-none p-[3px] font-bold text-lg cursor-pointer rounded-[50%] w-[30px] h-[30px] flex items-center justify-center"
        >
          X
        </button>
      </div>

      <Link to="/" className="link" onClick={() => setOpen(false)}>
        Home
      </Link>
      <Link className="link" to="/products" onClick={() => setOpen(false)}>
        Products
      </Link>

      <Link className="link" to="/about" onClick={() => setOpen(false)}>
        About
      </Link>
      <Link className="link" to="/contact" onClick={() => setOpen(false)}>
        Contact
      </Link>
    </div>
  );
}

export default Sidebar;
