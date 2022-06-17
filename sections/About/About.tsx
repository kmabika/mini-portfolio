/** @format */

import Image from "next/image";
import * as S from "./styles.scss";
import { useParallax } from "react-scroll-parallax";

const About = () => {
  const parallax = useParallax({
    translateY: [40, -50],
    speed: 500,
  });
  return (
    <S.About>
      <S.ImageWrapper ref={parallax.ref}>
        <Image
          src="/images/kudzai.png"
          width="500px"
          height="484px"
          alt="picture of kudzai"
          priority
        />
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.Paragraph>
          My name is Kudzai, I am a very curious and self-driven person with a
          big passion for everything software development. I graduated with my{" "}
          {"Bachelor's"} in Computer and Information Sciences with a
          concentration in Software Development and Computer Network Security
          from Monash University. {" I'm"} also 2x AWS certified with AWS
          Certified Cloud Practitioner and AWS Certified Developer Associate
          certifications. Read more on my{" "}
          <a href="https://resume.kudzaim.codes" target="_blank" rel="noreferrer">
            resume
          </a>{" "}
          ↗
        </S.Paragraph>
        <S.Paragraph>
          Software development has always been my passion and hobby since high
          school. Growing up, whenever someone asked me what my dream was, I
          would always say, “I want to be a developer”. I was constantly
          immersed in problem-solving activities. While in the midst of all
          that, web development started to become a big part of my life as well,
          and my interest in the constantly evolving frontend ecosystem
          continued to grow.
        </S.Paragraph>
        <S.Paragraph>
          To me, development is a problem-solving activity. As an aspiring
          developer, I understand that the perfect app not only involves
          functionality, but even more importantly, an interface that functions
          well. This requires a deep understanding of core development practices
          and creativity - the outcome of which greatly impacts the overall
          experience of the application.
        </S.Paragraph>
        <S.Paragraph>
          I enjoy working on projects that change and take advantage of the
          modern web. I love working on problems from the idea stage and seeing
          them through completion On a team level, I strive to work with
          individuals who have the same goals and standards as me because I
          genuinely enjoy the effectiveness a well-oiled team produces. I dream
          to become a domain expert in my field by being able to ship exciting
          projects.
        </S.Paragraph>
        <S.Paragraph>
          In my free time, {"I'll"} most likely be found watching a basketball
          game or playing video games o, or lurking on the front page of the
          internet.
        </S.Paragraph>
      </S.TextWrapper>
    </S.About>
  );
};

export default About;
