import styled from 'react-emotion'
import { space, width, display, fontSize, color, borders, borderColor, borderRadius } from 'styled-system'

const Ol = styled('ol')(space, width, display, fontSize, color, borders, borderColor, borderRadius, {
  boxSizing: 'border-box'
})

Ol.defaultProps = {

}

export default Ol
