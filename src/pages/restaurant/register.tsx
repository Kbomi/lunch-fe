import {
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import Editor from '../../components/restaurant/Editor'
import StartIcon from '../../components/restaurant/StartIcon'
import {
  StyledGridWrap,
  StyledLabel,
  StyledRegister,
} from '../../components/restaurant/style'

const categories = [
  {
    value: 'korean',
    label: '한식',
  },
  {
    value: 'chinese',
    label: '중식',
  },
  {
    value: 'japanese',
    label: '일식',
  },
  {
    value: 'western',
    label: '양식',
  },
  {
    value: 'etc',
    label: '기타',
  },
]

const priceList = [
  {
    value: 0,
    label: '1만원 미만',
  },
  {
    value: 1,
    label: '1만원대',
  },
  {
    value: 2,
    label: '2만원대',
  },
  {
    value: 3,
    label: '3만원대',
  },
]

const Register = () => {
  const [rated, setRated] = useState(0)

  return (
    <StyledRegister>
      <Typography variant="h5" gutterBottom>
        식당 등록
      </Typography>
      <StyledGridWrap>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 3, sm: 4, md: 5 }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Grid item xs={12}>
            <TextField
              required
              focused
              fullWidth
              id="name"
              label="필수"
              variant="standard"
              placeholder="식당 이름"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              focused
              fullWidth
              id="address"
              label="필수"
              variant="standard"
              placeholder="주소"
              color="secondary"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              focused
              fullWidth
              id="category"
              select
              label="카테고리"
              defaultValue="korean"
              helperText="음식 카테고리를 설정해주세요."
              color="secondary"
            >
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              required
              focused
              fullWidth
              id="price"
              select
              label="금액 대"
              defaultValue={0}
              helperText="메뉴의 평균 가격을 설정해주세요."
              color="secondary"
            >
              {priceList.map((price) => (
                <MenuItem key={price.value} value={price.value}>
                  {price.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              focused
              fullWidth
              id="distance"
              type="number"
              label="필수"
              variant="standard"
              placeholder="거리 도보 {} 분"
              color="secondary"
            />
          </Grid>
          <Grid item xs={6}>
            <StyledLabel>별점 *</StyledLabel>
            <br />
            {[1, 2, 3, 4, 5].map((number) => (
              <button
                key={number}
                type="button"
                aria-label="별점"
                onClick={() => setRated(number)}
              >
                <StartIcon fill={rated >= number ? '#ff7f23' : '#eee'} />
              </button>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Editor />
          </Grid>
        </Grid>
      </StyledGridWrap>
    </StyledRegister>
  )
}

export default Register
