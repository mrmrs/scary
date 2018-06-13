import glamorous from 'glamorous'
import { 
  space, display, width, maxWidth, 
  color, borders, borderColor, borderWidth, borderRadius 
} from 'styled-system'

const Img = glamorous.img(space, display, width, maxWidth, color, borders, borderColor, borderWidth, borderRadius, {
  borderStyle: 'none'
})

Img.defaultProps = {
  w: 1,
  display: 'block',
  maxWidth: '100%'
}

export default Img
