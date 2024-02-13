import React from 'react';
import { Typography, Container } from '@mui/material';

const FooterComponent = () => {
    return (
        <footer style={{marginTop:"5%"}}>
            <Container maxWidth="sm">
                <Typography variant="body2" color="textSecondary" align="center">
                    All Rights Reserved 2024 @Alperen Akgün
                </Typography>
            </Container>
        </footer>
    );
}

export default FooterComponent;
