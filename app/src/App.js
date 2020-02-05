import React from 'react';
import Typography  from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

export default () => (
    <Container maxWidth="sm">
        <Typography variant="h1" component="h1">
            Todos
        </Typography>
        <Paper>
            <Todos />
            <NewTodo />
        </Paper>
    </Container>
);
