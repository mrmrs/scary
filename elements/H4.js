import styled from 'react-emotion'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, 
} from 'styled-system'

const H4 = styled('h4')(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, {
  boxSizing: 'border-box'
})

H4.defaultProps = {
  mt: 0
}

export default H4
