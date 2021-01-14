import React from 'react';
import './App.scss';
import  NavMenu from './components/header/NavMenu'
import { AppBar} from '@material-ui/core';


import {makeStyles} from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';

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
