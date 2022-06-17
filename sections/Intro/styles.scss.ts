import styled from 'styled-components';

export const Greeting = styled.div`
`;

export const GreetingHeader = styled.h1`

    font-size: 46px;
    text-align: center;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        font-size: 25px;
    }
`;

export const Name = styled.div`
margin: 10vh 0 20vh 0;
`;

export const NameHeader = styled.h1`
font-size: 246px;
line-height: 10vw;
height: 10vw;
-webkit-text-fill-color: transparent;
-webkit-text-stroke: 0.1vw #000;
text-transform: uppercase;
:nth-child(3){
    text-align: right;
}
@media (max-width: 600px) {
font-size: 66px;
}

`;

export const RoleHeader = styled.h3`
font-size: 46px;
text-align: center;
z-index: 5;
@media (hover: none) and (pointer: coarse), (max-width: 500px){
    font-size: 25px;
}
`;