/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: "200%",
  },
  animate: {
    y: "0%",
  },
};

export const Banner = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-bottom: 10vh;
`;

export const InnerWrap = styled.div`
  overflow: hidden;
  width: 100%;
  :nth-child(2) {
    text-align: right;
  }
  :nth-child(3) {
    padding-left: 15vw;
  }
`;

export const Header = styled(motion.h1).attrs(() => ({
  initial: "initial",
  variants,
}))`
  text-transform: uppercase;

  height: 10vw;
  overflow: hidden;
  @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    font-size:150px;
    line-height:10vw;
}
   

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
    font-size: 36px;
}
  
  @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    font-size:100px;
    line-height: 84px;
  }
`;
