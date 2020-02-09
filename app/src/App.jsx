import React from 'react';

import ApolloClient from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

import Typography  from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Todos from './containers/Todos';
import NewTodo from './containers/NewTodo';

const API_ENDPOINT = `http://localhost:8080/v1/graphql`;

const headers = {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'mysecret',
};

const httpLink = new HttpLink({
    headers,
    uri: API_ENDPOINT
});

const webSocketLink = new WebSocketLink({
    options: {
        lazy: true,
        reconnect: true,
        connectionParams: () => ({ headers })
    },
    uri: "ws://localhost:8080/v1/graphql"
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        console.log(kind, operation);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    webSocketLink,
    httpLink,
);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

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
