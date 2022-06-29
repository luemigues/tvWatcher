import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";
import { CalendarHeart } from "@styled-icons/boxicons-regular/CalendarHeart";

export const EpisodeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  border-radius: 10px 10px 10px 10px;
  border: 2px solid ${styles.colors.border};
  flex-wrap: wrap;
  width: 240px;
  height 345px;
  margin: 1%;
`;

export const Header = styled.div`
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: ${styles.fontSize.big};
  font-weight: ${styles.fontWeight.bold};
  font-family: ${styles.fontFam};
  color: ${styles.colors.main};
`;

export const Date = styled.div`
  font-size: ${styles.fontSize.reg};
  font-weight: ${styles.fontWeight.bold};
  font-family: ${styles.fontFam};
  color: ${styles.colors.alter};
  margin-right: 10px;
  box-sizing: border-box;
  overflow-wrap: break-word;
`;

export const Time = styled.div`
  font-size: ${styles.fontSize.reg};
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.alter};
  margin-top: 0px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: ${styles.fontSize.mid};
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.alter};
  margin-top: 10px;
  box-sizing: border-box;
  text-align: left;
`;

export const Number = styled.div`
  font-size: ${styles.fontSize.reg};
  font-weight: ${styles.fontWeight.light};
  font-family: ${styles.fontFam};
  color: ${styles.colors.focus};
  box-sizing: border-box;
`;

export const EpisodeInfo = styled.div`
  padding: 5px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const CalendarIcon = styled(CalendarHeart)`
  width: ${styles.fontSize.big};
  margin-right: 5px;
  color: ${styles.colors.alter};
`;
