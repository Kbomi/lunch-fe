import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export const containerSize = 800
export const lightGray = '#e7ebf0'
export const black = '#202020'
export const mainColor = '#ffc0cb'

export const StyledHeader = styled.header`
  padding: 8px 16px;
  border-bottom: 1px solid ${lightGray};
`

export const StyledHeaderContainer = styled(Grid)`
  max-width: ${containerSize}px;
  margin: 0 auto;
`

export const StyledLink = styled(Link)`
  color: ${black};
  text-decoration: none;
  border-bottom: 1px solid ${black};
`

export const StyledContainer = styled.div`
  max-width: ${containerSize}px;
  padding-top: 30px;
  margin: 0 auto;
`
