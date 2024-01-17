import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Category from '../Category/Category'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Container, Grid, Avatar, Stack, Box, FormControl, InputLabel, Select, Menu, Typography, IconButton, MenuItem, Button } from '@mui/material'
import logo from "../Assets/img/edu-map-logo.png";
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BarChartIcon from '@mui/icons-material/BarChart';

function Header() {
  const [language, setLanguage] = useState('Eng');
  const [isAgreeCategory, setIsAgreeCategory] = useState('none');
  const navigate = useNavigate();
  const [role, setRole] = useState(2);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userMenu, setUserMenu] = useState([]);
  const [trainingCenterMenu, setTrainingCenterMenu] = useState([]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    setUserMenu(['User Profile', 'Account', 'Submit Application'])
    setTrainingCenterMenu(['Dashboard', 'My Advertising', 'Profile', "Create Advertising", 'Increase Efficiency', 'Log Out'])
  }, [])

  function openCategory () {
    if(isAgreeCategory === 'none') {
      setIsAgreeCategory('block');
    }else {
      setIsAgreeCategory('none');
    }
  }

  function adminPanelLink (menu) {
    let newMenu = menu.toLowerCase().split(" ");
    
    if(newMenu.length > 1){
      newMenu = newMenu[0] + "-" + newMenu[1];
    }else {
      newMenu = menu.toLowerCase();
    }
    console.log(newMenu);

    navigate(`/institution-admin/${newMenu}`)
  }

  function userLink (menu) {
    let newMenu = menu.toLowerCase().split(" ");
    
    if(newMenu.length > 1){
      newMenu = newMenu[0] + "-" + newMenu[1];
    }else {
      newMenu = menu.toLowerCase();
    }
    console.log(newMenu);

    navigate(`${newMenu}`)
  }

  function search () {
    navigate("/search")
  }

  function versus () {
    navigate("/versus")
  }

  function signIn () {
    navigate('/sign-in')
  }

  function signUp () {
    navigate('/sign-up')
  }

  function like () {
    navigate('like')
  }

  return (
    <Stack>
        <Container>
            <Grid container spacing={1} height={{xl: 76, md: 76, sm: 76, xs: 64}} alignItems='center'>
              <Grid item xl={4} md={4} sm={4} xs={4} display='flex' justifyContent='flex-start' alignItems='center'>
                <Link to='home'>
                    <img src={logo} height={52} style={{'@media screen and (max-width: 600px) and (min-width: 0px)': {
        height: '40px',
      },}} alt="Space os Knowledge" />
                </Link>
                <Button onClick={openCategory} size='large' sx={{ 
                  height: {xl: 50, md: 50, sm: 32, xs: 32}, 
                  display: {xl: 'flex', md: 'flex', sm: 'flex', xs: 'none'}, 
                  marginLeft: {xl: '47px', md: '47px', sm: '20px', xs: '20px'}, 
                  color: 'black', 
                  fontSize: '14px', 
                  textTransform: 'capitalize'}} variant="outlined" color='grey' endIcon={<CategoryIcon />}>
                    Category
                </Button>
                <Button onClick={openCategory} size='large' sx={{
                    width: {xl: 50, md: 32, sm: 32, xs: 32}, 
                    height: {xl: 50, md: 32, sm: 32, xs: 32}, 
                    display: {xl: 'none', md: 'none', sm: 'none', xs: 'flex'}, 
                    marginLeft: {xl: '47px', md: '47px', sm: '47px', xs: '20px'}, 
                    color: 'black', 
                    fontSize: '14px', 
                    textTransform: 'capitalize'}} variant="outlined" color='grey'>
                  <CategoryIcon />
                </Button>
              </Grid>
              <Grid item xl={8} md={8} sm={8} xs={8} gap={1} display='flex' justifyContent='flex-end' alignItems='center'>               
                <Box>
                  <FormControl>
                    <Select
                      sx={{width: 80, height: {xl: 50, md: 50, sm: 32, xs: 32}, fontSize: 14}}
                      color='grey'
                    
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={language}
                      onChange={handleChange}
                    >
                      <MenuItem value='Uzb'>Uzb</MenuItem>
                      <MenuItem value='Ru'>Ru</MenuItem>
                      <MenuItem value='Eng'>Eng</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <IconButton onClick={versus} sx={{ p: 0,  }}>
                    <Avatar alt="Remy Sharp" sx={{bgcolor: '#fff', border: '1px solid #D0D5DD', width: {xl: 50, md: 50, sm: 32, xs: 32}, height: {xl: 50, md: 50, sm: 32, xs: 32}}} variant="rounded" src="" >
                      <BarChartIcon sx={{color: '#000'}} />  
                    </Avatar>  
                  </IconButton>
                </Box>
                <Box >
                  <IconButton onClick={like} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" sx={{bgcolor: '#fff', border: '1px solid #D0D5DD', width: {xl: 50, md: 50, sm: 32, xs: 32}, height: {xl: 50, md: 50, sm: 32, xs: 32}}} variant="rounded" src="" >
                      <FavoriteBorderIcon sx={{color: '#000'}} />  
                    </Avatar>  
                  </IconButton>
                </Box>
                {
                  role === null ? <>
                    <Button  onClick={signIn} sx={{height: {xl: 50, md: 50, sm: 32, xs: 32}, width: {xl: 150, md: 150, sm: 150, xs: 150}, color: 'black', fontSize: '14px', textTransform: 'capitalize'}} variant="contained" color='grey'>
                    Sign In
                  </Button>
                  <Button  onClick={signUp} sx={{height: {xl: 50, md: 50, sm: 32, xs: 32}, width: {xl: 150, md: 150, sm: 150, xs: 150}, color: 'black', fontSize: '14px', textTransform: 'capitalize'}} variant="contained" color='success'>
                    Sign Up
                  </Button>
                  </> : <Box sx={{ flexGrow: 0 }}>
                      <Stack width='100%' flexDirection='row' gap={1} alignItems='center' display='flex' justifyContent='flex-end'>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" sx={{bgcolor:'#F1F1F1', border: '1px solid #D0D5DD', width: {xl: 50, md: 50, sm: 32, xs: 32}, height: {xl: 50, md: 50, sm: 32, xs: 32}}}  src="" >
                          <PersonOutlineIcon sx={{color: '#000'}} />  
                        </Avatar>  
                      </IconButton>
                    </Stack>
                    {
                      role === 1 ?
                        <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                        {
                          userMenu.map((item, index) => {
                            return (
                              <MenuItem key={index + 1}>
                                <Typography onClick={() => userLink(item)} textAlign="center">{item}</Typography>
                              </MenuItem>
                            )
                          })
                        }
                        </Menu>
                      : <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                        {
                          trainingCenterMenu.map((item, index) => {
                            return (
                              <MenuItem onClick={() => adminPanelLink(item)} key={index + 1}>
                                <Typography textAlign="center">{item}</Typography>
                              </MenuItem>
                            )
                          })
                        }
                      </Menu>
                    }
                  </Box>
                }
                
              </Grid>
            </Grid>
            <Box sx={{position: 'relative'}}>
              <Stack bgcolor='white' boxShadow='0 5px 5px #42434681' position='absolute' width="100%" zIndex={33} display={isAgreeCategory}>
                <Category />
              </Stack>
            </Box>
        </Container>
        <Outlet/>
          <Footer />
    </Stack>
  )
}

const navLinkStyle = {
  color: '#072556',
  textDecoration: 'none'
}

export default Header