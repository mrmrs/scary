import glamorous from 'glamorous'
import { space, width, height, color, borders, borderColor, borderWidth } from 'styled-system'

const Hr = glamorous.hr(space, width, height, color, borders, borderColor, borderWidth, {
  boxSizing: 'content-box', 
  overflow: 'visible'
})

Hr.defaultProps = {
  height: 0
}

export default Hr
