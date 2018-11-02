import "./TopBar.css";
import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function TopBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
			<AppBar position="static">
			<Toolbar>
			<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
			<MenuIcon />
			</IconButton>
			<Typography variant="title" color="inherit" className={classes.flex}>
			Title
			</Typography>
			<Button color="inherit">Login</Button>
			</Toolbar>
			</AppBar>
        </div>
    );
}
    
    export default TopBar;