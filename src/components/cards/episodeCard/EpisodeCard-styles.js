import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";

export const EpisodeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-width: fit-content;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  width: 100%;
  background-color: ${styles.colors.secondary};
  border: 1px solid ${styles.colors.secondary};
  border-radius: 10px 10px 0px 0px;
  padding: 15px;
  box-sizing: border-box;

  font-size: inherit;
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.alter};
`;

export const EpisodeDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: fit-content;
  box-sizing: border-box;
  padding: 30px;
  width: 100%;
  border: 1px solid ${styles.colors.border};
  border-radius: 0px 0px 10px 10px;
`;

export const EpisodeInfo = styled.div`
  font-size: ${styles.fontSize.reg};
  font-weight: ${styles.fontWeight.bold};
  font-family: ${styles.fontFam};
  color: ${styles.colors.main};
  box-sizing: border-box;
  overflow-wrap: auto;
  text-align: left;
`;

export const Date = styled.div`
  font-size: ${styles.fontSize.par};
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.main};
  margin-top: 0px;
  box-sizing: border-box;
  overflow-wrap: break-word;
`;
