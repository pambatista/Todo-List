const INITIAL_STATE = [
  {
    id: 1,
    text: 'Estudar React',
    completed: false
  },
  {
    id: 2,
    text: 'Tomar café',
    completed: false
  },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.playload.text, completed: false }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.playload.id);
    case 'COMPLETED_TASK':
      return state.map((todo) => todo.id === action.playload.id ? action.playload : todo );
    default:
      return state;
  }
}
