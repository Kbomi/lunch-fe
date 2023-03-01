import styled from '@emotion/styled'
import { Swiper } from 'swiper/react'

export const StyledHeaderWrap = styled.div`
  h5 {
    margin: 0;
  }
`

export const StyledSwiperWrap = styled(Swiper)`
  width: calc(100% - 40px);
  max-width: 360px;
  height: calc(100% - 40px);
  max-height: 360px;
  margin: 30px auto 0;
  overflow: hidden;
  .swiper-wrapper {
    transition-timing-function: cubic-bezier(0, 0.855, 0.06, 0.725);
  }
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    i {
      font-size: 100px;
      font-style: normal;
    }
  }
`

export const StyledRouletteWrapp = styled.div`
  position: relative;
  text-align: center;
  .dim {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    &.retry {
      position: static;
      margin: 30px auto 0;
      transform: translate(0);
    }
  }
`
