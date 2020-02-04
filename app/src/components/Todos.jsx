import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Todo from './Todo';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function Todos() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <Todo id="123" completed="31st Jan" due="1st Feb" text="To your homework" />
        </List>
    )
}