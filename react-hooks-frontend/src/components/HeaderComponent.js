import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="h6" component="div">
                            Student Management System
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default HeaderComponent;
