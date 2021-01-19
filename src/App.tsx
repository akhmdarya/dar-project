import React from 'react';
import './App.scss';
import  NavMenu from './components/header/NavMenu'
import { AppBar, Container, CssBaseline, Typography} from '@material-ui/core';
// import  Button from './components/button/Buttons'

import {makeStyles} from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './Home';
import Likes from './components/Likes';
import BasicTextFields from './components/urlField/TextField';

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
   
 }, main: {
  backgroundColor: '#cfe8fc', height: '100vh',
  position: "relative",
  paddingTop:"150px",
}

}))
const  App : React.FC= () => {
  const classes = useStyles();
  return (
    <div className="App">
     
      <AppBar position="fixed" className={classes.app}>
   
          <Header/> 

        
        <div className={classes.container}> 
       
      <NavMenu />
      <BrowserRouter>
      <Switch>
        <Route exact path="/"  
        render={props => <Home {...props} />} 
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
     <React.Fragment>
      <CssBaseline />
      
      <Container className={classes.main}  component="div" maxWidth="lg">
  
        <div>  
        
<Likes />

      </div>
      <BasicTextFields value= ""/>
      
      </Container>
    </React.Fragment>

   
        

      
    
    </div>
 
  );
}

export default App;
