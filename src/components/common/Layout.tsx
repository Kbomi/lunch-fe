import { createTheme } from '@material-ui/core'
import { ThemeProvider } from '@mui/material'
import Header from './Header'
import { StyledContainer } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ffc0cb',
      main: '#ff6680',
      dark: '#ff3456',
    },
    secondary: {
      light: '#333',
      main: '#191919',
      dark: '#000',
    },
  },
})

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <StyledContainer>{children}</StyledContainer>
    </ThemeProvider>
  )
}

export default Layout
