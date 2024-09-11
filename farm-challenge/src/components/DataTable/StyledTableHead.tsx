import { TableCell, TableHead, TableRow, Typography } from '@mui/material'

const StyledTableHead = ({ columns }: { columns: string[] }) => {
  return (
    <TableHead sx={{ backgroundColor: '#EEEEEE' }}>
      <TableRow>
        {columns.map((heading: string) => (
          <TableCell key={heading} align="left">
            <Typography variant="overline">{heading}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default StyledTableHead
