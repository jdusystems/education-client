import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '../Assets/img/edu-map-logo.png'
import { useNavigate } from 'react-router-dom';
import { baseUrl, login_api_url, forgot_password_api_url } from '../../utils/API';
import axios from 'axios';
import { Stack } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="left" {...props}>
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



function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [helperTextEmail, setHelperTextEmail] = React.useState('');
    const [helperTextPassword, setHelperTextPassword] = React.useState('');
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [errorPassword, setErrorPassword] = React.useState(false);
    const [isAgreeEmail, setIsAgreeEmail] = React.useState (false);
    const [isAgreeForgetPassword, setIsAgreeForgetPassword] = React.useState(false);
    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": baseUrl
    }

    function login () {
      if(email !== '' && password !== '' && email.includes('@') && password.length >= 6){
        setErrorEmail(false);
        setErrorPassword(false)
        setHelperTextEmail("");
        setHelperTextPassword("");
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        axios.post(login_api_url(), formData, {headers})
        .then ((response) => {
          console.log(response.data)
            // localStorage.setItem('accessToken', response.data.token); 
            // localStorage.setItem('refreshToken', response.data.detail.tokens.refresh); 
            navigate("/home")   
        }).catch ((err) => {
          console.log(err)
            if(err.response.data.message === 'Email is not registered'){
                setIsAgreeForgetPassword(false);
                setIsAgreeEmail(true);
            }else if(err.response.data.message === 'password is incorrect'){
                setIsAgreeEmail(false);
                setIsAgreeForgetPassword(true);
            }
        })
    } else {
        if (email === ""){
            setHelperTextEmail("Enter your email...");
            setErrorEmail(true);
        } else if (!email.includes('@')) {
            setHelperTextEmail("Include the @ sign in the email...");
            setErrorEmail(true);
        } else {
            setHelperTextEmail("");
            setErrorEmail(false);
        }
        if (password === ""){
            setHelperTextPassword("Enter your password...");
            setErrorPassword(true);
        }else if (password.length < 7) {
            setHelperTextPassword("Enter a password longer than 6 characters...");
            setErrorPassword(true);
        } else {
            setHelperTextPassword("");
            setErrorPassword(false);
        }
    }
    }

    function forgotPassword () {
      axios.post(forgot_password_api_url(), {email: email}, {headers})
      .then((res) => {
        navigate("/change-password", {state: {email: email}})
      })
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
            width: {xl: '465px', md: '465px', sm: '465px', xs: '100%'},
            flexDirection: 'column',
            alignItems: 'center',
            padding: '32px',
            marginTop: '53px',
            borderRadius: '16px', backgroundColor: '#fff'
          }}
        >
            
          <Typography mt={2} component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate>
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
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color='success'
              id="email"
              error={errorEmail}
              helperText={helperTextEmail}
              label="+998"
              name="email"
              autoComplete="email"
              autoFocus
            />
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
              margin="normal"
              required
              color='success'
              fullWidth
              value={password}            
              error={errorPassword}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              helperText={helperTextPassword}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {isAgreeEmail ? <Typography variant='subtitle1' color='error'>Email topilmadi. Iltimos ro'yxatdan o'ting!!!</Typography>: 
            isAgreeForgetPassword ? <Typography variant='subtitle1' color='error'>Parol xato !!!</Typography> : ""}
            <Button
              onClick={login}
              color='success'
              fullWidth
              variant="contained"
              sx={{ mt: '24px', mb: 2, borderRadius: '10px', fontSize: '18px', }}
            >
              Sign In
            </Button>
            <Grid container sx={{marginTop: '24px'}}>
              <Grid item xs>
                <Link href="#" onClick={forgotPassword} color='primary' sx={{color: 'black', fontSize: '14px'}} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" onClick={() => {navigate("/sign-up")}} sx={{color: 'var(--Grey-06, #707378)' , fontSize: '14px'}} color='primary' variant="body2">
                  {"Sign Up"}
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

export default SignIn;
