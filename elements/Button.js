import styled from 'react-emotion'
import { 
  space, width, display, alignItems, justifyContent,
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, borderWidth, borderRadius, 
} from 'styled-system'

const Button = styled('button')(space, width, display, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, borderWidth, borderRadius, { 
  boxSizing: 'border-box', 
  overflow: 'visible',
  textTransform: 'none',
  fontFamily: 'inherit',
})

Button.defaultProps = {
  m: 0
}

export default Button
