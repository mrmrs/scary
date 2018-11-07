import styled from 'react-emotion'
import { space, width, fontSize, fontWeight, textAlign, color, borders, borderColor, borderWidth } from 'styled-system'

const Th = styled('td')(space, width, fontSize, fontWeight, textAlign, color, borders, borderColor, borderWidth, {

})

Th.defaultProps = {
  fontWeight: 'bold'
}

export default Th
