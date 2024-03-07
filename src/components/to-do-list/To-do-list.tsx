import React, { useState, useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../../store/store"
import {
  addTask,
  toggleTask,
  filterTasks,
  setErrorMsg,
} from "../../store/slices/todos/todos"
import { selectFilteredTasks } from "../../store/slices/todos/selectors/selectFilteredTasks"
import { Box, Button, List, TextField, Typography } from "@mui/material"
import TaskItem from "../taskItem/TaskItem"
import styles from "./todolist.module.css"
import DecorationLine from "../decorationLine/DecorationLine.tsx"
import FilterButtons from "../filterButtons/FilterButtons.tsx"
import ErrorMsg from "../errorMsg/ErrorMsg.tsx"

const ToDoList: React.FC = () => {
  const { tasks, allFilters, filter } = useSelector(
    (state: RootState) => state.todos
  )
  const filteredTasks = useSelector(selectFilteredTasks)
  const errorMsg = useSelector((state: RootState) => state.todos.errorMsg)
  const dispatch: AppDispatch = useDispatch()
  const [inputValue, setInputValue] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setErrorMsg(null))
    setInputValue(e.target.value)
  }

  const handleAddTask = (): void => {
    if (inputValue.trim() !== "" && inputValue.trim().length > 2) {
      dispatch(addTask(inputValue))
      setInputValue("")
    } else {
      dispatch(setErrorMsg("Please, type more than 2 symbols"))
    }
  }

  const handleToggleTask = (id: number): void => {
    dispatch(toggleTask(id))
  }

  const handleFilter = (filterType: "all" | "completed" | "current"): void => {
    dispatch(filterTasks(filterType))
  }

  const filteredTasksMemo = useMemo(() => filteredTasks, [filteredTasks])

  return (
    <Box className={styles.container}>
      <Typography component="h1" variant="h1" id={styles.heroTitle}>
        To Do List
      </Typography>
      <FilterButtons
        allFilters={allFilters}
        filter={filter}
        handleFilter={handleFilter}
      />
      <TextField
        error={errorMsg === null ? false : true}
        label="Add to do"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask()
          }
        }}
      />
      <ErrorMsg errorMsg={errorMsg} />
      <Button
        disabled={errorMsg ? true : false}
        sx={{ padding: 2 }}
        variant="contained"
        onClick={handleAddTask}
      >
        Add Task
      </Button>
      <List id={styles.list}>
        {filteredTasksMemo.map((task) => 
          <TaskItem key={task.id} task={task} toggleTask={handleToggleTask} />
        )}
      </List>
      <Box id={styles.counterContainer}>
        <Box>
          <Typography>Completed Tasks</Typography>
          <Typography component="span">
            {tasks.filter((task) => task.completed).length}
          </Typography>
        </Box>
        <DecorationLine width="1px" height="auto" background="black" />
        <Box>
          <Typography>Uncompleted Tasks</Typography>
          <Typography component="span">
            {tasks.filter((task) => !task.completed).length}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ToDoList
