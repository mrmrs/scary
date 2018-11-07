import styled from 'react-emotion'
import { space, display, width, fontSize, color, borders, borderColor, borderRadius } from 'styled-system'

const Main = styled('div')(space, display, width, fontSize, color, borders, borderColor, borderRadius, {
  boxSizing: 'border-box'
})

Main.defaultProps = {
  w: 1
}

export default Main
