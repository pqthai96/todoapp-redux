import filterSlice from "../components/Filters/FilterSlice";
import todoListSlice from "../components/TodoList/TodoListSlice";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  filters: filterSlice,
  todoList: todoListSlice
})

export default rootReducer;