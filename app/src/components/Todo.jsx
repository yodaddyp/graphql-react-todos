import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function Todo({ completed, due, id, onCheck, text }) {
    const checked = !!completed;
    const labelId = `label-${id}`;
    const primary = text;
    const secondary = checked
      ? `Completed on ${completed}`
      : `Due on ${due}`;

    return (
        <ListItem role={undefined} dense button onClick={onCheck}>
            <ListItemIcon>
                <Checkbox
                    checked={checked}
                    edge="start"
                    inputProps={{ 'aria-labelledby': labelId }}
                    tabIndex={-1}
                />
            </ListItemIcon>
            <ListItemText
                id={labelId}
                primary={primary}
                secondary={secondary}
            />
        </ListItem>
    )
}