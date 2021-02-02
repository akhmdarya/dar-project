 import React, { useEffect, useState } from 'react';
import { getArticles } from '../shared/api';
import { Article } from '../shared/types';
import { getArticle } from '../shared/api';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, makeStyles, Paper, Typography} from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../shared/redux/articles/articles.actions';
import { selectArticles } from '../shared/redux/articles/articles.selectors';

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
  marginBottom: theme.spacing(3),
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  // marginTop:theme.spacing(1),
  
  },mainFeaturesPostContent:{
    position:"relative",
    padding: theme.spacing(10)
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
    paddingBottom:"56.25%",
  
  },
  cardContent:{
    flexGrow:1
  },
  cardGrid:{
    marginTop:theme.spacing(4),
    paddingBottom:"56.25%",
  }
  
  
  }))
const ArticlesPage: React.FC = ()=>{

    const {categoryId} = useParams<{ categoryId: string }>();
  
    // const [articles, setArticles] = useState<Article[]>([]);

    // useEffect(() => {
    //     getArticles(categoryId)
    //       .then((articles) => {
    //         setArticles(articles);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, [categoryId]);
   
  
    const dispatch = useDispatch();
  
    const articles = useSelector(selectArticles);
  
    useEffect(() => {
     dispatch(fetchArticles({categoryId}));
     console.log(categoryId+"!!!!!!!");
    }, [categoryId]);
    console.log(categoryId);
  
    
    const classes = useStyles();


    return(
        <>
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
            {articles.map((article) =>(
              <Grid item key={article.id} xs={12} sm={6} md={4}>
              
                <Card>
                  <CardMedia className={classes.cardMedia}
                  image={`https://dev-darmedia-uploads.s3.eu-west-1.amazonaws.com/${article.image}`}
                  title = {article.title}
                  
                  />
                  <CardContent className={classes.cardContent}>
                  <Link to= {`/article/${article.id}`}>
                      <Typography variant="h5" gutterBottom>{article.title}</Typography></Link>
                      <Typography gutterBottom variant="h6">{article.annotation}</Typography>
                      <Typography align="right">Дата публикации: {article.created_at}</Typography>
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



    )

}
export default ArticlesPage;