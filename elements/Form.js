import styled from 'react-emotion'
import { 
  space, display, width, 
  fontSize, 
  color, borders, borderColor, borderRadius 
} from 'styled-system'

const Form = styled('form')(space, display, width, fontSize, color, borders, borderColor, borderRadius, {
  boxSizing: 'border-box'
})

Form.defaultProps = {

}

export default Form
