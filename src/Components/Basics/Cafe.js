import React, { useState } from "react";
import Menu from "./menuApi";
import "./Cafe.css";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((currElement) => {
      return currElement.Category;
    })
  ),
  "All Food",
];
console.log(uniqueList);

const Cafe = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);

  const filteritem = (Category) => {
    if (Category === "All Food") {
      setmenuData(Menu);
      return;
    }
    // setmenuList(Menu);
    const updateList = Menu.filter((currElement) => {
      return currElement.Category === Category;
    });
    setmenuData(updateList);
  };
  return (
    <>
      <Navbar filteritem={filteritem} menuList={menuList} />

      <MenuCard menuData={menuData} />
    </>
  );
};
export default Cafe;
