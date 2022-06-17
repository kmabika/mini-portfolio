import Image from 'next/image'
import { useEffect } from 'react'
import * as S from './styles.scss'
import { useParallax } from 'react-scroll-parallax'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUpAnimation } from 'hooks/animations'

const About = () => {
  const parallax = useParallax({
    translateY: [40, -50],
    speed: 500,
  })
  const ctrls = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      ctrls.start('visible')
    }
    if (!inView) {
      ctrls.start('hidden')
    }
  }, [ctrls, inView])

  return (
    <S.About>
      <S.ImageWrapper ref={parallax.ref}>
        <Image
          src="/images/fine-boy.png"
          width="500px"
          height="484px"
          alt="Fine Boy"
        />
      </S.ImageWrapper>
      <S.TextWrapper ref={ref} animate={ctrls} variants={fadeUpAnimation}>
        <S.Paragraph>
          My name is Kudzai, I am a very curious and self-driven person with a
          big passion for everything software development. I graduated with my{' '}
          {"Bachelor's"} in Computer and Information Sciences with a
          concentration in Software Development and Computer Network Security
          from Monash University. {" I'm"} also 2x AWS certified with AWS
          Certified Cloud Practitioner and AWS Certified Developer Associate
          certifications. Read more on my{' '}
          <a href="https://resume.kudzaim.codes" target="">
            resume
          </a>{' '}
          ↗
        </S.Paragraph>
        <S.Paragraph>
          Software development has always been my passion and hobby since
          highschool. Growing up, whenever someone asked me what my dream was, I
          would always say, “I want to be an developer”. I was constantly
          immersed in problem solving activities. While in the midst of all
          that, web development started to become a big part of my life as well,
          and my interest in the constantly evolving frontend ecosystem
          continued to grow.
        </S.Paragraph>
        <S.Paragraph>
          To me, development is a problem solving activity. As an aspiring
          developer, I understand that the perfect app not only involves
          functionality, but even more importantly, an interface that functions
          well. This requires a deep understanding of core development practices
          and creativity - the outcome of which greatly impacts the overall
          experience of the application.
        </S.Paragraph>
        <S.Paragraph>
          I enjoy working on projects that change the and take advantage of the
          mordern web. I love working on problems from the idea stage and seeing
          them through completion On a team level, I strive to work with
          individuals who have the same goals and standards as me, because I
          genuinely enjoy the effectiveness a well-oilled team produces. I dream
          to become a domain expert in my field with being able to 🚀 ship
          exiting projects.
        </S.Paragraph>
        <S.Paragraph>
          In my free time, {"I'll"} most likely be found watching a basketball
          game or playing video games or lurking on the front page of the
          internet.
        </S.Paragraph>
      </S.TextWrapper>
    </S.About>
  )
}

export default About
