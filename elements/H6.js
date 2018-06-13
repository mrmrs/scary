import glamorous from 'glamorous'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, borderWidth,
} from 'styled-system'

const H6 = glamorous.h6(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, borderWidth, {
  boxSizing: 'border-box'
})

H6.defaultProps = {
  mt: 0
}

export default H6
