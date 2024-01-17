import { Grid, Stack, Typography, Rating, Container, Card, CardContent, Avatar, Box, Fab, Button, IconButton } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import academyLogo from '../../Assets/img/academy-logo.png'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SendOutlined from '@mui/icons-material/SendOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TagIcon from '@mui/icons-material/Tag';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// 
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function Academy() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const naigate = useNavigate();

  function detail () {
    naigate('/detail')
  }

  return (
    <Stack>
      <Container>
      <Grid container>
          <Grid item xl={12} mt={2}>
            <NavLink style={navLinkStyle}>
              <Typography variant='h6' sx={{
                color: '#000',
                /* Large Title/2 */
                fontFamily: 'Inter',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '30px', /* 125% */
                letterSpacing: '-1px',
                marginTop: '16px' 
              }}>Maktabgacha Talim <ArrowOutwardIcon sx={{fontSize: 18}}/></Typography>
            </NavLink>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item sx={{marginTop: '50px'}} xl={4} md={4} sm={6} xs={12}>
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
          <Grid item sx={{marginTop: '50px'}} xl={4} md={4} sm={6} xs={12}>
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
          <Grid item sx={{marginTop: '50px'}} xl={4} md={4} sm={6} xs={12}>
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
        <Grid container mt={4}>
          <Grid item xl={12} md={12} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
              <Button variant='contained' color='success' sx={{height: 44, width: 200}}>More +9 Academy</Button>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

const navLinkStyle = {
  color: '#072556',
  textDecoration: 'none'
}

export default Academy