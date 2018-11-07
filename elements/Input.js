import styled from 'react-emotion'
import { space, display, width, fontSize, borders, borderColor, borderWidth, borderRadius, color, hover, active, focus } from 'styled-system'

const Input = styled('input')(space, display, width, fontSize, color, borders, borderColor, borderWidth, borderRadius, hover, active, focus, {
  overflow: 'visible',
})

Input.defaultProps = {
  type: 'text'
}

export default Input
