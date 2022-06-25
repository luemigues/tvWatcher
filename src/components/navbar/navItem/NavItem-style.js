import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { styles } from "../../../utils/defaultStyles";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    height: 30px;
    width: 30px;
    margin-right: 2vw;

    @media (max-width: 990px) {
      height: 25px;
      width: 25px;
    }
  }
`;

export const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  &:hover,
  &:active {
    color: ${styles.colors.secondary};
  }

  &.${activeClassName} {
    color: ${styles.colors.focus};
  }
`;
