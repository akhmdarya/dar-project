import { Button, makeStyles, MenuItem, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Menu from '@material-ui/core/Menu/Menu';
import React from 'react';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import styles from './Nav.module.scss';
import { withRouter } from 'react-router-dom';




  
const useStyles = makeStyles((theme) => ({
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
        justifyContent: "space-around",
       }
}))

 

const  NavMenu : React.FC= () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const classes = useStyles();
    const menuItems = [  //for mobile menu
        {
            id: 1,
          menuTitle: "Home",
          pageURL: "../../src/App.tsx"
        },
        {
            id:2,
          menuTitle: "What Is Gdpr",
          pageURL: "/whatIsGdpr"
        },
        {
            id:3,
          menuTitle: "Products",
          pageURL: "/products"
        }
      ];
    return(

      isMobile ? (
      
       <div  className={styles.container} >
        
       </div>
        
      ):(
       
         <Toolbar className={classes.navbar}>
            <div>
        {menuItems.map(menuItem => {
            const { menuTitle } = menuItem;
            return ( 
                <Button key={menuItem.id}
                   variant="contained" color="primary" className={classes.buttons}>
                {menuTitle}
                </Button>
             
            );
          })}
          </div>
          </Toolbar>
      )
          
          );
        };

export default NavMenu;