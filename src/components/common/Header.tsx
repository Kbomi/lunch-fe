import { memo } from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import { Grid, Box, Avatar } from '@mui/material'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  padding: 8px 16px;
`

const Header = () => {
  return (
    <StyledHeader className="App-header">
      <Grid>
        <Avatar alt="Remy Sharp" src="/images/logo.png" />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Link to="/register">식당 등록</Link>
          </Grid>
          <Grid item xs={8}>
            <Link to="/list">식당 목록</Link>
          </Grid>
        </Grid>
      </Grid>
    </StyledHeader>
  )
}

export default memo(Header)
