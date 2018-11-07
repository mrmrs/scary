import styled from 'react-emotion'
import { 
  space, width, maxWidth, display, alignItems, justifyContent, 
  fontSize, lineHeight, textAlign, 
  color, borders, borderColor, borderRadius 
} from 'styled-system'

const Div = styled('div')(space, width, maxWidth, display, alignItems, justifyContent, fontSize, lineHeight, textAlign, color, borders, borderColor, borderRadius, {
  boxSizing: 'border-box'
})

Div.defaultProps = {
  w: 1
}

export default Div
