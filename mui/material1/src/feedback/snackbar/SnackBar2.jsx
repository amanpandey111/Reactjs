import React, { useState } from "react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

const SnackBar2 = () => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    const onOpenClickHandler = () => {
        setShowSnackbar(true);
    };

    const onCloseClickHandler = (event) => {
        setShowSnackbar(false);
    };

    const CustomSnackbar = (props) => (
        <Snackbar
            autoHideDuration={2000}
            open={showSnackbar}
            onClose={onCloseClickHandler}
            anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
            children={props.children}
        >
        </Snackbar>
    );

    return (
        <div>
            <h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
            <h2>React MUI Snackbar Feedback</h2>
            <Button onClick={onOpenClickHandler}>
                Click to Open Snackbar
            </Button>
            <CustomSnackbar>
                <Alert severity="success">
                    This is a success alert — check it out!
                </Alert>
            </CustomSnackbar>
        </div>
    );
};

export default SnackBar2;