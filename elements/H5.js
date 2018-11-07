import styled from 'react-emotion'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, 
} from 'styled-system'

const H5 = styled('h5')(space, width, display, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, {
  boxSizing: 'border-box'
})

H5.defaultProps = {
  mt: 0
}

export default H5
