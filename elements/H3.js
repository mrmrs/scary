import styled from 'react-emotion'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, 
} from 'styled-system'

const H3 = styled('h3')(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, {
  boxSizing: 'border-box'
})

H3.defaultProps = {
  mt: 0
}

export default H3
