import React, { useEffect, useState } from 'react';
import './App.scss';
import  NavMenu from './components/header/NavMenu'
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Paper, Typography} from '@material-ui/core';
// import  Button from './components/button/Buttons'

import {makeStyles} from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './Home';
import Likes from './components/Likes';
import BasicTextFields from './components/urlField/TextField';
import Counter from './components/Counter';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { CardsCathegory } from './shared/types';
import { getCardsCategories } from './shared/api';



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
  const [cards, setCards] = useState<CardsCathegory[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCardsCategories();
      setCards(res.data);
    }
    fetchData();
  }, [])
  
  const classes = useStyles();
  return (
    <><>
      <div className="App">

        <AppBar position="fixed" className={classes.app}>

          <Header />


          <div className={classes.container}>

            <NavMenu />
            <BrowserRouter>
              <Switch>
                <Route exact path="/"
                  render={props => <Home {...props} />} />
                <Route exact path="/whatIsGdpr" />
                <Route exact path="/products" />
              </Switch>
            </BrowserRouter>

          </div>

        </AppBar>
        {/* <React.Fragment>
          <CssBaseline />

          <Container className={classes.main} component="div" maxWidth="lg">

            <div>

              <Likes />

            </div>
            <BasicTextFields value="" />

            <Counter initialCount={3} />
          </Container>
        </React.Fragment> */}

      </div>
    </>

      <main>
        <Paper className={classes.mainFeaturesPost}
        style={{backgroundImage:`url(https://source.unsplash.com/random)` }}>
            <Container fixed>
              <div className={classes.overlay}/>
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturesPostContent}>
                    <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                    >
                      News
                    </Typography>

                    <Typography
                    variant="h5"
                    color="inherit"
                    paragraph
                    >
                     какой то текст тут должен быть!
                    </Typography>
                    <Button variant="contained" color="secondary">
                      Learn more
                      </Button>
                    </div>
                </Grid>
                </Grid>
              </Container>
        </Paper>
        <div >
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>News</Typography>
            <Typography variant="h5" align="center" color="textSecondary" gutterBottom>Текст, что тут будут самые свежие новости</Typography>
          <div >
            <Grid container spacing={5} justify="center">
              <Grid item>
                <Button variant="contained" color="primary"> Start Now</Button>
                </Grid>
                <Grid item>
                <Button variant="outlined" color="primary"> Learn More</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>


        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) =>(
              <Grid item key={card.id} xs={12} sm={6} md={4}>

                <Card>
                  <CardMedia className={classes.cardMedia}
                  image ="https://source.unsplash.com/random"
                  title = {card.title}
                  
                  />
                  <CardContent className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>{card.title}</Typography>
            <Typography gutterBottom variant="h6">{card.annotation}</Typography>
            <Typography align="right">Дата публикации: {card.created_at}</Typography>
                    </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                      </Button>
                      <Button size="small" color="primary">
                     Edit
                      </Button>
                      <LayerIcon/>
                      <PlayCircleFilledIcon/>
                    </CardActions>
                </Card>
                </Grid>
            ))}

            </Grid>

        </Container>
      </main>
      </>
 
  );
}

export default App;
