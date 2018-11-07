import styled from 'react-emotion'
import { 
  space, display, width, 
  fontSize, fontWeight, lineHeight, textAlign, 
  color 
} from 'styled-system'

const B = styled('b')(space, display, width, fontSize, fontWeight, lineHeight, textAlign, color,  {

})

B.defaultProps = {
  fontWeight: 'bolder'
}

export default B
