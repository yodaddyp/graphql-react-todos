import React from 'react';
import List from '@material-ui/core/List';
import Todo from './../components/Todo';

export default function Todos() {
    return (
        <List>
            <Todo id="123" completed="31st Jan" due="1st Feb" text="To your homework" />
        </List>
    )
}