import {Todo} from "../types/Todo";

export const todoRemainingSelector = (state: any) => {

  const todosRemaining = state.todoList.filter((todo: Todo) => {
    let priorityFilter = true;
    if (state.filters.priority.length > 0) {
      priorityFilter = state.filters.priority.some((pri: string) => pri === todo.priority);
    }

    if (state.filters.status === "All") {
      return todo.name.toLowerCase().includes(state.filters.search.toLowerCase()) && priorityFilter;
    }

    return todo.name.toLowerCase().includes(state.filters.search.toLowerCase()) && (state.filters.status === "Completed" ? todo.completed : !todo.completed) && priorityFilter;
  });

  return todosRemaining;
}

