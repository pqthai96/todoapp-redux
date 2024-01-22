const initState =
  [
    {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
    {id: 2, name: 'Learn Yoga 1', completed: true, priority: 'Low'},
    {id: 3, name: 'Learn Yoga 2', completed: false, priority: 'High'}
  ];


const
  todoListReducer = (state: typeof initState = initState, action: any) => {

    switch (action.type) {
      case 'todoList/addTodo':
        return [
          ...state,
          action.payload
        ]
      case 'todoList/changeStatus': {
        const newState = [...state];

        newState[newState.findIndex(todo => todo.id === action.payload.id)].completed = action.payload.status;

        return newState;
      }
      default:
        return state;
    }
  }

export default todoListReducer;