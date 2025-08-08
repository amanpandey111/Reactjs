import React, { useState } from "react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SnackBar1 = () => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    const onOpenClickHandler = () => {
        setShowSnackbar(true);
    };

    const onCloseClickHandler = (event) => {
        setShowSnackbar(false);
    };

    const action = (
        <>
            <Button onClick={onCloseClickHandler}>
                Archived
            </Button>
            <IconButton
                size="small"
                color="inherit"
                onClick={onCloseClickHandler}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <div>
            <h1 style={{ color: 'green' }}>
                GeeksforGeeks
            </h1>
            <h2>React MUI Snackbar Feedback</h2>
            <Button onClick={onOpenClickHandler}>
                Open simple snackbar
            </Button>
            <Snackbar
                open={showSnackbar}
                autoHideDuration={2000}
                onClose={onCloseClickHandler}
                message="GeeksforGeeks"
                action={action}
            />
        </div>
    );
};

export default SnackBar1;