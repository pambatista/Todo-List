export const addTodo = (text) => ({ type: 'ADD_TODO', playload: { text } });

export const removeTodo = (id) => ({ type: 'REMOVE_TODO', playload: { id } });

export const completedTodo = (todo) => ({ type: 'COMPLETED_TASK' , playload: { id: todo.id, text: todo.text, completed: !todo.completed } });
