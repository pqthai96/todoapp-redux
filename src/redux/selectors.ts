import {Todo} from "../types/Todo";
import {createSelector} from "@reduxjs/toolkit";

const searchTextSelector = (state: any) => state.filters.search;
export const filterStatusSelector = (state: any) => state.filters.status;
export const filterPrioritiesSelector = (state: any) => state.filters.priorities;
export const todoListSelector = (state: any) => state.todoList;

export const todoRemainingSelector = createSelector([searchTextSelector, filterStatusSelector, filterPrioritiesSelector, todoListSelector],  (searchText, status, priorities, todoList) => {

  console.log(todoList);
  return todoList.filter((todo: Todo) => {
    let priorityFilter = true;
    if (priorities.length > 0) {
      priorityFilter = priorities.some((priority: string) => priority === todo.priority);
    }

    if (status === "All") {
      return todo.name.toLowerCase().includes(searchText.toLowerCase()) && priorityFilter;
    }

    return todo.name.toLowerCase().includes(searchText.toLowerCase()) && (status === "Completed" ? todo.completed : !todo.completed) && priorityFilter;
  });
})