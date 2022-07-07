import React, { useState, useEffect } from "react";
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
    //   window.removeEventListener("scorll");
    // };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt="Netflix logo"
      />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix logo"
      />
    </div>
  );
}
export default Nav;
