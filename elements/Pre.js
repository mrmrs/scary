import styled from 'react-emotion'
import { space, display, width, fontSize, color } from 'styled-system'

const Pre = styled('pre')(space, display, width, fontSize, color, {
  boxSizing: 'border-box',
  fontFamily: 'monospace, monospace',
})

Pre.defaultProps = {
  fontSize: 2
}

export default Pre
