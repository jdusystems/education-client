import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import logo from "../Assets/img/edu-map-logo.png"
import { register_api_url, baseUrl } from '../../utils/API';
import axios from 'axios';
import { Stack } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="left"  {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        JDU System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.


function SignUp() {
    const navigate = useNavigate();
    const [role, setRole] = useState(false);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorFulName, setErrorFulName] = useState(false);
    const [errorPass1, setErrorPass1] = useState(false);
    const [errorPass2, setErrorPass2] = useState(false);
    const [helperTextEmail, setHelperTextEmail] = useState('');
    const [helperTextFullName, setHelperTextFullName] = useState('');
    const [helperTextPass1, setHelperTextPass1] = useState('');
    const [helperTextPass2, setHelperTextPass2] = useState('');
    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": baseUrl
    }
    const formData = new FormData();
    formData.append('email', email);
    formData.append('fullname', fullName);
    formData.append('password', pass1);
    formData.append('password_confirmation', pass2);
    formData.append('user_role', role === true ? "school" : "user");

    function handleChecked () {
      if (role) {
        setRole(false);
      } else {
        setRole(true);
      }
    }

    function signUp () {
      if (email !== "" && fullName !== "" && pass1 !== "" && pass2 !== "" && pass1 === pass2 && pass1.length >= 6 && email.includes('@')){
          axios.post(register_api_url(), formData, {headers})
          .then((res) => {
            console.log(res.data)
          //  navigate("/verification", {state: {email: email}})
          })
          .catch((err) =>{
            console.log(err);
            // if (err.response.data.error === 'User already exists'){
            //   alert('User already exists')
            // }
          })
      } else {
          if (email === ""){
              setHelperTextEmail("Enter your email...");
              setErrorEmail(true);
          } else if (!email.includes('@')){
              setHelperTextEmail("Include the @ sign in the email...");
              setErrorEmail(true);
          } else{
              setHelperTextEmail("");
              setErrorEmail(false);
          }
          if (fullName === ""){
              setHelperTextFullName("Enter your full name...");
              setErrorFulName(true);
          } else {
              setHelperTextFullName("");
              setErrorFulName(false);
          }
          if (pass1 === ""){
              setHelperTextPass1("Enter your password...")
              setErrorPass1(true);
          } else if (pass1.length < 6){
              setHelperTextPass1("Enter a password longer than 6 characters") 
              setErrorPass1(true)   
          }else {
              setHelperTextPass1("")
              setErrorPass1(false);
          }
          if (pass2 === ""){
              setHelperTextPass2("Enter your reset password...")
              setErrorPass2(true);
          }else if (pass1 !== pass2) {
              setHelperTextPass2("Enter the password above...")
              setErrorPass2(true);
          } else {
              setHelperTextPass2("");
              setErrorPass2(false);
          }
      }
      
  }

  return (
      <Stack sx={{backgroundColor: 'var(--background-button-secondary-hover, #F7F7F8)', minHeight: '100vh'}}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
            width: {xl: '465px', md: '465px', sm: '465px', xs: '100%'},
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Link sx={{cursor: 'pointer', margin:'0 auto'}} onClick={() => {navigate('/home')}} >
                <img src={logo} width={126} alt="Edu Map" />
            </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '32px',
            width: {xl: '465px', md: '465px', sm: '465px', xs: '100%'},
            marginTop: '53px',
            borderRadius: '16px', backgroundColor: '#fff'
          }}
        >
          
          <Typography mt={2} component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate>
            <Grid container spacing={2}>             
              <Grid item xs={12}>
              <Typography variant='body2' sx={{
              color: 'var(--Grey-06, #707378)',
              /* Body 16 / Regular */
              fontFamily: 'Inter',
              fontSize: '16px',
              marginTop: '24px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px', /* 150% */
              letterSpacing: '-0.5px',
            }}>Telefon raqami</Typography>
                <TextField
                  required
                  fullWidth
                  id="email"
                  error={errorEmail}  helperText={helperTextEmail} 
                  label="+998"
                  color='success'
                  sx={{marginTop: '8px'}}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                  <Typography variant='body2' sx={{
                  color: 'var(--Grey-06, #707378)',
                  /* Body 16 / Regular */
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  marginTop: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '24px', /* 150% */
                  letterSpacing: '-0.5px' 
                }}>To'liq ism</Typography>
                <TextField
                  required
                  fullWidth
                  error={errorFulName}  helperText={helperTextFullName}
                  name="FullName"
                  sx={{marginTop: '8px'}}
                  value={fullName}
                  color='success'
                  onChange={(e) => setFullName(e.target.value)}
                  label="FullName"
                  type="FullName"
                  id="FullName"
                  autoComplete="FullName"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant='body2' sx={{
                  color: 'var(--Grey-06, #707378)',
                  /* Body 16 / Regular */
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  marginTop: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '24px', /* 150% */
                  letterSpacing: '-0.5px' 
                }}>Parol</Typography>
                <TextField
                  autoComplete="password"
                  name="Password"
                  required
                  type='password'
                  sx={{marginTop: '8px'}}
                  color='success'
                  error={errorPass1} helperText={helperTextPass1}
                  fullWidth
                  value={pass1}
                  onChange={(e) => setPass1(e.target.value)}
                  id="Password"
                  label="Password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Typography variant='body2' sx={{
                  color: 'var(--Grey-06, #707378)',
                  /* Body 16 / Regular */
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  marginTop: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '24px', /* 150% */
                  letterSpacing: '-0.5px' 
                }}>Parolni tasdiqlang</Typography>
                <TextField
                  required
                  fullWidth
                  id="reset-password"
                  value={pass2}
                  type='password'
                  color='success'
                  sx={{marginTop: '8px'}}
                  onChange={(e) => setPass2(e.target.value)}
                  error={errorPass2}  helperText={helperTextPass2}
                  label="Reset Password"
                  name="reset-password"
                  autoComplete="reset-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={role} onChange={handleChecked} color="success" />}
                  label="Siz Talim muassasasimisiz"
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={signUp}
              color='success'
              sx={{ mt: '24px', mb: 2, borderRadius: '10px', fontSize: '18px', }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => {navigate('/sign-in')}} sx={{color: 'var(--Grey-06, #707378)' , fontSize: '14px', cursor: 'pointer'}} variant="body2">
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: '32px', mb: 4 }} />
      </Container>
      </Stack>
  );
}

export default SignUp
