import styled from 'react-emotion'
import { 
  space, 
  fontSize, fontWeight, lineHeight, 
  color, 
} from 'styled-system'

const Abbr = styled('abbr')(space, fontSize, fontWeight, color, {
  '[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
  }
})

Abbr.defaultProps = {
  
}

export default Abbr
