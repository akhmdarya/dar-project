import { Button, createStyles, makeStyles, MenuItem, Popover, Theme, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Menu from '@material-ui/core/Menu/Menu';
import React from 'react';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
// import styles from './Nav.module.scss';
import { withRouter } from 'react-router-dom';

import MenuIcon from "@material-ui/icons/Menu";



  
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
        justifyContent: "space-around",
       }
}));

 

const NavMenu = () => {
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
        
 
        <div><IconButton aria-describedby={id} edge="start" onClick={handleMenu}
        >
          <ListRoundedIcon />
        </IconButton>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
             onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
           
            
           
          >
            {menuItems.map(menuItem => {
              const { menuTitle, pageURL } = menuItem;
              return (
                <MenuItem key={menuItem.id} onClick={() => handleMenuClick(pageURL)}>
                  {menuTitle}
                </MenuItem>
              );
            })}
           
          </Popover></div>
         
        
        
      ):(
       
         <Toolbar className={classes.navbar}>
            <div>
        {menuItems.map(menuItem => {
            const { menuTitle,pageURL } = menuItem;
            return ( 
                <Button key={menuItem.id}
                   variant="contained" color="primary" className={classes.buttons}
                   onClick={() => handleMenuClick(pageURL)}>
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