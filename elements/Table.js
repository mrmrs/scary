import styled from 'react-emotion'
import { space, width, fontSize, color } from 'styled-system'

// Allow tableLayout to be set to fixed
// Ex: <Table layout='fixed'></Table>

const layout = props => ({
  tableLayout: props.layout? props.layout : 'default'
})

const Table = styled('table')(space, width, fontSize, color, layout, {
  borderCollapse: 'collapse',
  cellSpacing: 0,
  cellPadding: 0
})

Table.defaultProps = {
  w: 1
}

export default Table
