import styled from 'react-emotion'
import { 
  space, display, width, 
  fontSize, fontWeight, textAlign, 
  color, borders, borderColor, borderWidth, borderRadius 
} from 'styled-system'

const Header = glamorous.header(space, display, width, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Header.defaultProps = {

}

export default Header
