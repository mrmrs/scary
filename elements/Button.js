import glamorous from 'glamorous'
import { 
  space, width, display, alignItems, justifyContent,
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, borderWidth, borderRadius, 
  hover, active, focus 
} from 'styled-system'

const Button = glamorous.button(space, width, display, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, borderWidth, borderRadius, hover, active, focus, { 
  boxSizing: 'border-box', 
  overflow: 'visible',
  textTransform: 'none',
  fontFamily: 'inherit',
})

Button.defaultProps = {
  m: 0
}

export default Button
