import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";

export const Container = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "10px")};
  padding: 0.5% 2%;
  border: 3.5px solid ${styles.colors.secondary};
  border-radius: 30px;
  min-width: 40%;
  display: flex;

  @media (min-width: 990px) {
    min-width: 25%;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 0px solid transparent;
  font-size: ${styles.fontSize.reg};
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  outline: 0;
`;

export const SearchIcon = styled(SearchAlt)`
  height: 2rem;
  color: ${styles.colors.secondary};
  cursor: pointer;
`;
