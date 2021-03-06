import React, { useEffect } from 'react';
import './App.scss';
import  NavMenu from './components/header/NavMenu'
import { AppBar} from '@material-ui/core';
// import  Button from './components/button/Buttons'

import {makeStyles} from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';

import Counter from './components/Counter';

import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/article/ArticlePage';
import LoginPage from './pages/login/LoginPage';
// import { loadState } from './shared/api';
import { useDispatch } from 'react-redux';
import { fetchLogin, fetchProfile } from './shared/redux/login/login.actions';


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
},
mainFeaturesPost :{
position: "relative",
color:theme.palette.common.white,
marginBottom: theme.spacing(4),
backgroundSize:"cover",
backgroundRepeat:"no-repeat",
backgroundPosition:"center",
marginTop:theme.spacing(14),

},mainFeaturesPostContent:{
  position:"relative",
  padding: theme.spacing(13)
},
overlay:{
position:"absolute",
top:0,
bottom:0,
right:0,
left:0,
backgroundOverlay :"rgba(0,0,0,.3)"
},
cardMedia:{
  paddingTop:"56.25%",

},
cardContent:{
  flexGrow:1
},
cardGrid:{
  marginTop:theme.spacing(4),
}


}))

// const cards =  [1,2,3,4,5,6,7,8]



const  App : React.FC= () => {
  // const persistedProfile = loadState();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      dispatch(fetchProfile());
    }
  }, [])

 
  
  useEffect(()=>{
  })

  
  const classes = useStyles();
  return (
 
    <><>
      <div className="App">

        <AppBar position="fixed" className={classes.app}>

          <Header ></Header>


          <div className={classes.container}>

            <NavMenu />
            
          </div>
          {/* <CommentForm/> */}

        </AppBar>
          
              <Switch>
              <Route path="/counter" render={() => <Counter initialCount={3} />} />
                {/* <Route  path="/whatIsGdpr" >About</Route> */}
                <Route exact path="/articles" component={ArticlesPage}  />
          <Route path="/articles/:categoryId" component={ArticlesPage} />
          <Route path="/article/:articleId" component={ArticlePage} />
          <Route path="/login" component={LoginPage} />

            
         
              </Switch>
         

      
    {/*      <Container className={classes.main} component="div" maxWidth="lg">
            <div>
              <Likes />
            </div>
            <BasicTextFields value="" />
            <Counter initialCount={3} />
          </Container>
        </React.Fragment> */}

      </div>
    </>

   {/* <ArticlesPage/> */}
 
      </>
      
  );
}

export default App;