import styled from '@emotion/styled'
import Lottie from 'react-lottie'
import { color_primary } from '../../constants/config'
import rouletteData from './spinner.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: rouletteData,
}

const StyledSpinner = styled.div`
  path {
    stroke: ${color_primary};
  }
`

const Spinner = () => {
  return (
    <StyledSpinner>
      <Lottie options={defaultOptions} height={140} width={140} />
    </StyledSpinner>
  )
}

export default Spinner
