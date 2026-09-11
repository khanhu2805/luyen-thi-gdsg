'use client';

import React from 'react';
import {
    Alert,
    AlertColor,
    Snackbar,
} from '@mui/material';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    phone: string;
    message?: string;
    severity?: AlertColor;
};

const fontBody = "'Nunito', sans-serif";

const SnackBar = ({
    open,
    setOpen,
    phone,
    message,
    severity = 'success',
}: Props) => {
    const handleClose = (
        _event?: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') return;

        setOpen(false);
    };

    const displayMessage =
        severity === 'success'
            ? `Đăng ký thành công! Đội ngũ tư vấn sẽ liên hệ với bạn qua số điện thoại ${phone} trong thời gian sớm nhất để hướng dẫn nhận ưu đãi!`
            : message;

    return (
        <Snackbar
            open={open}
            autoHideDuration={severity === 'error' ? 8000 : 6000}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            sx={{
                mt: 2,
                width: {
                    xs: 'calc(100% - 24px)',
                    sm: 'auto',
                },
            }}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{
                    width: '100%',
                    minWidth: { sm: 420 },
                    maxWidth: 650,
                    borderRadius: 3,
                    fontFamily: fontBody,
                    fontWeight: 700,
                    boxShadow: '0 10px 30px rgba(0,0,0,.18)',
                }}
            >
                {displayMessage}
            </Alert>
        </Snackbar>
    );
};

export default SnackBar;