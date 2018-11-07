import styled from 'react-emotion'
import { space, display, width, alignItems, justifyContent, wrap, fontSize, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Nav = styled('nav')(space, display, width, alignItems, justifyContent, wrap, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Nav.defaultProps = {

}

export default Nav
