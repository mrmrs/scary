import styled from 'react-emotion'
import { 
  space, 
  fontSize, fontWeight, lineHeight, 
  color, 
  hover, active, focus 
} from 'styled-system'

const Abbr = styled('abbr')(space, fontSize, fontWeight, color, hover, active, focus, {
  '[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
  }
})

Abbr.defaultProps = {
  
}

export default Abbr
