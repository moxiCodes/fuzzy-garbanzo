import { Container, Typography } from '@mui/material'
import AgricultureRoundedIcon from '@mui/icons-material/AgricultureRounded'
const HeadingWithTagline = () => {
  return (
    <Container disableGutters>
      {' '}
      <AgricultureRoundedIcon />
      <Typography component="h2" variant="h2">
        Farmer's Friend
      </Typography>
      <Typography variant="overline">
        Stay on top of your flock, track your stock.
      </Typography>
    </Container>
  )
}

export default HeadingWithTagline
