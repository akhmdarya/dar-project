import React from 'react';
import './App.scss';
import  NavMenu from './components/header/NavMenu'
import { Avatar,AppBar, Box, Button, Container,IconButton,Toolbar, Typography} from '@material-ui/core';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import {makeStyles} from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from "./components/images/gdpr.png";

const useStyles = makeStyles((theme) => ({
  app : {
    backgroundColor:"rgb(31, 112, 173)",
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

    ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
      display: 'none'
    }

 },

 title : {
  marginLeft : theme.spacing(1),//8 px
  // flexGrow : 3,
 }

}))
const  App : React.FC= () => {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <Header/> */}
      <AppBar position="fixed" className={classes.app}>
        <Container fixed className={classes.container}>
        {/* для адаптивного меню */}
          <Toolbar className={classes.root}>  
            <IconButton edge="start" className={classes.menuButton}
            color="inherit" aria-label="menu" >
              <ListRoundedIcon className={classes.icon}/>
                <Avatar  >
                <img src = {logo} className="App-logo" alt="Logo"/>
                </Avatar>
              
                    <Typography variant="h6" className={classes.title}>GDPR Checker</Typography>
              </IconButton>
      
              <Box margin={1}>
                <Button color= "inherit" variant="outlined"  className={classes.buttons}>Log In</Button>
             
              <Button color= "secondary" variant="contained" className={classes.buttons} >Sign Up</Button>
              </Box>
            </Toolbar>
          </Container>
        

        
        <div className={classes.container}> 
       
      <NavMenu />
      <BrowserRouter>
      <Switch>
        <Route exact from="/"  
        // render={props => <Home {...props} />} 
        />
        <Route exact path="/whatIsGdpr" 
        // render={props => <whatIsGdpr {...props} />} 
        />
        <Route exact path="/products" 
        // render={props => <Products {...props} />} 
        />
      </Switch>
      </BrowserRouter>
    
     </div> 
     </AppBar>
    </div>
  );
}

export default App;
