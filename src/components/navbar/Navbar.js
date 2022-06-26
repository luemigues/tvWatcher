import React from "react";
import { Link } from "react-router-dom";
import { Header, Nav } from "./Navbar-styles";
import { CalendarHeart, SearchAlt } from "@styled-icons/boxicons-regular";
import { FavoriteBorder } from "@styled-icons/material/FavoriteBorder";
import { ReactComponent as Logo } from "../../assets/logo-wide.svg";
import NavItem from "./navItem/NavItem";

const navItems = [
  { icon: SearchAlt, destination: "search" },
  { icon: FavoriteBorder, destination: "favorites" },
  { icon: CalendarHeart, destination: "upcoming" },
];

function Navbar(props) {
  return (
    <Header>
      <Link to="/">
        <Logo width="60%" />
      </Link>

      <Nav>
        {navItems.map((item) => {
          return (
            <NavItem
              key={item.destination}
              Icon={item.icon}
              destination={item.destination}
            />
          );
        })}
      </Nav>
    </Header>
  );
}

export default Navbar;
