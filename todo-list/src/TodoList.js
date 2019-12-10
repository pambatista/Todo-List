import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todosActions from './store/actions/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  addNewTask = () => {
    console.log(this.state.inputText)
    this.props.addTodo(this.state.inputText);
    this.setState({
      inputText: '',
    });
  };

  render() {
    const { todos } = this.props;
    return (
      <Fragment>
        <input
          type="text"
          value={this.state.inputText}
          onChange={event => this.setState({ inputText: event.target.value })}
        />
        <button type="button" onClick={ () => this.addNewTask() }>
          Adicionar
        </button>
        <ul>
          {todos.map(todo => (
            <li key={ todo.id }>{ todo.text } <button onClick={ () => this.props.removeTodo( todo.id) }>Excluir</button></li>
          ))}
        </ul>
      </Fragment>
    );
  }
};

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text:PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispachToProps = dispach => bindActionCreators(todosActions, dispach);

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
