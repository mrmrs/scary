import styled from 'react-emotion'
import { 
  space, width, display, 
  fontSize, lineHeight, textAlign,
  color, borders, borderColor, borderRadius 
} from 'styled-system'

const Aside = styled('aside')(space, width, display, fontSize, lineHeight, textAlign, color, borders, borderColor, borderRadius, {
  boxSizing: 'border-box'
})

Aside.defaultProps = {

}

export default Aside
