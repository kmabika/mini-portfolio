/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";

export const Marquee = styled.div`
  position: relative;
  left: -15vw;
`;

export const DirectionMarque = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  span {
    position: relative;
    display: inline-block;
    font-family: Monument;
    font-weight: 100;
    font-size: 123px;
    text-transform: uppercase;
    padding-right: 2vw;

    @media only screen and (max-width: 600px) {
      font-size: 32px;
    }
  }
`;

export const LeftMarqueeText = styled(motion.span)`
  border-top: 0.5vw solid #000;
  border-bottom: 0.5vw solid #000;
`;

export const RightMarqueeText = styled(motion.span)`
  border-bottom: 0.5vw solid #000;
`;
