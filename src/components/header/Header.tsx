import { Avatar,AppBar, Box, Button, Container,IconButton,Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.scss';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import logo from "../../assets/images/gdpr.png";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    app : {
      backgroundColor:"rgb(24, 164, 245)",
      flexWrap: "wrap"
    },
    container: {
      flexWrap: "wrap"
    },
  
   root : {
    flexGrow : 1,
    flexWrap: "wrap",
    alignItems:"center"
   },
   menuButton : {
   
     flexGrow : 1,
     justifyContent: "right"
   },
   buttons: {
    margin : theme.spacing(1),
   },
   icon:{
  
    //   ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
    //     display: 'none'
    //   }
  
   },
  
   title : {
    marginLeft : theme.spacing(1),//8 px
    // flexGrow : 3,
   }
  
  }))
const Header: React.FC=()=>{
    const classes = useStyles();
    return(
        <Container fixed className={classes.container}>
        {/* для адаптивного меню */}
          <Toolbar className={classes.root}>  
            <IconButton edge="start" className={classes.menuButton}
            color="inherit" aria-label="menu" >
             
                <Avatar  >
                <img src = {logo} className="App-logo" alt="Logo"/>
                </Avatar>
              
                    <Typography variant="h6" className={classes.title}>GDPR Checker</Typography>
              </IconButton>
      
              <Box margin={1}>
                <Button color= "inherit" variant="outlined"  className={classes.buttons}>Log In</Button>
             {/* <Link to "/counter">Counter</Link> */}
              <Button color= "secondary" variant="contained" className={classes.buttons} >Sign Up</Button>
              </Box>
            </Toolbar>
          </Container>
             
        );
    };

export default Header;