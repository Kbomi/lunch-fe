import { Container, Typography } from '@mui/material'
import Roulette from '../components/home/Roulette'
import { StyledHeaderWrap } from '../components/home/styles'

const Home = () => {
  return (
    <>
      <StyledHeaderWrap>
        <Typography variant="h5" gutterBottom>
          오늘 무엇을 먹어야 할지 모르겠다면?
          <br />
          무작위 추첨!
        </Typography>
      </StyledHeaderWrap>
      <Roulette />
    </>
  )
}

export default Home
