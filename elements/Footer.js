import styled from 'react-emotion'
import { 
  space, display, width, 
  fontSize, lineHeight, textAlign, fontWeight, 
  color, borders, borderColor, borderRadius } from 'styled-system'

const Footer = styled('footer')(space, display, width, fontSize, lineHeight, texztAlign, fontWeight, color, borders, borderColor, borderRadius, {
  boxSizing: 'border-box'
})

Footer.defaultProps = {

}

export default Footer
