const INITIAL_STATE = [
  {
    id: 1,
    text: "Estudar React",
  },
  {
    id: 2,
    text: "Tomar café",
  }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.playload.text } ];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.playload.id);
    default:
      return state;
  }
}
