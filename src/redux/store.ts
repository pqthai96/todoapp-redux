import {createStore} from "redux";
import rootReducer from "./reducer";
import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/FilterSlice";
import todoListSlice from "../components/TodoList/TodoListSlice";

// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer
  }
})

export default store;