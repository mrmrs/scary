import glamorous from 'glamorous'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, borderWidth,
} from 'styled-system'

const H4 = glamorous.h4(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, borderWidth, {
  boxSizing: 'border-box'
})

H4.defaultProps = {
  mt: 0
}

export default H4
