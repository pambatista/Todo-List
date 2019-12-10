export const addTodo = (text) => ({ type: 'ADD_TODO', playload: { text } });

export const removeTodo = (id) => ({ type: 'REMOVE_TODO', playload: { id } });
