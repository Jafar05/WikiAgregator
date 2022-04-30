import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Button, Toolbar } from '@mui/material';


const Navbar = () => {




    return (
        <AppBar>
            <Toolbar
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
            >
                <Button color="inherit" style={{backgroundColor: "green"}} sx={{ mr: 2 }} component={Link} to="/thunk">THUNK</Button>
                <Button color="inherit" style={{backgroundColor: "green"}} sx={{ mr: 2 }} component={Link} to="/saga">SAGA</Button>
                <Button color="inherit" style={{backgroundColor: "green"}} sx={{ mr: 2 }} component={Link} to="/todo">Todo</Button>
                {/*<Button color="inherit" style={{backgroundColor: "green"}} sx={{ mr: 2 }} component={Link} to="/">Main</Button>*/}

            </Toolbar>




</AppBar>
    );
};

export default Navbar;
