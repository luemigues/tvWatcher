import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";

export const Container = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "10px")};
  padding: 0.5% 2%;
  border: 3.5px solid ${styles.colors.secondary};
  border-radius: 30px;
  width: 500px;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  border: 0px solid transparent;
  font-size: ${styles.fontSize.preg};
  font-weight: ${styles.fontWeight.preg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  outline: 0;
`;

export const SearchIcon = styled(SearchAlt)`
  height: 2rem;
  color: ${styles.colors.secondary};
  cursor: pointer;
`;
