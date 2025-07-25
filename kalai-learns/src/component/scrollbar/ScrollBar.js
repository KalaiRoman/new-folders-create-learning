import React, { useState, useEffect } from "react";

function ScrollBar() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log("Scroll Y:", window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0px",
          right: "0px",
        }}
      >
        {scrollY > 10 ? "show" : null}
      </div>
    </div>
  );
}

export default ScrollBar;
