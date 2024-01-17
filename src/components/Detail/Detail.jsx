import { Grid, Stack, List, Rating, ListItem, Slider, ListItemText, Tooltip, ListItemIcon, Pagination, Typography, Card, CardContent, IconButton, Container } from '@mui/material'
import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import styledComponent from 'styled-components';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import TagIcon from '@mui/icons-material/Tag';
import SendOutlined from '@mui/icons-material/SendOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TranslateIcon from '@mui/icons-material/Translate';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SchoolIcon from '@mui/icons-material/School';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
// 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Outlet, useNavigate } from 'react-router-dom';


const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://picsum.photos/2700/900',
  },
  {
    label: 'Bird',
    imgPath:
      'https://picsum.photos/4050/1350',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://picsum.photos/2700/1800',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://picsum.photos/4050/1350',
  },
];

function Detail() {
    const navigate = useNavigate();
    const [value, setValue] = React.useState([0, 0]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function detail () {
        navigate('/detail')
    }

    function clickDescription () {
        navigate('description')
    }

    function clickCommit () {
        navigate('comment')
    }

    function clickCertificate () {
        navigate('certificate')
    }

    function clickComparison () {
        navigate('comparison')
    }

    function clickApp () {
        navigate('leave-application')
    }
  return (
    <Stack>
        <Container>
            <Grid marginTop='9px' container justifyContent="center">
                <Grid item display='flex' gap='8px' >
                    <Tooltip sx={buttonStyle} title="Tavsif" placement="top">
                        <Button onClick={clickDescription} variant='outlined'>Tavsif</Button>
                    </Tooltip>
                    <Tooltip sx={buttonStyle} title="Izoh" placement="top">
                        <Button variant='outlined'>Izoh</Button>
                    </Tooltip>
                    <Tooltip sx={buttonStyle} title="Sertifikat" placement="top">
                        <Button variant='outlined'>Sertifikat</Button>
                    </Tooltip>
                    <Tooltip sx={buttonStyle} title="Taqqoslash" placement="top">
                        <Button variant='outlined'>Taqqoslash</Button>
                    </Tooltip>
                    <Tooltip sx={buttonStyle} title="Manzil" placement="top">
                        <Button variant='outlined'>Manzil</Button>
                    </Tooltip>
                    <Tooltip sx={buttonStyle} title="Ariza qoldirish" placement="top">
                        <Button variant='outlined'>Ariza qoldirish</Button>
                    </Tooltip>
                </Grid>
            </Grid>
            <Stack sx={{borderRadius: '16px', marginTop: '64px', position: 'relative'}}>
                <img width='100%' style={{borderRadius: '16px'}} height='auto' src="https://picsum.photos/2000/1250" alt="" />
                <Box sx={{position: 'absolute', padding: '32px', right: 0, bottom: 0, display: 'flex', justifyContent: 'flex-end', gap: '10px'}}>
                    <SocialNetworkButton>
                        <LanguageIcon sx={{fontSize: '18px'}} color='black' />
                    </SocialNetworkButton>
                    <SocialNetworkButton>
                        <FacebookIcon sx={{fontSize: '18px'}} color='black' />
                    </SocialNetworkButton>
                    <SocialNetworkButton>
                        <YouTubeIcon sx={{fontSize: '18px'}} color='black' />
                    </SocialNetworkButton>
                    <SocialNetworkButton>
                        <TelegramIcon sx={{fontSize: '18px'}} color='black' />
                    </SocialNetworkButton>
                    <SocialNetworkButton>
                        <InstagramIcon sx={{fontSize: '18px'}} color='black' />
                    </SocialNetworkButton>
                    <SocialNetworkButton>
                        <LocalPhoneIcon sx={{fontSize: '18px'}} color='black' />
                    </SocialNetworkButton>
                </Box>
            </Stack>
            <Stack>
                <Typography sx={{color: '#000',
                    fontFamily: 'Inter',
                    fontSize: '32px',
                    marginTop: '30px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '30px', /* 93.75% */
                    letterSpacing: '-1px' }}>Tavsif</Typography>
            </Stack>
            <Stack>
                <Grid container spacing={2}>
                    <Grid item marginTop='32px' xl={6}>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='black' />
                            <Typography>Talim muassasasi: O'quv markaz</Typography>
                        </Stack>   
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='black' />
                            <Typography>Talim yo'nalishi: IT</Typography>
                        </Stack>     
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='black' />
                            <Typography>Talim kursi: Frontend Developer</Typography>
                        </Stack>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='black' />
                            <Typography>Narxi: 1200000 - 1500000 so'm</Typography>
                        </Stack>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='black' />
                            <Typography>Rating: 4.5</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xl={6}>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='black' />
                            <Typography>Toshkent Shaxri</Typography>
                        </Stack>   
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='black' />
                            <Typography>Yunusobod Tumani</Typography>
                        </Stack>     
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='black' />
                            <Typography>99 888 56 45</Typography>
                        </Stack>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='black' />
                            <Typography>123 views</Typography>
                        </Stack>
                        <Stack mt={1} direction="row" alignItems="center" gap={1}>
                            <TagIcon color='black' />
                            <Typography>120 connections</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            <Stack>
            <Stack>
                <Outlet />
            </Stack>
                <Typography sx={{
                    color: '#000',
                    /* Large Title/2 */
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    marginTop:'93px',
                    lineHeight: '30px', /* 125% */
                    letterSpacing: '-1px', 
                }} variant='h5' my={3}>Talim muassasasini boshqa elonlari:</Typography>
                <Grid container spacing={3}>
                <Grid item xl={3} mt={3} py={3}>
                    <Typography variant='subtitle1' fontWeight='bold'>Category:</Typography>
                    <Grid container mt={2}>
                        <Grid item xl={12}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <LibraryMusicIcon color='black' />
                                        </ListItemIcon>
                                        <NavLink style={navLinkStyle}><ListItemText  primary="Musiqa" /></NavLink>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <SchoolIcon color='black' />
                                        </ListItemIcon>
                                        <NavLink style={navLinkStyle}><ListItemText  primary="Fan" /></NavLink>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <SportsSoccerIcon color='black' />
                                        </ListItemIcon>
                                        <NavLink style={navLinkStyle}><ListItemText  primary="Sport" /></NavLink>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <TranslateIcon color='black' />
                                        </ListItemIcon>
                                        <NavLink style={navLinkStyle}><ListItemText  primary="Language" /></NavLink>
                                    </ListItem>
                                </List>
                            </nav>
                        </Grid>
                    </Grid>
                    <Typography mt={2} variant='subtitle1' fontWeight='bold'>Price:</Typography>
                    <Grid container mt={2}>
                        <Grid item xl={12} px={2}>
                            <Box>
                                <Slider
                                color='success'
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                />
                            </Box>
                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle2'>{value[0]*100000} so'm</Typography>
                                <Typography variant='subtitle2'>{value[1]*100000} so'm</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={9} mt={3} py={3}>
                    <Typography variant='subtitle1' fontWeight='bold'>Academy</Typography>
                    <Grid container spacing={3}>
                        <Grid item sx={{marginTop: '50px'}} xl={6} md={6} sm={6} xs={12}>
                            <Card            
                            variant="outlined"
                            sx={{
                                borderRadius: '20px',
                                border: '3px solid var(--border-base-surface, #FFF)',
                                background: '#F5F5F5',
                                boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                                padding: '24px',
                                '&:hover': {
                                boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                                },
                            }}
                            >
                            <CardContent sx={{padding: 0}}>
                                <img style={{width:'100%'}} src={images[2].imgPath} alt="" />
                            </CardContent>   
                            <CardContent  sx={{padding: 0, display: 'flex', justifyContent: 'space-between'}}>
                                <Stack mt={1} direction="row" alignItems="center" gap={1}>
                                    <Rating size='small' sx={{color: '#FE6645'}} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </Stack>
                                <Stack mt={1} direction="row" alignItems="center" gap={1}>
                                <RemoveRedEyeIcon color='grey' fontSize='small' />        
                                <Typography variant='body2' sx={{color: '#707378', fontSize: {xl: '16px', md: '16px', sm: '14px', xs: '12px'}}}>123 views</Typography>
                                </Stack>
                            </CardContent>    
                            <CardContent  sx={{padding: 0, mt: '27px'}}>
                                <Typography variant='h6' sx={{
                                color: '#000',
                                fontFamily: 'Inter',
                                fontSize: {xl: '20px', md: '16px', sm: '18px', xs: '16px'},
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '30px',  /* 150% */
                                letterSpacing: '-0.8px',
                                '--max-lines': 1, 
                                overflow: 'hidden',
                                
                                display: '-webkit-box', 
                                '-webkit-box-orient': 'vertical',
                                '-webkit-line-clamp': 'var(--max-lines)' 
                                }}>
                                Frontend
                                </Typography>
                                <Typography sx={{
                                color: 'var(--Grey-06, #707378)',
                                fontFamily: 'Inter',
                                fontSize: {xl: '18px', md: '14px', sm: '16px', xs: '14px'},
                                fontStyle: 'normal',
                                fontWeight: 500,
                                marginTop: '8px',
                                lineHeight: '30px',  /* 150% */
                                letterSpacing: '-0.8px',
                                '--max-lines': 3, 
                                overflow: 'hidden',
                                
                                display: '-webkit-box', 
                                '-webkit-box-orient': 'vertical',
                                '-webkit-line-clamp': 'var(--max-lines)'
                                }} variant='subtitle2'>
                                Ushbu tizim 8-sinf o‘quvchilarining “Informatika va axborot texnologiyalari” fanidan....
                                </Typography>

                            </CardContent>
                            <CardContent
                                orientation="horizontal"
                                sx={{ alignItems: 'center', mt: '38px', position: 'relative', padding: 0, paddingBottom: '8px !important' }}
                            >
                                <Box sx={{ width: 0, display: 'flex', gap: '8px' }}>
                                <IconButton 
                                sx={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--Grey-02, #E2E3E6)',
                                    background: '#FFF', 
                                }}  
                                >
                                    <SendOutlined sx={{fontSize: '16px', color: '#000'}}/>
                                </IconButton>
                                <IconButton
                                    sx={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--Grey-02, #E2E3E6)',
                                    background: '#FFF', 
                                    }} 
                                >
                                    <FavoriteBorderIcon sx={{fontSize: '16px', color: '#000'}} />
                                </IconButton>
                                    <Button
                                    onClick={() => detail()}
                                    sx={{ position: 'absolute', right: 0, top: {xl: -5, md: -1, sm: -3, xs: -1}, height: {xl: 40, md: 32, sm: 40, xs: 32}, 
                                    borderRadius: '10px',
                                    border: '1px solid var(--Grey-02, #E2E3E6)',
                                    padding: {xl: '8px 16px', md: '6px 12px', sm: '6px 12px', xs: '6px 12px'},
                                    fontSize: {xl: '16px', md: '12px', sm: '12px', xs: '12px'},
                                    textTransform: 'capitalize',
                                    backgroundColor: 'transparent',
                                    letterSpacing: '-0.5px', 
                                    color: 'black',
                                    '&:hover': {
                                        color: '#fff',
                                    },
                                    }}
                                    color='success'
                                    variant="contained"
                                    
                                    >
                                    Ko’proq ma’lumot
                                    </Button>
                                </Box>
                            </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sx={{marginTop: '50px'}} xl={6} md={6} sm={6} xs={12}>
                            <Card            
                            variant="outlined"
                            sx={{
                                borderRadius: '20px',
                                border: '3px solid var(--border-base-surface, #FFF)',
                                background: '#F5F5F5',
                                boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                                padding: '24px',
                                '&:hover': {
                                boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                                },
                            }}
                            >
                            <CardContent sx={{padding: 0}}>
                                <img style={{width:'100%'}} src={images[2].imgPath} alt="" />
                            </CardContent>   
                            <CardContent  sx={{padding: 0, display: 'flex', justifyContent: 'space-between'}}>
                                <Stack mt={1} direction="row" alignItems="center" gap={1}>
                                    <Rating size='small' sx={{color: '#FE6645'}} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </Stack>
                                <Stack mt={1} direction="row" alignItems="center" gap={1}>
                                <RemoveRedEyeIcon color='grey' fontSize='small' />        
                                <Typography variant='body2' sx={{color: '#707378', fontSize: {xl: '16px', md: '16px', sm: '14px', xs: '12px'}}}>123 views</Typography>
                                </Stack>
                            </CardContent>    
                            <CardContent  sx={{padding: 0, mt: '27px'}}>
                                <Typography variant='h6' sx={{
                                color: '#000',
                                fontFamily: 'Inter',
                                fontSize: {xl: '20px', md: '16px', sm: '18px', xs: '16px'},
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '30px',  /* 150% */
                                letterSpacing: '-0.8px',
                                '--max-lines': 1, 
                                overflow: 'hidden',
                                
                                display: '-webkit-box', 
                                '-webkit-box-orient': 'vertical',
                                '-webkit-line-clamp': 'var(--max-lines)' 
                                }}>
                                Frontend
                                </Typography>
                                <Typography sx={{
                                color: 'var(--Grey-06, #707378)',
                                fontFamily: 'Inter',
                                fontSize: {xl: '18px', md: '14px', sm: '16px', xs: '14px'},
                                fontStyle: 'normal',
                                fontWeight: 500,
                                marginTop: '8px',
                                lineHeight: '30px',  /* 150% */
                                letterSpacing: '-0.8px',
                                '--max-lines': 3, 
                                overflow: 'hidden',
                                
                                display: '-webkit-box', 
                                '-webkit-box-orient': 'vertical',
                                '-webkit-line-clamp': 'var(--max-lines)'
                                }} variant='subtitle2'>
                                Ushbu tizim 8-sinf o‘quvchilarining “Informatika va axborot texnologiyalari” fanidan....
                                </Typography>

                            </CardContent>
                            <CardContent
                                orientation="horizontal"
                                sx={{ alignItems: 'center', mt: '38px', position: 'relative', padding: 0, paddingBottom: '8px !important' }}
                            >
                                <Box sx={{ width: 0, display: 'flex', gap: '8px' }}>
                                <IconButton 
                                sx={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--Grey-02, #E2E3E6)',
                                    background: '#FFF', 
                                }}  
                                >
                                    <SendOutlined sx={{fontSize: '16px', color: '#000'}}/>
                                </IconButton>
                                <IconButton
                                    sx={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--Grey-02, #E2E3E6)',
                                    background: '#FFF', 
                                    }} 
                                >
                                    <FavoriteBorderIcon sx={{fontSize: '16px', color: '#000'}} />
                                </IconButton>
                                    <Button
                                    onClick={() => detail()}
                                    sx={{ position: 'absolute', right: 0, top: {xl: -5, md: -1, sm: -3, xs: -1}, height: {xl: 40, md: 32, sm: 40, xs: 32}, 
                                    borderRadius: '10px',
                                    border: '1px solid var(--Grey-02, #E2E3E6)',
                                    padding: {xl: '8px 16px', md: '6px 12px', sm: '6px 12px', xs: '6px 12px'},
                                    fontSize: {xl: '16px', md: '12px', sm: '12px', xs: '12px'},
                                    textTransform: 'capitalize',
                                    backgroundColor: 'transparent',
                                    letterSpacing: '-0.5px', 
                                    color: 'black',
                                    '&:hover': {
                                        color: '#fff',
                                    },
                                    }}
                                    color='success'
                                    variant="contained"
                                    
                                    >
                                    Ko’proq ma’lumot
                                    </Button>
                                </Box>
                            </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sx={{marginTop: '50px'}} xl={6} md={6} sm={6} xs={12}>
                            <Card            
                            variant="outlined"
                            sx={{
                                borderRadius: '20px',
                                border: '3px solid var(--border-base-surface, #FFF)',
                                background: '#F5F5F5',
                                boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)',
                                padding: '24px',
                                '&:hover': {
                                boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                                },
                            }}
                            >
                            <CardContent sx={{padding: 0}}>
                                <img style={{width:'100%'}} src={images[2].imgPath} alt="" />
                            </CardContent>   
                            <CardContent  sx={{padding: 0, display: 'flex', justifyContent: 'space-between'}}>
                                <Stack mt={1} direction="row" alignItems="center" gap={1}>
                                    <Rating size='small' sx={{color: '#FE6645'}} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                </Stack>
                                <Stack mt={1} direction="row" alignItems="center" gap={1}>
                                <RemoveRedEyeIcon color='grey' fontSize='small' />        
                                <Typography variant='body2' sx={{color: '#707378', fontSize: {xl: '16px', md: '16px', sm: '14px', xs: '12px'}}}>123 views</Typography>
                                </Stack>
                            </CardContent>    
                            <CardContent  sx={{padding: 0, mt: '27px'}}>
                                <Typography variant='h6' sx={{
                                color: '#000',
                                fontFamily: 'Inter',
                                fontSize: {xl: '20px', md: '16px', sm: '18px', xs: '16px'},
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '30px',  /* 150% */
                                letterSpacing: '-0.8px',
                                '--max-lines': 1, 
                                overflow: 'hidden',
                                
                                display: '-webkit-box', 
                                '-webkit-box-orient': 'vertical',
                                '-webkit-line-clamp': 'var(--max-lines)' 
                                }}>
                                Frontend
                                </Typography>
                                <Typography sx={{
                                color: 'var(--Grey-06, #707378)',
                                fontFamily: 'Inter',
                                fontSize: {xl: '18px', md: '14px', sm: '16px', xs: '14px'},
                                fontStyle: 'normal',
                                fontWeight: 500,
                                marginTop: '8px',
                                lineHeight: '30px',  /* 150% */
                                letterSpacing: '-0.8px',
                                '--max-lines': 3, 
                                overflow: 'hidden',
                                
                                display: '-webkit-box', 
                                '-webkit-box-orient': 'vertical',
                                '-webkit-line-clamp': 'var(--max-lines)'
                                }} variant='subtitle2'>
                                Ushbu tizim 8-sinf o‘quvchilarining “Informatika va axborot texnologiyalari” fanidan....
                                </Typography>

                            </CardContent>
                            <CardContent
                                orientation="horizontal"
                                sx={{ alignItems: 'center', mt: '38px', position: 'relative', padding: 0, paddingBottom: '8px !important' }}
                            >
                                <Box sx={{ width: 0, display: 'flex', gap: '8px' }}>
                                <IconButton 
                                sx={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--Grey-02, #E2E3E6)',
                                    background: '#FFF', 
                                }}  
                                >
                                    <SendOutlined sx={{fontSize: '16px', color: '#000'}}/>
                                </IconButton>
                                <IconButton
                                    sx={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--Grey-02, #E2E3E6)',
                                    background: '#FFF', 
                                    }} 
                                >
                                    <FavoriteBorderIcon sx={{fontSize: '16px', color: '#000'}} />
                                </IconButton>
                                    <Button
                                    onClick={() => detail()}
                                    sx={{ position: 'absolute', right: 0, top: {xl: -5, md: -1, sm: -3, xs: -1}, height: {xl: 40, md: 32, sm: 40, xs: 32}, 
                                    borderRadius: '10px',
                                    border: '1px solid var(--Grey-02, #E2E3E6)',
                                    padding: {xl: '8px 16px', md: '6px 12px', sm: '6px 12px', xs: '6px 12px'},
                                    fontSize: {xl: '16px', md: '12px', sm: '12px', xs: '12px'},
                                    textTransform: 'capitalize',
                                    backgroundColor: 'transparent',
                                    letterSpacing: '-0.5px', 
                                    color: 'black',
                                    '&:hover': {
                                        color: '#fff',
                                    },
                                    }}
                                    color='success'
                                    variant="contained"
                                    
                                    >
                                    Ko’proq ma’lumot
                                    </Button>
                                </Box>
                            </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Stack mt={5}>
                    <Pagination sx={{margin: '0 auto'}} shape="rounded" defaultPage={3} count={10} color="success" />
                    </Stack>
                </Grid>
            </Grid>
            </Stack>
        </Container>
    </Stack>
  )
}

const navLinkStyle = {
  color: 'black',
  textDecoration: 'none',
  marginLeft: '-20px',
}

const buttonStyle = {
    textTransform: 'capitalize',
    borderRadius: 'var(--radius-xl, 12px)',
    background: 'var(--background-button-secondary, #FFF)',
    /* shadows/xs */
    boxShadow: '0px 1px 2px 0px rgba(20, 21, 26, 0.05)', 
    padding: '8px 12px',
    border: 'none',
    fontSize: '16px',
    color: '#6F717C',
    lineHeight: '24px', /* 150% */
    letterSpacing: '-0.16px', 
    '&:hover': {
        border: 'none',
    }
}

const SocialNetworkButton = styledComponent.button`
    border-radius: 10px;
    border: 1px solid var(--Grey-02, #E2E3E6);
    background: #FFF; 
    padding: 8px 8px 6px 8px;
    cursor: pointer;
    &:hover {
        background: #7CC248;
        color: white;
    }
`

export default Detail