import filterReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodoSlice";
import {combineReducers} from "redux";

// const rootReducer = (state: any = {}, action: any) => {
//
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action)
//   }
// }

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer
})

export default rootReducer;