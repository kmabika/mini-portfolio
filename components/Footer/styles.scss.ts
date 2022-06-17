import styled from "styled-components";


export const Footer = styled.div`
text-align: right;
`;

export const CTA = styled.h1`
font-size: 92px;
text-transform: uppercase;
@media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Link = styled.a`
font-size: 154px;
text-transform: uppercase;
-webkit-text-fill-color: ${({theme}) => theme.colors.background};
-webkit-text-stroke: ${({theme}) => theme.colors.black};
-webkit-text-stroke-width: 2px;
&:hover{
    -webkit-text-fill-color: ${({theme}) => theme.colors.black};
    -webkit-text-stroke: 0.14vw ${({theme}) => theme.colors.background};
}
@media only screen and (max-width: 600px) {
    font-size: 39px;
  }
`