import glamorous from 'glamorous'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, borderWidth,
} from 'styled-system'

const H2 = glamorous.h2(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, borderWidth, {
  boxSizing: 'border-box'
})

H2.defaultProps = {
  mt: 0
}

export default H2
