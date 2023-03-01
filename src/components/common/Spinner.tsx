import Lottie from 'react-lottie'
import rouletteData from './spinner.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: rouletteData,
}

const Spinner = () => {
  return <Lottie options={defaultOptions} height={140} width={140} />
}

export default Spinner
