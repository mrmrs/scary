import glamorous from 'glamorous'
import { 
  space, 
  fontSize, fontWeight, lineHeight, 
  color, 
  hover, active, focus 
} from 'styled-system'

const Abbr = glamorous.abbr(space, fontSize, fontWeight, color, hover, active, focus, {
  '[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
  }
})

Abbr.defaultProps = {
  
}

export default Abbr
