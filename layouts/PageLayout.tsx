import * as S from './styles.scss'
import Footer from 'components/Footer'


const PageLayout = ({ children }: PageLayoutTypes) => {
  return (
    <S.PageContainer>
      <S.Home>{children}</S.Home>
      <Footer />
    </S.PageContainer>
  )
}

export default PageLayout
