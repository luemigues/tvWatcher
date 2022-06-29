import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";

export const Container = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "10px")};
  padding: 0.5% 2%;
  border: 3px solid ${styles.colors.secondary};
  border-radius: 30px;
  display: flex;
  align-items: center;
  min-width: 30%;
`;

export const Input = styled.input`
  width: 100%;
  border: 0px solid transparent;
  border-radius: 30px;
  font-size: ${styles.fontSize.reg};
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.main};
  outline: 0;
  min-width: 50px;
`;

export const SearchIcon = styled(SearchAlt)`
  height: 2rem;
  color: ${styles.colors.secondary};
  cursor: pointer;
`;
