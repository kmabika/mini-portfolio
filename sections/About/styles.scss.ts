/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.h1`
  text-transform: uppercase;
  font-size: 46px;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    font-size: 20px;
  }
`;

export const ImageWrapper = styled.div`
  width: 25vw;
  height: 30vw;
  margin-right: 5vw;
  text-align: center;
  overflow: hidden;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    width: 100%;
    width: 80vw;
    height: 70vw;
  }
`;

export const TextWrapper = styled(motion.div)`
  width: 45%;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    width: 95%;
  }
`;
export const Paragraph = styled.p`
  margin: 3vw 0;
  font-size: 23px;
  mix-blend-mode: normal;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    margin: 5vw 0;
  }
  a {
    font-family: Grotesk;
    text-transform: none;
    mix-blend-mode: normal;
  }
`;

export const About = styled.div`
  margin: 20vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 10vh;
  }
`;
