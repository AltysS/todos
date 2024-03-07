import { Box, Typography } from "@mui/material"
import styles from "./errorMsg.module.css"

interface Props {
  errorMsg: string | null
}

const ErrorMsg: React.FC<Props> = ({ errorMsg }) => {
  return (
    <Box className={styles.container}>
      {errorMsg && <Typography id={styles.message}>{errorMsg}</Typography>}
    </Box>
  )
}

export default ErrorMsg
