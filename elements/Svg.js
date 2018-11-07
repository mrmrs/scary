import styled from 'react-emotion'
import { space, display, width, color } from 'styled-system'

const Svg = styled('svg')(space, display, width, color, {
  fill: 'currentColor'
})

Svg.defaultProps = {

}

export default Svg
