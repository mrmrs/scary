import styled from 'react-emotion'
import { 
  space, display, width, 
  fontSize, 
  color, borders, borderColor, borderRadius 
} from 'styled-system'

const Fieldset = styled('fieldset')(space, display, width, fontSize, color, borders, borderColor, borderRadius, {
  boxSizing: 'border-box'
})

Fieldset.defaultProps = {

}

export default Fieldset
