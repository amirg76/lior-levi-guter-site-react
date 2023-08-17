import styled from "styled-components";
import { tablet, mobile } from "../../../responsive";
export const AboutMeContainer = styled.div`
  position: relative;
  margin-top: 925px;
  height: 52rem;
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.8;
  background-color: blue;
  ${tablet({
    // width: "35vw",
    // textAlign: "center",
  })};
  ${mobile({
    // width: "55vw",
    // fontSize: "1rem",
  })};
`;
