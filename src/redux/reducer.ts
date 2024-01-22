import filterSlice from "../components/Filters/FilterSlice";
import todoListSlice from "../components/TodoList/TodoListSlice";
import {combineReducers} from "redux";

// const rootReducer = (state: any = {}, action: any) => {
//
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action)
//   }
// }

const rootReducer = combineReducers({
  filters: filterSlice,
  todoList: todoListSlice
})

export default rootReducer;