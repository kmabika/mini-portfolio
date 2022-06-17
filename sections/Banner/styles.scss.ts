import styled from 'styled-components'
import { motion } from 'framer-motion'


const variants = {
    initial: {
      y: '200%',
    },
    animate: {
      y: '0%',
    },
}

export const Banner = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-bottom: 10vh;
`

export const InnerWrap = styled.div`
  overflow: hidden;
  width: 100%;
  :nth-child(2) {
    text-align: right;
  }
  :nth-child(3) {
    padding-left: 15vw;
  }
`

export const Header = styled(motion.h1).attrs(() => ({
    initial: "initial",
    variants}))`
  text-transform: uppercase;
  font-size: 150px;
  line-height: 10vw;
  height: 10vw;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    font-size: 43px;
    line-height: 41px;
  }
`;