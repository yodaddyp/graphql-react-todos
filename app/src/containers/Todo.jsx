import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from '@apollo/react-components';
import Todo from '../components/Todo';

const MARK_AS_DONE = gql`
mutation markAsDone($id: uuid!, $date: date) {
  update_todos(where: {id: {_eq: $id}}, _set: {completed: $date}) {
    returning {
      completed
      due
      id
      text
    }
  }
}
`;

export default props => (
    <Mutation mutation={MARK_AS_DONE}>
        {markAsDone => (
            <Todo
                {...props}
                onCheck={() => markAsDone({
                    variables: {
                        id: props.id,
                        date: props.completed ? null : new Date()
                    }
                })}
            />
        )}
    </Mutation>
)