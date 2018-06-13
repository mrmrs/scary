import glamorous from 'glamorous'
import { 
  space, display, width, alignItems, justifyContent, 
  fontSize, fontWeight, lineHeight, 
  color, borders, borderColor, borderWidth,
} from 'styled-system'

const H5 = glamorous.h5(space, width, display, alignItems, justifyContent, fontSize, fontWeight, lineHeight, color, borders, borderColor, borderWidth, {
  boxSizing: 'border-box'
})

H5.defaultProps = {
  mt: 0
}

export default H5
