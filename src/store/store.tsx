import { configureStore } from "@reduxjs/toolkit"
import tasksSlice from "./slices/todos/todos"

export const store = configureStore({
  reducer: {
    todos: tasksSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
