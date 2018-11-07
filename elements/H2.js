import styled from 'react-emotion'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, 
} from 'styled-system'

const H2 = styled('h2')(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, {
  boxSizing: 'border-box'
})

H2.defaultProps = {
  mt: 0
}

export default H2
