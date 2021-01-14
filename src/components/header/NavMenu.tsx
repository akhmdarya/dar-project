import { AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.scss';
const useStyles = makeStyles((theme) => ({
    navbar : {
        // top:"60px",
      backgroundColor:"rgb(250, 242, 12)",

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

const NavMenu: React.FC=()=>{
    const classes = useStyles();
    const menuItems = [  //for mobile menu
        {
            id: 1,
          menuTitle: "Home",
          pageURL: "./././src/App.tsx"
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
        <Toolbar className={classes.navbar}>
            <div>
        {menuItems.map(menuItem => {
            const { menuTitle, pageURL } = menuItem;
            return ( 
                <Button key={menuItem.id}
                   variant="contained" color="primary" className={classes.buttons}>
                {menuTitle}
                </Button>
             
            );
          })}
          </div>
          </Toolbar>
             
                // <Toolbar className={classes.navbar}>
                //         <div >
                //       <Button
                //         variant="contained" color="primary" className={classes.buttons}
                       
                //       >
                //         HOME
                //       </Button>
                //       <Button
                //         variant="contained" color="primary" className={classes.buttons}
                       
                //       >
                //         What Is Gdpr
                //       </Button>
                //       <Button
                //         variant="contained" color="primary" className={classes.buttons}
                       
                //       >
                //        Products
                //       </Button>
                //     </div>
                  
                // </Toolbar>
            
           
          );
        };

export default NavMenu;