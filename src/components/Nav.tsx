import Link from "next/link";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    const handleNav = () => {
      if (!isOpen) {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          if (nav.current) nav.current.style.transform = "translateY(0)";
        } else {
          if (nav.current) nav.current.style.transform = "translateY(-68px)";
        }
        prevScrollpos = currentScrollPos;
      }
    };
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

    window.addEventListener("scroll", handleNav);

    return () => window.removeEventListener("scroll", handleNav);
  }, [isOpen]);

  function handleChangeTheme() {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme) {
      window.document.documentElement.className = localStorageTheme === "dark" ? "" : "dark";
      localStorage.setItem("theme", localStorageTheme === "dark" ? "light" : "dark");
      setTheme(localStorageTheme === "dark" ? "dark" : "light");
      return;
    }

    localStorage.setItem("theme", "light");
  }

  return (
    <nav ref={nav} className="bg-light-gray dark:bg-darker-blue h-16 fixed top-0 w-full z-50">
      <div className="container mx-auto h-full px-4 lg:px-0 flex items-center justify-between ">
        <div className="text-xl font-semibold">
          <Link href="">Choaib Mouhrach</Link>
        </div>
        <div onClick={() => setIsOpen(true)} className="text-2xl lg:hidden">
          <MdOutlineMenu />
        </div>
        <div
          className={`flex flex-col lg:flex-row gap-4 justify-center text-xl lg:text-base items-center bg-primary lg:bg-transparent fixed lg:static left-0 top-0 h-screen w-screen lg:w-fit lg:h-fit ${
            isOpen ? "" : "hidden lg:flex"
          }`}
        >
          <div className={`top-0 right-0 fixed p-4 text-2xl ${isOpen ? "" : "hidden"}`}>
            <div onClick={() => setIsOpen(false)}>
              <span className="hidden">Clsoe button</span>
              <MdOutlineClose />
            </div>
          </div>
          <button onClick={handleChangeTheme}>{theme} theme ?</button>
          <Link href="#skills">SKILLS</Link>
          <Link href="#projects">PROJECTS</Link>
          <Link href="#contact" className="lg:bg-primary text-white py-2 px-4 rounded-md">
            CONTACT ME
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
