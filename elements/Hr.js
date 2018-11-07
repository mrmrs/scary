import styled from 'react-emotion'
import { space, width, height, color, borders, borderColor, } from 'styled-system'

const Hr = styled('hr')(space, width, height, color, borders, borderColor, {
  boxSizing: 'content-box', 
  overflow: 'visible'
})

Hr.defaultProps = {
  height: 0
}

export default Hr
