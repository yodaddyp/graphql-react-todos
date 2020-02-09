import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from './NewTodo/Dialog';
import Add from './NewTodo/Add';

const useStyles = makeStyles(theme => ({
    button: {
        bottom: theme.spacing(1),
        position: 'absolute',
        right: theme.spacing(1)
    },
    root: {
        position: 'relative'
    },
}));

export default function NewTodo ({ onSave }) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleAdd = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (payload) => {
        // Could probably do with a loading spinner/progress bar here to highlight a save is taking place.
        // Save
        onSave(payload);
        // Then close the form.
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <div className={classes.button}>
                {/*
                I've not had time to dig into this but I cannot apply this classname on the component directly.
                Hence the wrapping <div/>.
                */}
                <Add onClick={handleAdd} />
            </div>
            <Dialog open={open} onClose={handleClose} onSave={handleSave} />
        </div>
    )
};