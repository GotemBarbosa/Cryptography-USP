import ICMCLogo from "../assets/Logo icmc verde fosco 2.png";
import ICMCLogo2 from "../assets/ICMC.png";
import { NavLink } from "react-router-dom";
import PageButton from "./PageButton";
import { useEffect, useState } from "react";
interface props {
  home?: boolean;
}
export default function Header({ home }: props) {
  const [isFixed, setIsFixed] = useState(false);

  function onScroll() {
    const imageOnHomeSize = 260 - 40;
    if (window.scrollY > imageOnHomeSize) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  useEffect(() => {
    if (home) {
      setIsFixed(false);
      window.onscroll = function () {
        onScroll();
      };
    } else {
    }
  }, []);

  return (
    <div className="h-20">
      <div
        id="Header"
        className={
          home
            ? isFixed
              ? "w-full flex items-center justify-between z-50 h-20 px-5 py-2 text-white font-mono fixed bg-gray-950 transition-all"
              : "w-full flex items-center justify-between z-50 h-20 px-5 py-2 text-white font-mono fixed"
            : "w-full flex items-center justify-between z-50 h-20 px-5 py-2 text-white font-mono bg-gray-950 "
        }
      >
        <div className="h-full">
          <NavLink to="/Home">
            <img
              alt=""
              src={!isFixed && home ? ICMCLogo2 : ICMCLogo}
              className=" sm:h-full sm:w-auto  opacity-80 cursor-pointer"
            />
          </NavLink>
        </div>
        <div className="flex w-4/5 justify-around md:w-5/12">
          <PageButton text="Home" link="/" />
          <PageButton text="Modelos" link="/modelos" />
          <PageButton text="Fontes" link="/fontes" />
          <PageButton text="Museu do ICMC" link="https://mc.icmc.usp.br/" />
        </div>
      </div>
    </div>
  );
}
