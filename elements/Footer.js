import glamorous from 'glamorous'
import { 
  space, display, width, 
  fontSize, lineHeight, textAlign, fontWeight, 
  color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Footer = glamorous.footer(space, display, width, fontSize, lineHeight, texztAlign, fontWeight, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Footer.defaultProps = {

}

export default Footer
