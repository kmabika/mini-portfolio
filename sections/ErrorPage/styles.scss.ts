import styled from 'styled-components';
import Link from 'next/link';

export const ErrorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
`


export const Wrapper = styled.div`
  margin: 10vh 0 20vh 0;
`

export const Header = styled.h1`
  font-size: 246px;
  line-height: 10vw;
  height: 10vw;
  margin-bottom: 20px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.1vw #000;
  text-transform: uppercase;
  :nth-child(3) {
    text-align: right;
  }
  @media (max-width: 600px) {
    font-size: 66px;
  }
`

export const SubHeader = styled(Link)`
  font-size: 46px;
  text-align: center;
  z-index: 5;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    font-size: 25px;
  }
`
