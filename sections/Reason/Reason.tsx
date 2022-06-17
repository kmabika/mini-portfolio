/** @format */

import { useEffect } from "react";
import * as S from "./styles.scss";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUpAnimation } from "hooks/animations";

const Reason = () => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  return (
    <>
      <S.Reason>
        <S.Header ref={ref} animate={ctrls} variants={fadeUpAnimation}>
          Why I Want To Join SovTech.
        </S.Header>
        <S.ContentWrapper>
          <S.Content ref={ref} animate={ctrls} variants={fadeUpAnimation}>
            <S.Paragraph>
              To me, SovTech represents innovation at its finest. I had the
              opportunity to speak with a friend{" "}
              <Link
                href="https://www.linkedin.com/comm/in/casmir-chuks"
                passHref={true}
              >
                Casmir
              </Link>{" "}
              who works in the development team. I asked him what he felt was
              the best part of working at SovTech. The resounding answer was the
              collaborative culture.
            </S.Paragraph>

            <S.Paragraph>
              He explained how everyone here is not only bright and passionate
              but also eager to help other team members. I think {"SovTech's"}
              culture collaborative culture is evident through the graduate
              programme where we would get to collaborate with senior
              developers.
            </S.Paragraph>
            <S.Paragraph>
              SovTech delivers the best-in-class custom software solutions,
              elite software development teams, and innovative cloud software to
              enterprise businesses across numerous industries, and has been the
              leading software development company in Africa because they
              approach things differently as a word class company. SovTech cares
              about the work they produce.
            </S.Paragraph>
            <S.Paragraph>
              These two things are not a coincidence, I want to work at SovTech
              because I believe that SovTech offers an exceptional place for me
              to learn and gain experience while adding real value to businesses
              each day. I love thinking outside the box. My favorite thing about
              software development is finding unexpected solutions to problems.
              I want to bring that same innovative spirit into this role, where
              I feel that it will fit right in.
            </S.Paragraph>
          </S.Content>
        </S.ContentWrapper>
      </S.Reason>
    </>
  );
};

export default Reason;
