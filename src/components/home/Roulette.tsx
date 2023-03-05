import { SwiperRef, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { StyledRouletteWrapp, StyledSwiperWrap } from './styles'
import 'swiper/css'
import Button from '@mui/material/Button'
import { useCallback, useEffect, useRef, useState } from 'react'
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined'

type listType = {
  title: string
  img: string
}

const Roulette = () => {
  const swiperRef = useRef<SwiperRef | null>(null)

  const [isSlidePlay, setIsSlidePlay] = useState(false)
  const [isPlayLoading, setIsPlayLoading] = useState(false)

  const list: listType[] = [
    {
      title: '햄버거',
      img: '🍔',
    },
    {
      title: '피자',
      img: '🍕',
    },
    {
      title: '치킨',
      img: '🍗',
    },
    {
      title: '샐러드',
      img: '🥗',
    },
    {
      title: '샌드위치',
      img: '🥪',
    },
    {
      title: '김치찌개',
      img: '🥘',
    },
    {
      title: '파스타',
      img: '🍝',
    },
    {
      title: '초밥',
      img: '🍣',
    },
    {
      title: '도시락',
      img: '🍱',
    },
    {
      title: '라멘',
      img: '🍜',
    },
  ]

  const playSlide = useCallback(() => {
    swiperRef.current?.swiper.autoplay.start()
    setIsPlayLoading(true)
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * list.length)

      setIsPlayLoading(false)

      swiperRef.current?.swiper.autoplay.stop()
      swiperRef.current?.swiper.slideTo(randomNumber)
    }, 5000)
  }, [])

  // 슬라이드가 돌아가면 버튼 숨기기
  useEffect(() => {
    swiperRef.current?.swiper.autoplay.stop()
  }, [])

  return (
    <StyledRouletteWrapp>
      <StyledSwiperWrap
        ref={swiperRef}
        direction="vertical"
        className="roulette"
        modules={[Autoplay]}
        autoplay={{
          delay: 260,
        }}
        speed={120}
      >
        {list.map((food, index) => (
          <SwiperSlide key={index}>
            <i>{food.img}</i>
            <span>{food.title}</span>
          </SwiperSlide>
        ))}
      </StyledSwiperWrap>
      {!isSlidePlay && (
        <>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              setIsSlidePlay(true)
              playSlide()
            }}
          >
            메뉴 추천
          </Button>
          <div className="dim" aria-label="dim" />
        </>
      )}
      {isSlidePlay && (
        <Button
          variant="outlined"
          size="large"
          onClick={playSlide}
          className="retry"
          disabled={isPlayLoading}
        >
          <RestartAltOutlinedIcon />
          다시 돌리기
        </Button>
      )}
    </StyledRouletteWrapp>
  )
}

export default Roulette
