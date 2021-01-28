import { Avatar,AppBar, Box, Button, Container,IconButton,Toolbar, Typography} from '@material-ui/core';
import React, { useContext } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';

import styles from './Header.module.scss';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import logo from "../../assets/images/gdpr.png";
import {makeStyles} from '@material-ui/core/styles';

import AppContext, { ActionTypes } from '../../shared/app.context';

import Profile from '../profile/Profile';

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
   },
   img :{
     width: '60px',
     height: '60px'
   }
  
  }))

const Header: React.FC=()=>{
  const history= useHistory();
  const {dispatch} = useContext(AppContext);
   const goToLogin = () =>{
    
    history.push('/login');
   }

   const goToLogOut = () => {
    dispatch({type: ActionTypes.RESET_PROFILE, payload: null})
    history.push('/articles');
   }
    const classes = useStyles();
    const {state: {profile}} = useContext(AppContext);


    return(
        <Container fixed className={classes.container}>
        {/* для адаптивного меню */}
          <Toolbar className={classes.root}>  
            <IconButton edge="start" className={classes.menuButton}
            color="inherit" aria-label="menu" >
             
                <Avatar  >
                <img src = {logo} className={classes.img} alt="Logo"/>
                </Avatar>
              
                    <Typography variant="h6" className={classes.title}>GDPR Checker</Typography>
              </IconButton>
      
              <Box margin={1}>

              {
                 profile ? <><Profile username={profile.username} avatar={profile.avatar} />
                <button title={'Log out'} onClick={goToLogOut}>LOG OUT!</button></>
                 
                 :
             <div className={styles.header_login}>
              <button title={'Login'}  onClick={goToLogin} >Login</button>
             
            </div>
 
              }
              <Button color= "secondary" variant="contained" className={classes.buttons} >Sign Up</Button>
            
              </Box>
            </Toolbar>
          </Container>
             
        );
    };

export default Header;