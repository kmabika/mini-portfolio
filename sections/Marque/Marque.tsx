import * as S from './styles.scss'

const Marquee = () => {
  const travelDistance = 87

  return (
    <S.Marquee>
      <S.DirectionMarque>
        <S.LeftMarqueeText
          initial={{ left: 0 }}
          animate={{ left: `-${travelDistance}%` }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          Why
        </S.LeftMarqueeText>
        <S.LeftMarqueeText
          initial={{ left: 0 }}
          animate={{ left: `-${travelDistance}%` }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          Join
        </S.LeftMarqueeText>
        <S.LeftMarqueeText
          initial={{ left: 0 }}
          animate={{ left: `-${travelDistance}%` }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          SOVTECH
        </S.LeftMarqueeText>
        <S.LeftMarqueeText
          initial={{ left: 0 }}
          animate={{ left: `-${travelDistance}%` }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          Why
        </S.LeftMarqueeText>
        <S.LeftMarqueeText
          initial={{ left: 0 }}
          animate={{ left: `-${travelDistance}%` }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          Join
        </S.LeftMarqueeText>
        <S.LeftMarqueeText
          initial={{ left: 0 }}
          animate={{ left: `-${travelDistance}%` }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          Sovtech
        </S.LeftMarqueeText>
      </S.DirectionMarque>
      <S.DirectionMarque>
        <S.RightMarqueeText
          initial={{ right: `${travelDistance}%` }}
          animate={{ right: 0 }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          Why
        </S.RightMarqueeText>
        <S.RightMarqueeText
          initial={{ right: `${travelDistance}%` }}
          animate={{ right: 0 }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          join
        </S.RightMarqueeText>
        <S.RightMarqueeText
          initial={{ right: `${travelDistance}%` }}
          animate={{ right: 0 }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          sovtech
        </S.RightMarqueeText>

        <S.RightMarqueeText
          initial={{ right: `${travelDistance}%` }}
          animate={{ right: 0 }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          why
        </S.RightMarqueeText>
        <S.RightMarqueeText
          initial={{ right: `${travelDistance}%` }}
          animate={{ right: 0 }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          join
        </S.RightMarqueeText>
        <S.RightMarqueeText
          initial={{ right: `${travelDistance}%` }}
          animate={{ right: 0 }}
          transition={{ ease: 'linear', duration: 12, repeat: Infinity }}
        >
          sovtech
        </S.RightMarqueeText>
      </S.DirectionMarque>
    </S.Marquee>
  )
}

export default Marquee
