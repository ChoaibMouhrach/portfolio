import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    function handleScroll() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        if (navBar.current) navBar.current.style.transform = "translateY(0)";
      } else {
        if (navBar.current) navBar.current.style.transform = "translateY(-64px)";
      }
      prevScrollpos = currentScrollPos;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navBar} className="h-16 fixed top-0 w-full z-50 bg-black transition duration-300">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="" className="text-lg">
          Choaib Mouhrach
        </Link>
        <button onClick={() => setNavOpen(true)} className="text-2xl lg:hidden">
          <MdMenu />
        </button>
        <div
          className={`text-2xl lg:text-sm lg:gap-8 fixed z-50 lg:static top-0 left-0 bg-primary lg:bg-transparent text-black lg:text-white lg:h-fit lg:w-fit w-full h-screen flex flex-col lg:flex-row gap-4 items-center justify-center ${
            navOpen ? "" : "hidden lg:flex"
          }`}
        >
          <div className={`fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 lg:hidden ${navOpen ? "" : "hidden"}`}>
            <span>Choaib Mouhrach</span>
            <button onClick={() => setNavOpen(false)} className="text-3xl">
              <MdClose />
            </button>
          </div>
          <Link onClick={() => setNavOpen(false)} href="#about">
            Who I'm I ?
          </Link>
          <Link onClick={() => setNavOpen(false)} href="#projects">
            Projects ?
          </Link>
          <Link
            onClick={() => setNavOpen(false)}
            className="lg:bg-primary lg:text-black lg:py-2 lg:px-4 lg:rounded-sm lg:shadow-md lg:font-extrabold"
            href="#contact"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
