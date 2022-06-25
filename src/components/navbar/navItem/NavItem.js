import React from "react";
import { IconStyleWrapper, StyledLink } from "./NavItem-style";

function NavItem({ Icon, destination }) {
  return (
    <StyledLink
      to={destination}
    >
      <IconStyleWrapper>
        <Icon />
      </IconStyleWrapper>
    </StyledLink>
  );
}

export default NavItem;
