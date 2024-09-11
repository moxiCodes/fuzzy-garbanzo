import { TableContainer, Table, Paper, Container } from '@mui/material'

import StyledTypography from './StyledTypography'
import StyledTableBody from './StyledTableBody'
import StyledTableHead from './StyledTableHead'

const columns = [
  'HeadShot',
  'Name',
  'Age',
  'Pronouns',
  'Type',
  'Worth',
  'Angel Status',
]

const DataTable = ({ data }: { data: Record<any, any>[] | string }) => {
  return typeof data === 'string' || data.length === 0 ? (
    <StyledTypography>NAE ANIMALS FOUND WITH THAT CRITERIA...</StyledTypography>
  ) : (
    <Container disableGutters>
      <StyledTypography>Your Animals</StyledTypography>
      <TableContainer component={Paper} variant="outlined">
        <Table sx={{ minWidth: 650 }}>
          <StyledTableHead columns={columns} />
          <StyledTableBody rows={data} />
        </Table>
      </TableContainer>
    </Container>
  )
}
export default DataTable
