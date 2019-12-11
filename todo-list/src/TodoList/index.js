import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Form, List, Item } from './styles'

import * as todosActions from '../store/actions/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  addNewTask = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({
      inputText: '',
    });
  };

  render() {
    const { todos } = this.props;

    return (
      <Container>
        <h1> TodoList </h1>
        <Form onSubmit={this.addNewTask}>
          <input
            type="text"
            placeholder = "Digite sua tarefa"
            value={this.state.inputText}
            onChange={event => this.setState({ inputText: event.target.value })}
          />
          <button type="submit">
            Adicionar
        </button>
        </Form>

        <List>
          {todos.map(todo => (
            <Item onClick={()=> this.props.completedTodo(todo) } key={ todo.id } completed={todo.completed}>
              <span>{ todo.text }</span>
              <button onClick={ () => this.props.removeTodo( todo.id) }>Excluir</button>
            </Item>
          ))}
        </List>
      </Container>
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
