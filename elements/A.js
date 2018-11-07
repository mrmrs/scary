import styled from 'react-emotion'
import { 
  space, width, display, 
  flex, alignItems, justifyContent, 
  fontSize, fontWeight, textAlign, lineHeight, 
  color, borders, borderColor, borderWidth, borderRadius, 
} from 'styled-system'

const A = styled('a')(
  space, width, display, 
  fontSize, fontWeight, textAlign, lineHeight, 
  color, borders, borderColor, borderWidth, borderRadius, 
  {
    boxSizing: 'border-box'
})

A.defaultProps = {
  bg: 'transparent'
}

export default A
