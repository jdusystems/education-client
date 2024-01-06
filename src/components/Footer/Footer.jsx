import { Grid, Stack, Typography, Demo, List, ListItem, ListItemText, ListItemIcon, Container } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  return (
    <Stack sx={{background: '#F5F5F5', marginTop: '20px'}}>
      <Container>
        <Grid container py={6}>
          <Grid item mt={{xl: 0, md: 3, sm: 3, xs: 3}} xl={3} md={4} sm={6} xs={12}>
            <Typography variant='subtitle2' fontWeight='bold'>Asosiy</Typography>
            <List>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>Aloqa</NavLink>
                  <NavLink style={navLinkStyle}>Categoriyalar</NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>Categoriyalar</NavLink>
                </ListItem>
            </List>
          </Grid>
          <Grid item mt={{xl: 0, md: 3, sm: 3, xs: 3}} xl={6} md={4} sm={6} xs={12}>
            <Typography variant='subtitle2' fontWeight='bold'>Ta'lim</Typography>
            <List>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>O'quv Markaz</NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>Universitet</NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>Maktab</NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}>Maktabgacha Talim</NavLink>
                </ListItem>
            </List>
          </Grid>
          <Grid item mt={{xl: 0, md: 3, sm: 3, xs: 3}} xl={3} md={4} sm={6} xs={12}>
            
            <Typography variant='subtitle2' fontWeight='bold'>Our Social Networks</Typography>
            <List sx={{
              display: 'flex',
              justifyContent: "flex-start",
              alignItems: 'center',
            }}>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}><InstagramIcon  sx={{color: '#f0040f'}}/></NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}><FacebookIcon  sx={{color: '#3b5998'}} /></NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}><TelegramIcon  sx={{color: '#23a0dd'}} /></NavLink>
                </ListItem>
                <ListItem sx={{paddingLeft: 0}}>
                  <NavLink style={navLinkStyle}><YouTubeIcon  sx={{color: 'red'}} /></NavLink>
                </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container py='32px' borderTop='solid 1px #E2E3E6'>
            <Grid item xl={12} textAlign='center'>
              <Typography sx={{fontSize: '12px', color: '#707378'}} variant='subtitle2'>&copy; 2023 JDU – Copyright JDU System 2023.</Typography>
            </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

const navLinkStyle = {
  color: '#707378',
  textDecoration: 'none',
  fontFamily: 'Inter',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '26px', /* 144.444% */
  letterSpacing: '-0.6px',
}

export default Footer