import glamorous from 'glamorous'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, borderWidth,
} from 'styled-system'

const H3 = glamorous.h3(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, borderWidth, {
  boxSizing: 'border-box'
})

H3.defaultProps = {
  mt: 0
}

export default H3
