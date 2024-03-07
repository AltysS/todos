import React from "react"
import { Box, Button } from "@mui/material"
import styles from "./filters.module.css"

interface Props {
  allFilters: string[]
  filter: "all" | "completed" | "current"
  handleFilter: (filter: "all" | "completed" | "current") => void
}

const FilterButtons: React.FC<Props> = ({
  allFilters,
  filter,
  handleFilter,
}) => {
  return (
    <Box className={styles.filterContainer}>
      {allFilters.map((elFilter: string) => {
        return (
          <Button
            key={elFilter}
            id={filter === elFilter ? styles.active : ""}
            onClick={() =>
              handleFilter(elFilter as "all" | "completed" | "current")
            }
          >
            {elFilter}
          </Button>
        )
      })}
    </Box>
  )
}

export default FilterButtons
