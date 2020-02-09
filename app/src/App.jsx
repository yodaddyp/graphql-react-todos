import React from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Typography  from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Todos from './containers/Todos';
import NewTodo from './containers/NewTodo';

const headers = {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'mysecret',
};

const API_ENDPOINT = `http://localhost:8080/v1/graphql`;

const client = new ApolloClient({
    headers,
    uri: API_ENDPOINT
});

client.query({
    query: gql`query MyQuery {
  todos {
    id
    text
    due
    completed
  }
}
`
}).then(res => console.log(res));

export default () => (
    <ApolloProvider client={client}>
        <Container maxWidth="sm">
            <Typography variant="h1" component="h1">
                Todos
            </Typography>
            <Paper>
                <Todos />
                <NewTodo />
            </Paper>
        </Container>
    </ApolloProvider>
);
