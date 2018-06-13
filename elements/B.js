import glamorous from 'glamorous'
import { 
  space, display, width, 
  fontSize, fontWeight, lineHeight, textAlign, 
  color 
} from 'styled-system'

const B = glamorous.b(space, display, width, fontSize, fontWeight, lineHeight, textAlign, color,  {

})

B.defaultProps = {
  fontWeight: 'bolder'
}

export default B
