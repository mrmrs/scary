import styled from 'react-emotion'
import { 
  space, display, width, 
  fontSize, lineHeight,
  color, borders, borderColor,  borderRadius 
} from 'styled-system'

const Dl = styled('dl')(space, display, width, fontSize, lineHeight, color, borders, borderColor,  borderRadius, {

})

Dl.defaultProps = {

}

export default Dl
