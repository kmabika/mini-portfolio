/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const Info = styled.div`
  margin-bottom: 20vh;
  margin-right: 5vw;
  display: flex;
  justify-content: space-between;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    flex-wrap: wrap;
    margin-bottom: 10vh;
  }
`;

export const ContentWrapper = styled.div`
  margin-bottom: 20vh;
  margin-right: 5vw;
  display: flex;
  justify-content: space-between;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    flex-wrap: wrap;
    margin-bottom: 10vh;
  }
`;

export const Content = styled(motion.div)`
  width: 48%;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    width: 95%;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 3vw;
  font-size: 23px;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    margin-bottom: 5vw;
  }
  :last-child {
    margin-bottom: 0;
  }
`;

export const Reason = styled.div`
  margin: 5vh 0;
`;

export const Header = styled(motion.h1)`
  text-transform: uppercase;
  font-size: 46px;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    font-size: 20px;
  }
`;
