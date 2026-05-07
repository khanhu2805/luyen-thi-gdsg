import React from 'react'
import { Snackbar, Alert } from '@mui/material';

type Props = {
    openSuccessPopup: boolean;
    setOpenSuccessPopup: (open: boolean) => void;
    phone: string;
}

const fontHeader = "'Montserrat', sans-serif";
const fontBody = "'Nunito', sans-serif";

const SnackBar = (props: Props) => {
    const handleClosePopup = () => {
        props.setOpenSuccessPopup(false);
    };
    return (
        <Snackbar open={props.openSuccessPopup} autoHideDuration={6000} onClose={handleClosePopup}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={handleClosePopup} severity="success" sx={{ width: '100%', borderRadius: 4, bgcolor: '#e8f5e9', color: '#2e7d32', fontFamily: fontBody, boxShadow: '0 10px 30px rgba(46, 125, 50, 0.3)' }}>
                Đăng ký thành công! Đội ngũ tư vấn sẽ liên hệ với bạn qua số điện thoại <strong>{props.phone}</strong> trong thời gian sớm nhất để hướng dẫn nhận ưu đãi!
            </Alert>
        </Snackbar>
    )
}

export default SnackBar