/** @format */

import * as S from "./styles.scss";

const Loader = () => {
  return (
    <S.Loader exit={{ y: -1000, transition: { duration: 0.6, delay: 0 } }}>
      <S.Wrapper>
        <div className="text1 text">Kudzai Mabika</div>
        <div className="text2 text">Kudzai Mabika</div>
        <div className="text3 text">Kudzai Mabika</div>
        <div className="text4 text">Kudzai Mabika</div>
        <div className="text5 text">Kudzai Mabika</div>
        <div className="text6 text">Kudzai Mabika</div>
        <div className="text7 text">Kudzai Mabika</div>
        <div className="text8 text">Kudzai Mabika</div>
        <div className="text9 text">Kudzai Mabika</div>
        <div className="text10 text">Kudzai Mabika</div>
        <div className="text11 text">Kudzai Mabika</div>
      </S.Wrapper>
    </S.Loader>
  );
};

export default Loader;
