import styled from 'react-emotion'
import { 
  space, display, width, maxWidth, 
  color, borders, borderColor, borderRadius 
} from 'styled-system'

const Img = styled('img')(space, display, width, maxWidth, color, borders, borderColor, borderRadius, {
  borderStyle: 'none'
})

Img.defaultProps = {
  w: 1,
  display: 'block',
  maxWidth: '100%'
}

export default Img
