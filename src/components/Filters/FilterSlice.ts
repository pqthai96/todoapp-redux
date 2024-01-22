const initState = {
  search: '',
  status: 'all',
  priority: []
}

const filterReducer = (state: typeof initState = initState, action: any) => {

  switch (action.type) {
    case 'filters/searchFilterChange':
      return {
        ...state,
        search: action.payload
      }
    case 'filters/statusFilterChange':
      return {
        ...state,
        status: action.payload
      }
    case 'filters/priorityFilterChange':
      return {
        ...state,
        priority: action.payload
      }
    default:
      return state;
  }
}

export default filterReducer;