import styled from 'react-emotion'
import { color } from 'styled-system'

const Path = styled('path')(color, {
  fill: 'currentColor'
})

Path.defaultProps = {

}

export default Path
