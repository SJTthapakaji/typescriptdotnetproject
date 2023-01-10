import * as React from 'react';
import "./Home.css";
import NavBar from './NavBar';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import imagef from './../../images/hdimage.jpg';
import TopPicksOfSeason from '../Products/TopPicksOfSeason';
import AllProducts from '../Products/AllProducts';
import Trending from '../Products/Trending';
import BottomNavigation from '@mui/material/BottomNavigation';
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
     width: drawerWidth,
     transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
     }),
     overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
     transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
     }),
     overflowX: 'hidden',
     width: `calc(${theme.spacing(7)} + 1px)`,
     [theme.breakpoints.up('sm')]: {
          width: `calc(${theme.spacing(8)} + 1px)`,
     },
});

const DrawerHeader = styled('div')(({ theme }) => ({
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'flex-end',
     padding: theme.spacing(0, 1),
     // necessary for content to be below app bar
     ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
     open?: boolean;
}

const AppBar = styled(MuiAppBar, {
     shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
     zIndex: theme.zIndex.drawer + 1,
     transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
     }),
     ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
               easing: theme.transitions.easing.sharp,
               duration: theme.transitions.duration.enteringScreen,
          }),
     }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
     ({ theme, open }) => ({
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(open && {
               ...openedMixin(theme),
               '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!open && {
               ...closedMixin(theme),
               '& .MuiDrawer-paper': closedMixin(theme),
          }),
     }),
);

export default function MiniDrawer() {
     const theme = useTheme();
     const [open, setOpen] = React.useState(false);

     const handleDrawerOpen = () => {
          setOpen(true);
     };

     const handleDrawerClose = () => {
          setOpen(false);
     };

     return (
          <>
               <NavBar />
               <div className=''>
                    <img src={imagef} style={{ width: '100%', height: '250px', marginTop: '118px' }} />
                    <div className="centered">"Best way to shop online."</div>
               </div>
               <div className='container-fluid d-flex' style={{ margin: '20px' }}>
                    <div className='col-md-2'>
                         <div className="sidebar">
                              <hr style={{ margin: 'inherit', color: 'white', borderTop: '5px solid' }}></hr>
                              <a href="#all"><i className="fa fa-fw fa-home"></i>All</a>
                              <a href="#mens"><i className="fa fa-fw fa-home"></i> Means Wear</a>
                              <a href="#womens"><i className="fa fa-fw fa-wrench"></i> Womens Wear</a>
                              <a href="#kids"><i className="fa fa-fw fa-user"></i>Kids Items</a>
                              <a href="#trending"><i className="fa fa-fw fa-envelope"></i> Trending</a>
                         </div>

                    </div>
                    <div className='col-md-10 main' style={{ overflowX: 'hidden' }}>
                         <section>
                              <div className='card' id='trending' style={{ margin: '20px' }}>
                                   <div className='col-md-12'>
                                        <div className='justify-content-center'>
                                             <h1 className='pickshead'>Top Picks of the Season</h1>
                                        </div>
                                   </div>
                                   <div className='card-body flex-wrap'>
                                        <TopPicksOfSeason />
                                   </div>

                              </div>
                         </section>
                         <section>
                              <div className='card' id='trending' style={{ margin: '20px' }}>
                                   <div className='col-md-12'>
                                        <div className='justify-content-center'>
                                             <h1 className='pickshead'>Just For You</h1>
                                        </div>
                                   </div>
                                   <div className='card-body flex-wrap'>
                                        <AllProducts />
                                   </div>

                              </div>
                         </section>
                         <section>
                              <div className='col-md-12'>
                                   <div className='justify-content-center'>
                                        <h1 className='pickshead'>Trending</h1>
                                   </div>
                              </div>
                              <div className='card ' id='trending' style={{ margin: '20px' }}>
                                   <div className='card-body flex-wrap'>
                                        <Trending />
                                   </div>
                              </div>
                         </section>

                    </div>
               </div>



               <div className='bg-dark text-white' style={{ marginTop: '50px' }}>
                    <div className='clearfix'>
                         <div className='row'>

                              <div className='col-md-2'>
                              </div>
                              <div className='col-md-10 '>
                                   <div className='d-flex' style={{ padding: '55px 0px 30px 15px' }}>
                                        <div className='col-md-4'>
                                             <label >Location: </label> <label>Mulpani,Kathmandu,Nepal</label><br />
                                        </div>
                                        <div className='col-md-4'>
                                             <label >Contact: </label> <label>9840066754</label><br />
                                        </div>
                                        <div className='col-md-4'>
                                             <label >Email: </label> <label>thapatsushant@gmail.com</label>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='row'>

                              <div className='col-md-1'>
                              </div>
                              <div className='col-md-10 '>
                                   <div className='d-flex justify-content-center' style={{ padding: '55px 0px 30px 15px' }}>
                                        CopyRight © © Sushant Jung Thapa.All Rights Reserved
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}