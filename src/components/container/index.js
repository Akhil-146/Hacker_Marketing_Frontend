import React from 'react';
import "./index.css";
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";

function Container(props) {
    return(
        <div className="container">
            <form className="formitems" noValidate autoComplete="off">
                <TextField className="inputbox" id="outlined-basic" label="E-mail" variant="outlined" />
                <TextField className="inputbox" id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained" className="button" color="primary">
                    Log In
                </Button>
                <Router>
                    <center><p>New User ? <Link to="/signup">Sign Up</Link></p></center>
                </Router>
            </form>
            
        </div>
    );
}

export default Container;