import { Checkbox, TableBody, TableCell, TableRow } from '@mui/material'

const tableRowSx = {
  '&:nth-of-type(even)': {
    backgroundColor: '#EEEEEE',
  },
}
const tableImgStyles = { width: '50px', borderRadius: '10px' }

const StyledTableBody = ({ rows }: { rows: Record<any, any>[] }) => {
  return (
    <TableBody>
      {rows.map((row: Record<any, any>) => (
        <TableRow key={row.name} sx={tableRowSx}>
          <TableCell align="left">
            <img
              alt={row.animalType}
              src={`./${process.env.PUBLIC_URL}/animals/${row.animalType}.png`}
              style={tableImgStyles}
            />
          </TableCell>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="left">{row.age}</TableCell>
          <TableCell align="left">{row.gender}</TableCell>
          <TableCell align="left">{row.animalType}</TableCell>
          <TableCell align="left">{row.worth}</TableCell>
          <TableCell align="left">
            <Checkbox checked={row.isAlive} disabled aria-disabled />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default StyledTableBody
