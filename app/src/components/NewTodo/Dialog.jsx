import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function DialogForm({ open, onClose, onSave }) {
    const [due, setDueDate] = React.useState(new Date());
    const [text, setTodoText] = React.useState();

    // Crude way of preventing submitting without required fields.
    // Could really do with some proper error validation.
    const canSave = !!(text && due);

    const restoreDefaults = () => {
        setTodoText(null);
        setDueDate(new Date());
    };

    const handleDateChange = date => {
        setDueDate(date);
    };

    const handleTodoChange = e => {
        const { value } = e.currentTarget;
        setTodoText(value);
    };

    const handleSave = (e) => {
        e.preventDefault();
        onSave({ due, text });
        restoreDefaults();
    };

    const handleClose = (e) => {
        restoreDefaults();
        onClose(e);
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form noValidate autoComplete="off" onSubmit={handleSave}>
                <DialogTitle id="form-dialog-title">Add New Todo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a new todo along with a due date.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="todo"
                        label="Todo"
                        type="text"
                        fullWidth
                        onChange={handleTodoChange}
                        required
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Due date"
                            format="dd/MM/yyyy"
                            value={due}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </DialogContent>
                <DialogActions>
                    <Button disabled={!canSave} type="submit" color="primary">
                        Save
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
