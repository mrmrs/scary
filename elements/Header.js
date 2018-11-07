import styled from 'react-emotion'
import { 
  space, display, width, 
  fontSize, fontWeight, textAlign, 
  color, borders, borderColor, borderRadius 
} from 'styled-system'

const Header = styled('header')(space, display, width, fontSize, color, borders, borderColor, borderRadius, {
  boxSizing: 'border-box'
})

Header.defaultProps = {

}

export default Header
