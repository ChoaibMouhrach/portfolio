import { useState } from "react";
import React from "react";
import LOGO from "../assets/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";

const Nav = () => {
  const [drop_shown, set_drop_shown] = useState(false);

  function Handle_drop_show() {
    set_drop_shown(!drop_shown);
  }

  return (
    <nav className="h-[80px]">
      <section className="container mx-auto flex items-center justify-between py-4">
        <div className="brand">
          <a href="">
            <img src={LOGO} className="max-h-10" alt="" />
          </a>
        </div>
        <div className="relative">
          <button
            onClick={() => Handle_drop_show()}
            className="lg:hidden block bg-brand-color p-1 text-black rounded"
          >
            <HiMenuAlt3 className="text-2xl" />
          </button>
          <div
            className={`absolute lg:static right-0 bg-light-black text-white  my-4 p-2 rounded lg:p-0 lg:m-0 lg:bg-transparent ${
              !drop_shown && "hidden lg:flex"
            }`}
          >
            <div className="links">
              <ul className="lg:flex items-center">
                <li>
                  <a
                    className="lg:mx-3 p-2 lg:p-0 whitespace-nowrap hover:bg-white rounded hover:text-light-black block lg:hover:text-white lg:hover:bg-transparent"
                    href="#Work"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    className="lg:mx-3 p-2 lg:p-0 whitespace-nowrap hover:bg-white rounded hover:text-light-black block lg:hover:text-white lg:hover:bg-transparent"
                    href="#Experience"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="lg:mx-3 p-2 lg:p-0 whitespace-nowrap hover:bg-white rounded hover:text-light-black block lg:hover:text-white lg:hover:bg-transparent"
                    href="#Clients"
                  >
                    Clients review
                  </a>
                </li>
                <li>
                  <a
                    className="lg:mx-3 p-2 lg:p-0 whitespace-nowrap hover:bg-white rounded hover:text-light-black block lg:hover:text-white lg:hover:bg-transparent"
                    href="#About"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="lg:mx-3 p-2 lg:p-0 whitespace-nowrap hover:bg-white rounded hover:text-light-black block lg:hover:text-white lg:hover:bg-transparent"
                    href="#Hobbies"
                  >
                    Hobbies
                  </a>
                </li>
                <li>
                  <a
                    className="lg:mx-3 p-2 lg:p-0 whitespace-nowrap hover:bg-white rounded hover:text-light-black block lg:hover:text-white lg:hover:bg-transparent"
                    href="#contact"
                  >
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
