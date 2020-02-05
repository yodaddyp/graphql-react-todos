import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

export default function Add ({ onClick }) {
    const theme = useTheme();

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    return (
        <Zoom
            in
            timeout={transitionDuration}
            unmountOnExit
        >
            <Fab aria-label="Add new todo" color="primary" onClick={onClick}>
                <AddIcon />
            </Fab>
        </Zoom>
    )
}