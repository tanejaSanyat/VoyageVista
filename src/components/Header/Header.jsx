import React from "react";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 bg-white z-50 shadow">
        <Menu />
      </div>
    </>
  );
};

export default Header;
