import { Stack, Grid, Typography, Card, Button, CardContent, Container, Box, Paper, InputBase } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import bannerBg from '../../Assets/img/banner-bg.png'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

function Banner() {
  return (
    <Stack>
      <Stack sx={{
        height: '786px',
        width: '100%',
        backgroundImage: `url(${bannerBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }} display='flex' justifyContent='center' alignItems='center'>
        <Box sx={{
          display: 'flex',
          width: {xl: '896px', md: '80%', sm: '90%', xs: '100%'},
          padding: {xl: '32px 64px', md: '32px 64px', sm: '16px 32px', xs: '16px 32px'},
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--spacing-20, 20px)',
          borderRadius: '32px',
          backdropFilter: 'blur(6px)',  
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}>
          <Typography variant='h6'
          sx={{
            color: '#000',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: {xl: '40px', md: '32px', sm: '24px', xs: '22px'},
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '40px',
            letterSpacing: '-1.6px',
            marginTop: '20px', 
          }}>
            Biz bilan talablarga oson
          </Typography>
          <Typography
            sx={{
              color: '#707378',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: {xl: '20px', md: '18', sm: '16', xs: '14'},
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '30px', /* 150% */
              letterSpacing: '-1px', 
              alignSelf: 'stretch', 
              marginTop: '20px', 
            }}  
          variant='body1' >
            Amaliy yo'nalish. Amerika ta'lim tizimi talabalarga Real hayotda yordam beradigan amaliy bilimlarni beradi. Bu, boshqa narsalar qatori, sog'liqni saqlash ta'limi, to'g'ri ovqatlanish, jinsiy tarbiya va boshqalar bo'yicha darslar mavjudligida aks etadi. Ta'lim muassasalarini o'zgartirish. Ko'pgina Amerika maktablari faqat bitta darajadagi ta'limni ta'minlaydi. Ya'ni, bitta binoda boshlang'ich maktab
          </Typography>
          <Paper
          component="form"
          sx={{ display: 'flex', alignItems: 'center', width: {xl: '604px', md: '100%', sm: '100%', xs: '100%'}, height: 50, borderRadius: '50px 20px 20px 50px'  }}
        >
          <InputBase
            sx={{ pl: 2, flex: 1, border: '1px solid #7CC248', fontSize: '14px', borderRadius: '50px 0 0 50px', height: 50,}}
            placeholder="Qiduruv"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Button color='success' variant='contained' sx={{ 
            borderRadius: '0px 10px 10px 0px', 
            height: 50,
            width: '50px',
            border: '1px solid #7CC248'
           }} aria-label="search">
            <SearchIcon sx={{fontSize: '34px'}} />
          </Button>
        </Paper>
        </Box>
      </Stack>
      <Container>
        <Grid container spacing={2} my={2}>
          <Grid item xl={3} md={4} sm={6} xs={12}>
            <Card
            variant="outlined"
            sx={{
              borderRadius: '20px',
              height: '100%',
              position: 'relative',
              border: 'solid 3px #fff',
              color: "#000",
              textAlign: 'center',
              background: '#F5F5F5',
              boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)', 
              '&:hover': {
                boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                cursor: 'pointer',
                background: '#7CC248',
                color: 'white',
                transition: '0.5s',
              },
            }}>
              <CardContent>
                <LocalLibraryIcon sx={{fontSize: '100px'}} />
              </CardContent>
              <CardContent>
                <Typography sx={{marginTop: '-30px', fontSize: '24px' }} variant='h6'>Training Center</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={3} md={4} sm={6} xs={12}>
            <Card
            variant="outlined"
            sx={{
              borderRadius: '20px',
              height: '100%',
              position: 'relative',
              border: 'solid 3px #fff',
              color: "#000",
              textAlign: 'center',
              background: '#F5F5F5',
              boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)', 
              '&:hover': {
                boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                cursor: 'pointer',
                background: '#7CC248',
                color: 'white',
                transition: '0.5s',
              },
            }}>
              <CardContent>
                <AccountBalanceIcon sx={{fontSize: '100px'}} />
              </CardContent>
              <CardContent>
                <Typography sx={{marginTop: '-30px', fontSize: '24px' }} variant='h6'>University</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={3} md={4} sm={6} xs={12}>
            <Card
            variant="outlined"
            sx={{
              borderRadius: '20px',
              height: '100%',
              position: 'relative',
              border: 'solid 3px #fff',
              color: "#000",
              textAlign: 'center',
              background: '#F5F5F5',
              boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)', 
              '&:hover': {
                boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                cursor: 'pointer',
                background: '#7CC248',
                color: 'white',
                transition: '0.5s',
              },
            }}>
              <CardContent>
                <SchoolIcon sx={{fontSize: '100px'}} />
              </CardContent>
              <CardContent>
                <Typography sx={{marginTop: '-30px', fontSize: '24px' }} variant='h6'>School</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xl={3} md={4} sm={6} xs={12}>
            <Card
            variant="outlined"
            sx={{
              borderRadius: '20px',
              height: '100%',
              position: 'relative',
              border: 'solid 3px #fff',
              color: "#000",
              textAlign: 'center',
              background: '#F5F5F5',
              boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)', 
              '&:hover': {
                boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                cursor: 'pointer',
                background: '#7CC248',
                color: 'white',
                transition: '0.5s', 
              },
            }}>
              <CardContent>
                <EscalatorWarningIcon sx={{fontSize: '100px'}} />
              </CardContent>
              <CardContent>
                <Typography sx={{marginTop: '-30px', fontSize: '24px' }} variant='h6'>Pre School</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

export default Banner