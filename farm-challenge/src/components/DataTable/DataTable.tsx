import { TableContainer, Table, Paper, Container } from '@mui/material'

import StyledTypography from './typography'
import StyledTableBody from './tableBody'
import StyledTableHead from './tableHead'
import { AnimalData } from '../../types/types'

const DataTable = ({ data }: { data: AnimalData[] }) => {
  return data?.length < 1 ? (
    <StyledTypography>NAE ANIMALS FOUND WITH THAT CRITERIA...</StyledTypography>
  ) : (
    <Container disableGutters>
      <StyledTypography>Your Animals</StyledTypography>
      <TableContainer component={Paper} variant="outlined">
        <Table sx={{ minWidth: 650 }}>
          <StyledTableHead />
          <StyledTableBody rows={data} />
        </Table>
      </TableContainer>
    </Container>
  )
}
export default DataTable
