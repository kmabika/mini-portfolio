import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useScrollBlock } from 'hooks'

import Banner from 'sections/Banner'
import Marquee from 'sections/Marque'
import About from 'sections/About'
import Intro from 'sections/Intro'
import PageLayout from 'layouts/PageLayout'
import Purpose from 'sections/Reason'
import Loader from 'components/Loader'

const HomePage = () => {
  const [loader, setLoader] = useState(true)
  const [blockScroll, allowScroll] = useScrollBlock()
  loader ? blockScroll() : allowScroll();
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 4000)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {loader ? (
        <Loader />
      ) : (
        <PageLayout>
          <Banner />
          <Intro/>
          <About/>
          <Marquee />
          <Purpose />
        </PageLayout>
      )}
    </AnimatePresence>
  )
}

export default HomePage
