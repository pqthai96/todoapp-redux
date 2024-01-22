import {createSlice} from "@reduxjs/toolkit";

export default createSlice({
  name: 'todoList',
  initialState: [
    {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
    {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
    {id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low'}
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    changeStatus: (state, action) => {
      state[state.findIndex(todo => todo.id === action.payload.id)].completed = action.payload.status;
    }
  }
})