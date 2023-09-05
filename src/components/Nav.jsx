import React, { useEffect, useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  }, []);
  return (
    <nav
      className={`nav-wrapper fixed top-0 left-0 ring-0 h-[70px] ${
        show ? "bg-[#090b13]" : "bg-transparent"
      } flex justify-between items-center px-9 py-0 tracking-[16px] z-30 transition`}
    >
      <a className="w-20 mt-1 max-h-[70px] inline-block text-[0]">
        <img
          className="logo block"
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </a>
    </nav>
  );
};

export default Nav;
