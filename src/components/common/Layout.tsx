import Header from './Header'
import { StyledContainer } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <StyledContainer>{children}</StyledContainer>
    </>
  )
}

export default Layout
