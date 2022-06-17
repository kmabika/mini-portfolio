/** @format */

import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "styles/theme";

export const Loader = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${theme.colors.black};
  overflow-y: hidden;
  color: ${theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  animation-fill-mode: forwards;
  margin: 0;
  padding: 0;

  .text {
    font-weight: bold;
    font-family: Monument;
    font-size: 42px;
    font-stretch: 150%;
  }

  .text1,
  .text3,
  .text4,
  .text8,
  .text9,
  .text11 {
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px ${theme.colors.background};
  }

  .text1 {
    animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
    opacity: 0;
  }

  .text2 {
    animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
    opacity: 0;
  }

  .text3 {
    animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
    opacity: 0;
  }

  .text4 {
    animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
    opacity: 0;
  }

  .text5 {
    animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
    opacity: 0;
  }

  .text6 {
    animation: blink 0.8s linear 0.4s, blink 0.8s linear 2.5s,
      slide-out 1s linear 3.2s;
    opacity: 0;
  }

  .text7 {
    animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
    opacity: 0;
  }

  .text8 {
    animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
    opacity: 0;
  }

  .text9 {
    animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
    opacity: 0;
  }

  .text10 {
    animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
    opacity: 0;
  }

  .text11 {
    animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
    opacity: 0;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 100%;
    }
    99% {
      opacity: 100%;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes slide-out {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 100%;
    }
    19% {
      opacity: 100%;
    }
    20% {
      opacity: 0;
    }
    39% {
      opacity: 0;
    }
    40% {
      opacity: 100%;
    }
    59% {
      opacity: 100%;
    }
    60% {
      opacity: 0;
    }
    79% {
      opacity: 0;
    }
    80% {
      opacity: 100%;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes slide-out-container {
    0% {
      height: 100vh;
    }
    40% {
      height: 100vh;
    }
    100% {
      height: 0%;
    }
  }

  @media (max-width: 600px) {
    .text {
      font-size: 32px;
    }
  }

  @media (min-width: 1100px) {
    .text {
      font-size: 60px;
    }
  }
`;
export const Wrapper = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
`;
