import React, { useState, useEffect } from "react";
import LogoEdit from "./ImgsSidebar/edit.svg";
import FolderIcon from "./ImgsSidebar/folder.svg";
import Tools from "./ImgsSidebar/settings.svg";
import Menu from "./ImgsSidebar/menu.svg";
import Meteo from "./ImgsSidebar/meteo.svg";
import "./Sidebar.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SideNotes from "../SideNotes/SideNotes";

export default function Sidebar() {
  // State
  const [checkWidth, setCheckwidth] = useState(window.innerWidth);
  const [toggleNav, setToggleNav] = useState(false);

  // Function
  const checkWithFunc = () => {
    setCheckwidth(window.innerWidth);
  };
  const toggleNavFunc = () => {
    setToggleNav(!toggleNav);
  };
  useEffect(() => {
    window.addEventListener("resize", checkWithFunc);
    return () => {
      window.removeEventListener("resize", checkWithFunc);
    };
  }, []);
  return (
    <>
      {checkWidth < 900 && (
        <button onClick={toggleNavFunc} className="toggle-nav-btn">
          <img src={Menu} alt="menu" />
        </button>
      )}
      <nav
        className={
          toggleNav ? "container-sidebar visible-nav" : "container-sidebar"
        }
      >
        <div className="sidebar">
          <div className="three-dots">
            <div className="dot-nav d-red"></div>
            <div className="dot-nav d-yellow"></div>
            <div className="dot-nav d-green"></div>
          </div>
          <ul>
            <Link to="/">
              <li>
                <img src={FolderIcon} alt="logo folder" />
              </li>
            </Link>
            <Link to="/edit">
              <li>
                <img src={LogoEdit} alt="logo edit" />
              </li>
            </Link>
            <Link to="/settings">
            <li>
              <img src={Tools} alt="logo tools" />
            </li>
              </Link>
            <Link to="/weather">
            <li>
              <img src={Meteo} alt="Logo meteo" />
            </li>
            </Link>
          </ul>
        </div>
        <SideNotes />
      </nav>

    </>
  );
}
