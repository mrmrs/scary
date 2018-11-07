import styled from 'react-emotion'
import { space, width, display, fontSize, color, borders, borderColor, borderWidth, borderRadius } from 'styled-system'

const Ol = glamorous.ol(space, width, display, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Ol.defaultProps = {

}

export default Ol
