import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface Task {
  id: number
  name: string
  completed: boolean
}

interface TodosState {
  tasks: Task[]
  filter: 'all' | 'completed' | 'current'
  allFilters: string[]
  errorMsg: string | null
}

const initialState: TodosState = {
  tasks: [],
  filter: 'all',
  allFilters: ['all', 'completed', 'current'],
  errorMsg: null,
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.tasks.push({
        id: state.tasks.length + 1,
        name: action.payload,
        completed: false,
      })
    },
    toggleTask(state, action: PayloadAction<number>) {
      const task = state.tasks.find(task => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    filterTasks(state, action: PayloadAction<'all' | 'completed' | 'current'>) {
      state.filter = action.payload
    },
    setErrorMsg(state, action: PayloadAction<string | null>) {
      state.errorMsg = action.payload
    },

  },
})

export const { addTask, toggleTask, filterTasks,setErrorMsg } = todosSlice.actions

export default todosSlice.reducer
