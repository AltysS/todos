import { createSelector} from '@reduxjs/toolkit'
import { RootState } from '../../../store'


export const selectFilteredTasks = createSelector(
  (state: RootState) => state.todos.tasks,
  (state: RootState) => state.todos.filter,
  (tasks, filter) => {
    console.log('filter')
    if (filter === 'all') return tasks
    if (filter === 'completed') return tasks.filter(task => task.completed)
    if (filter === 'current') return tasks.filter(task => !task.completed)
    return tasks
  }
)