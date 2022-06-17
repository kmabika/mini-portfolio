/** @format */

import * as S from "./styles.scss";
import { useParallax } from "react-scroll-parallax";

const Intro = () => {
  const parallax = useParallax({
    easing: "easeOutQuad",
    translateX: [0, 20],
  });
  const upEffect = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateY: [50, -100],
    speed: -20,
  });
  return (
    <>
      <S.Greeting>
        <S.GreetingHeader ref={parallax.ref}>Hi, my name is</S.GreetingHeader>
        <S.Name>
          <S.NameHeader>Kudzai</S.NameHeader>
          <S.RoleHeader ref={upEffect.ref}>Developer</S.RoleHeader>
          <S.NameHeader>Mabika</S.NameHeader>
        </S.Name>
      </S.Greeting>
    </>
  );
};

export default Intro;
