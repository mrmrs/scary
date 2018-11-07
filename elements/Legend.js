import styled from 'react-emotion'
import { space, display, width, fontSize, color, borders, borderColor, borderRadius } from 'styled-system'

const Legend = styled('legend')(space, display, width, fontSize, color, borders, borderColor, borderRadius, {
  boxSizing: 'border-box'
})

Legend.defaultProps = {

}

export default Legend
