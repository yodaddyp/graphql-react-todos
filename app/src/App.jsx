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

const API_ENDPOINT = `${process.env.HASURA_HOST}:${process.env.HASURA_PORT}/v1/graphql`;

const headers = {
    'content-type': 'application/json',
    // It is clearly not a very good idea to expose the admin secret on the client.
    // Before considering a production/staging release proper authentication needs to be setup protecting the GraphQL
    // endpoints and the database.
    // Hasura supports JWT authentication and the recommended approach is to use Auth0 or Firebase.
    // Local authentication can also be setup.
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
};

const httpLink = new HttpLink({
    headers,
    uri: `http://${API_ENDPOINT}`
});

const webSocketLink = new WebSocketLink({
    options: {
        lazy: true,
        reconnect: true,
        connectionParams: () => ({ headers })
    },
    uri: `ws://${API_ENDPOINT}`
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
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
