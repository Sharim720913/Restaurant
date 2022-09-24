import React from "react";

const Navbar = ({ filteritem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currElement) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filteritem(currElement)}
              >
                {currElement}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
