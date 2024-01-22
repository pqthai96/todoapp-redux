import {Todo} from "../types/Todo";

export const addTodo = (data: Todo) => {
  return {
    type: 'todoList/addTodo',
    payload: data
  }
}

export const changeStatus = (id: string, status: boolean) => {
  return {
    type: 'todoList/changeStatus',
    payload: {
      id,
      status
    }
  }
}

export const searchFilterChange = (searchText: string) => {
  return {
    type: 'filters/searchFilterChange',
    payload: searchText
  }
}

export const statusFilterChange = (status: string) => {
  return {
    type: 'filters/statusFilterChange',
    payload: status
  }
}

export const priorityFilterChange = (priorities: string[]) => {
  return {
    type: 'filters/priorityFilterChange',
    payload: priorities
  }
}