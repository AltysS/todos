import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import DoneRoundedIcon from "@mui/icons-material/DoneRounded"
import ClearRoundedIcon from "@mui/icons-material/ClearRounded"

interface Task {
  id: number
  name: string
  completed: boolean
}

interface Props {
  task: Task
  toggleTask: (id: number) => void
}

const TaskItem: React.FC<Props> = ({ task, toggleTask }) => {
  const labelId = `checkbox-list-label-${task.id}`

  const handleToggle = (): void => {
    toggleTask(task.id)
  }

  return (
    <ListItem
      onClick={handleToggle}
      key={task.id}
      disablePadding
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          {task.completed ? 
            <DoneRoundedIcon htmlColor="green" />
            : 
            <ClearRoundedIcon htmlColor="red" />
          }
        </ListItemIcon>
        <ListItemText id={labelId} primary={task.name} />
      </ListItemButton>
    </ListItem>
  )
}

export default TaskItem
