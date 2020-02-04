import React from 'react';
import Typography  from '@material-ui/core/Typography';
import Todos from './components/Todos';

export default () => (
    <>
        <Typography variant="h1" component="h1">
            Todos
        </Typography>
        <Todos />

    </>
);
