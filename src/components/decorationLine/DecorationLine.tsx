import { Box } from "@mui/material"

interface Props {
  width: string
  height: string
  background: string
}

const DecorationLine: React.FC<Props> = ({ width, height, background }) => {
  return <Box sx={{ width, height, background }} />
}

export default DecorationLine
