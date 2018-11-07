import styled from 'react-emotion'
import { space, display, width, fontSize, borders, borderColor, borderWidth, borderRadius, color } from 'styled-system'

const Input = styled('input')(space, display, width, fontSize, color, borders, borderColor, borderWidth, borderRadius, {
  overflow: 'visible',
})

Input.defaultProps = {
  type: 'text'
}

export default Input
