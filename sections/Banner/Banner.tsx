/** @format */

import * as S from "./styles.scss";

const transition = {
  duration: 0.5,
  ease: [0.5, -0.05, 0.01, 0.9],
};

const Banner = () => {
  return (
    <S.Banner>
      <S.InnerWrap>
        <S.Header animate="animate" transition={{ ...transition, delay: 0.9 }}>
          unique
        </S.Header>
      </S.InnerWrap>
      <S.InnerWrap>
        <S.Header animate="animate" transition={{ ...transition, delay: 1.2 }}>
          solutions
        </S.Header>
      </S.InnerWrap>
      <S.InnerWrap>
        <S.Header animate="animate" transition={{ ...transition, delay: 1.4 }}>
          for unique
        </S.Header>
      </S.InnerWrap>
      <S.InnerWrap>
        <S.Header animate="animate" transition={{ ...transition, delay: 1.6 }}>
          problems.
        </S.Header>
      </S.InnerWrap>
    </S.Banner>
  );
};

export default Banner;
