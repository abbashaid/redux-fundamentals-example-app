const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
      status: 'All',
      colors: []
    }
  }
  
  function nextToDoId(todos){
    maxId = todos.reduce((maxId, todos) => Math.max(maxId))
  }
  
  export default function appReducer(state = initialState, action){
    switch(action.type){
      case 'todos/todoAdded':
  
      default:
        return state
    }
  }