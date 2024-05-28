import React from "react";
import classes from "./main-header.module.css";
import Link from "next/link";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <div>
      <p>Main header</p>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/news">News</NavLink>
    </div>
  );
};

export default MainHeader;
