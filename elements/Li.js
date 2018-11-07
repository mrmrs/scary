import styled from 'react-emotion'
import { space, width, fontSize, lineHeight, color, borders, borderColor,  } from 'styled-system'

const Li = styled('li')(space, width, fontSize, lineHeight, color, borders, borderColor, {
  boxSizing: 'border-box'
})

Li.defaultProps = {
  pl: 0
}

export default Li
