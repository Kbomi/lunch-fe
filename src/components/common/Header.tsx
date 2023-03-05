import { memo } from 'react'
import { Grid, Avatar } from '@mui/material'
import { StyledHeader, StyledHeaderContainer, StyledLink } from './styles'

const Header = () => {
  return (
    <StyledHeader className="App-header">
      <StyledHeaderContainer container alignItems="center">
        <Grid item xs={4}>
          <Avatar alt="Remy Sharp" src="/images/logo.png" />
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end" xs={8}>
          <Grid item xs={2}>
            <StyledLink to="/restaurant/register">식당 등록</StyledLink>
          </Grid>
          <Grid item xs={2}>
            <StyledLink to="/list">식당 목록</StyledLink>
          </Grid>
        </Grid>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default memo(Header)
