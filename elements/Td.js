import styled from 'react-emotion'
import { space, width, fontSize, fontWeight, textAlign, color, borders } from 'styled-system'

const verticalAlign = props => ({
  verticalAlign: props.verticalAlign? props.verticalAlign : 'middle'
})

const Td = styled('td')(space, width, fontSize, fontWeight, textAlign, color, borders, verticalAlign, {

})

Td.defaultProps = {

}

export default Td
