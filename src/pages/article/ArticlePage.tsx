
 import { makeStyles } from "@material-ui/core";
 import Container from "@material-ui/core/Container";
 import React, {useEffect, useRef, useState} from "react";
 import { useParams } from "react-router-dom";
 // import CommentContainer from "../../components/comment-form/CommentList";
 import CommentForm from "../../components/comment-form/CommentForm";
 import { getArticle } from "../../shared/api";
 import { Article } from "../../shared/types";
 
 import { CommentTable } from "../../components/comment-form/CommentTable";
 
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
     alignItems:"center",
    
      
    }, main: {
     backgroundColor: '#cfe8fc', height: '100vh',
     position: "relative",
     paddingTop:"850px",
 
   
   },mainFeaturesPostContent:{
     position:"relative",
     padding: theme.spacing(27)
   },
   
 }))
 
 const ArticlePage : React.FC = ()  => {
     const commentsData = [
         
         {  username: '', email: '', comment:'' },
       
       ]
     // var filtered = array.filter(Boolean);
     const newArray = commentsData.filter(commentsData => commentsData.username !== '')
 
   const [comments, setComments] = useState(newArray)
 
   const addComment = (comment: {  username: string; email: string; comment:string; }) => {
     
     // comment.id = comments.length + 1
    
     // передаем пред. массив,  + новый коммент
     setComments([...comments, comment])
   }
     
     const classes = useStyles();
     const {articleId} = useParams<{articleId:string}>();
     const [article, setArticle] = useState<Article | null>(null);
 
     useEffect(()=>{
         if(articleId){
             getArticle(articleId)
                 .then(res=> setArticle(res.data))   
         }
     },[articleId])
     return (
         <main>
             <div className={classes.mainFeaturesPostContent}>
         <Container>
         
         <div className="ArticlePage">
             {
                 article &&(
                 <><div>{article.title}</div>
 
                         <div
                             dangerouslySetInnerHTML={{ __html: article.description }}
                         ></div></>
                 )
             }
             </div>
             <CommentTable comments={comments} />
             <CommentForm addComment={addComment} />
             
             {/* <CommentForm /> */}
            
             </Container>
             </div>
             </main>
     )
 
 }
 export default ArticlePage;