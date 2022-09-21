import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //     window.removeEventListener("scroll")
    // }
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://tse3.mm.bing.net/th?id=OIP.PBUVJxDFSoUTErEkS1rwzgHaEG&pid=Api&P=0"
      />
      <img
        className="nav__avator"
        src="https://tse1.mm.bing.net/th?id=OIP.4l745LKOzMIKiNgqGO6cLQHaHa&pid=Api&P=0"
      />
    </div>
  );
}

export default Nav;
