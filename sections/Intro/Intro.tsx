/** @format */

import * as S from "./styles.scss";
import { useParallax } from "react-scroll-parallax";

const Intro = () => {

  const upEffect = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateY: [50, -100],
    speed: -20,
  });
  return (
    <>
      <S.Greeting>
        <S.Name>
          <S.NameHeader>Kudzai</S.NameHeader>
          <S.GreetingHeader ref={upEffect.ref}>Hi, my name is</S.GreetingHeader>
          <S.NameHeader>Mabika</S.NameHeader>
        </S.Name>
      </S.Greeting>
    </>
  );
};

export default Intro;
