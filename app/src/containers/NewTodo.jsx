import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from '@apollo/react-components';
import NewTodo from '../components/NewTodo';

const ADD_TODO = gql`
mutation addTodo($text: String!, $due: date!) {
  insert_todos(objects: {due: $due, text: $text}) {
    returning {
      id
      due
      text
    }
  }
}`;

export default () => (
    <Mutation mutation={ADD_TODO}>
        {addTodo => (
            <NewTodo onSave={variables => addTodo({ variables })} />
        )}
    </Mutation>
);
