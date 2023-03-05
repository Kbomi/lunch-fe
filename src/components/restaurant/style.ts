import styled from '@emotion/styled'
import { theme } from '../common/Layout'

export const StyledRegister = styled.div`
  h5 {
    margin-bottom: 30px;
  }

  button {
    padding: 0 8px;
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`

export const StyledGridWrap = styled.div`
  padding: 26px 36px;
  border: 1px solid ${theme.palette.primary.light};
  border-radius: 6px;
`

export const StyledLabel = styled.label`
  display: inline-block;
  padding-bottom: 4px;
  font-size: 12px;
  color: ${theme.palette.secondary.main};
`
