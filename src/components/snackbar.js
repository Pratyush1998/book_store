import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function MySnackbar() {
    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    console.log("Trying to open snackbar")
    return (
        <div>
            <Snackbar style={{ width: '800px' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert style={{ width: '800px' }} onClose={handleClose} severity="info">
                    Order Cancelled!
        </Alert>
            </Snackbar>
        </div>
    );
}
