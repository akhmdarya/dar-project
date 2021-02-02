import React, { useEffect, useState } from 'react';
import { Button, createStyles, makeStyles, MenuItem, Popover, Theme, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Menu from '@material-ui/core/Menu/Menu';

import ListRoundedIcon from '@material-ui/icons/ListRounded';
// import styles from './Nav.module.scss';
import { Link, withRouter } from 'react-router-dom';

import { getCategories } from '../../shared/api';
import { Category, Profile } from '../../shared/types';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../shared/redux/categories/categories.selectors';
import { fetchCategories, setCategories } from '../../shared/redux/categories/categories.actions';
// import { selectArticles } from '../../shared/redux/articles/articles.selectors';
// import { fetchArticles } from '../../shared/redux/articles/articles.actions';





const useStyles = makeStyles((theme: Theme) => 
createStyles({
    navbar : {
        // top:"60px",
      backgroundColor:"rgb(127, 255, 212)",

        justifyContent: "space-around",
    },
    container: {
      flexWrap: "wrap"
    },
    buttons: {
        margin : theme.spacing(1),
       },
       root:{
        top: "197px!important",
        justifyContent: "space-around",
        backgroundColor: 'rgba(0,0,0,0.5)',
       },
       
       popover_container:{
         
          top: "197px!important",
          // right: '200px!important'

         },
         popover:{
          left: '0!important',
          top: '0px!important',
          minWidth: '200px!important',
      
         }
       
}));

 

const NavMenu = () => {

  // const [topItems, setTopItems] = useState<string[]>([]);
  // const [bottomNavItems, setBottomNavItems] = useState<Category[]>([]);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getCategories();
  //     setBottomNavItems(res.data);
  //   }
  //   fetchData();
  // }, [])


  const dispatch = useDispatch();


  const categories = useSelector(selectCategories);
  console.log('CATEGORIES', categories)
  
  useEffect(() => {
    dispatch(fetchCategories());
  }, [])





  // const articles = useSelector(selectArticles);
  // console.log('ARTICLES', articles)
  
  // useEffect(() => {
  //   dispatch(fetchArticles());
  // }, [])
  




  // const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const id = open ? 'simple-popover' : undefined;
  const handleMenu =  (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL: any) => {
    // history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL: any) => {
    // history.push(pageURL);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


    // const menuItems = [  //for mobile menu
    //     {
    //         id: 1,
    //       menuTitle: "Home",
    //       pageURL: "../../src/App.tsx"
    //     },
    //     {
    //         id:2,
    //       menuTitle: "What Is Gdpr",
    //       pageURL: "/whatIsGdpr"
    //     },
    //     {
    //         id:3,
    //       menuTitle: "Products",
    //       pageURL: "/products"
    //     }
    //   ];
    return(
      isMobile ? (
        
 
        <div><IconButton aria-describedby={id} edge="start" onClick={handleMenu}
        >
          <ListRoundedIcon />
        </IconButton>

          <Popover classes={{
          root:classes.root,
            paper: classes.popover,
          }}
            id={id}
           
            open={open}
            anchorEl={anchorEl}
             onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
           
            
           
          >
            {categories.map(categories => {
              // const { menuTitle, pageURL } = menuItem;
              return (
                <MenuItem key={categories.id} 
                // onClick={() => handleMenuClick(pageURL)}>
                >
                  {categories.title}
                </MenuItem>
              );
            })}
           
          </Popover>
          </div>
         
        
        
      ):(
       
         <Toolbar className={classes.navbar}>
            <div>
        {/* {bottomNavItems.map(bottomNavItem => {
            // const { menuTitle,pageURL } = menuItem;
            return ( 
               3 <Button key={bottomNavItem.id}
                   variant="contained" color="primary" className={classes.buttons}
                  // 
                  >
                {bottomNavItem.title}
                </Button>
             
            );
          })} */}
 <Button  variant="contained" color="primary" className={classes.buttons} ><Link to="/articles">Все статьи</Link></Button>
          {
            categories.map(item => (
            <Button  variant="contained" color="primary" className={classes.buttons} key={item.id} >
              <Link to={`/articles/${item.id}`}>{item.title}</Link>
              </Button>
              ))
          }


          </div>
          </Toolbar>
      )
      
          );
        };

export default NavMenu;