import styled from 'react-emotion'
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  borders,
  borderColor,
  borderRadius,
  color,
} from 'styled-system'

const InputSearch = styled('input')(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {boxSizing: 'border-box'},
)

InputSearch.defaultProps = {
  type: 'search',
}

export default InputSearch
