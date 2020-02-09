import React from 'react';
import { gql } from 'apollo-boost';
import { Subscription } from '@apollo/react-components';
import List from '@material-ui/core/List';
import Todo from './Todo';

const FETCH_TODOS = gql`
subscription fetchTodos {
  todos(order_by: {createdAt: desc}) {
    id
    text
    due
    completed
  }
}
`;

export default function Todos() {
    return (
        <List>
            <Subscription subscription={FETCH_TODOS}>
                {({ data, loading, error }) => {
                    if (loading) return null; // Would be nicer to add some loading feedback here.

                    if (error) return <p>There has been an error making a subscription</p>;

                    const { todos } = data;
                    return todos.map(todo => (
                        <Todo key={todo.id} {...todo} />
                    ))
                }}
            </Subscription>
        </List>
    )
}