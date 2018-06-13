import glamorous from 'glamorous'
import { 
  space, width, maxWidth, display, alignItems, justifyContent, 
  fontSize, textAlign, lineHeight,
  color, borders, borderColor, borderWidth, borderRadius 
} from 'styled-system'

const Article = glamorous.div(space, width, maxWidth, display, alignItems, justifyContent, fontSize, textAlign, lineHeight, color, borders, borderColor, borderWidth, borderRadius, {
  boxSizing: 'border-box'
})

Article.defaultProps = {
  w: 1
}

export default Article
