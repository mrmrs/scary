import glamorous from 'glamorous'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, textAlign,
  color, borders, borderColor, borderWidth
} from 'styled-system'

const H1 = glamorous.h1(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, textAlign, color, borders, borderColor, borderWidth, {
  boxSizing: 'border-box'
})

H1.defaultProps = {
  mt: 0
}

export default H1
