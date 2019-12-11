import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList'
import GlobalStyle from './styles/global';

function App() {
  return (

    <Provider store={store}>
        <GlobalStyle />
        <TodoList />
    </Provider>
  );
}

export default App;
