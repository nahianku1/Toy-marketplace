import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

function Sidebar({ setOpen, open }) {
  let { user } = useContext(AuthContext);

  return (
    <div
      className={
        open
          ? "flex  flex-col gap-3 [transform:rotateY(0deg)] origin-left transition duration-300 items-start p-[20px] justify-start fixed z-50 inset-0 min-h-screen w-[200px] bg-white shadow-lg shadow-slate-400"
          : "flex [transform:rotateY(90deg)] transition origin-left duration-300 flex-col gap-3 items-start p-[20px] justify-start fixed z-50 inset-0 min-h-screen w-[200px] bg-white shadow-lg shadow-slate-400"
      }
    >
      <div className="flex gap-[22px] items-center">
        <div className="flex gap-2 items-center">
          <img
            src="/images/ball.png"
            alt=""
            className="object-cover object-center"
          />
          <p className="font-pacifico text-[12px]">Edufun Toys</p>
        </div>
        <div>
          <button
            onClick={() => setOpen(false)}
            className="  bg-gray-200  border-none p-[3px] font-bold text-lg cursor-pointer rounded-[50%] w-[30px] h-[30px] flex items-center justify-center"
          >
            X
          </button>
        </div>
      </div>

      <NavLink to="/" onClick={() => setOpen(false)}>
        Home
      </NavLink>
      {user?.email && (
        <NavLink to="/all-toys" onClick={() => setOpen(false)}>
          All Toys
        </NavLink>
      )}
      {user?.email && (
        <NavLink to="/my-toys" onClick={() => setOpen(false)}>
          My Toys
        </NavLink>
      )}
      {user?.email && (
        <NavLink to="/add-toy" onClick={() => setOpen(false)}>
          Add Toy
        </NavLink>
      )}

      <NavLink to="/about" onClick={() => setOpen(false)}>
        About
      </NavLink>
      <NavLink to="/about" onClick={() => setOpen(false)}>
        Contact
      </NavLink>
      <NavLink to="/blog" onClick={() => setOpen(false)}>
        Blog
      </NavLink>
    </div>
  );
}

export default Sidebar;
