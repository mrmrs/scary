import styled from 'react-emotion'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, 
} from 'styled-system'

const H6 = styled('h6')(space, display, width, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, {
  boxSizing: 'border-box'
})

H6.defaultProps = {
  mt: 0
}

export default H6
