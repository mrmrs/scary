import glamorous from 'glamorous'
import { 
  space, width, maxWidth, display, alignItems, justifyContent, 
  fontSize, lineHeight, textAlign, 
  color, borders, borderColor, borderWidth, borderRadius 
} from 'styled-system'

const Div = glamorous.div(space, width, maxWidth, display, alignItems, justifyContent, fontSize, lineHeight, textAlign, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Div.defaultProps = {
  w: 1
}

export default Div
