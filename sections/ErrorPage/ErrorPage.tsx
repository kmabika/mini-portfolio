import * as S from './styles.scss'


const ErrorPage = () => {
  return (
    <>
      <S.ErrorWrapper>
        <S.Wrapper>
          <S.Header>404</S.Header>
          <S.SubHeader href="/">Go Back Home</S.SubHeader>
        </S.Wrapper>
      </S.ErrorWrapper>
    </>
  )
}

export default ErrorPage
