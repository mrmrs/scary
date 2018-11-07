import styled from 'react-emotion'
import { space, width, display, fontSize, color, borders, borderColor, borderRadius } from 'styled-system'

const Section = styled('div')(space, width, display, fontSize, color, borders, borderColor, borderRadius, {
  boxSizing: 'border-box'
})

Section.defaultProps = {
  w: 1
}

export default Section
