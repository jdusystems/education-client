import { Grid, Stack, Typography, Button, Box, TextField, FormControl, FormGroup, MenuItem } from '@mui/material'
import styled from 'styled-components'
import ImgFileIcon from "../../Assets/img/free-image-file.webp" ;
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { MuiFileInput } from 'mui-file-input';
import { useState } from 'react';
import { useRef } from 'react';
//
import Places from '../../SimpleMap/SimpleMap';


function Profile() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [fileList, setFileList] = useState(null);
  const [location, setLocation] = useState('');
  const [url1, setUrl1] = useState('');
  const [url2, setUrl2] = useState('');
  const [url3, setUrl3] = useState('');
  const [url4, setUrl4] = useState('');
  const [site, setSite] = useState('');
  const[bio, setBio] = useState("");
  const [file, setFile] = React.useState(null);
  // 
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const wrapperRef = useRef(null);

  const handleChange = (newFile) => {
    setFile(newFile)
  }

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
  const onDrop = () => wrapperRef.current.classList.remove('dragover');

  const onFileDrop = (e) => {
      setFileList(e.target.files[0])
  }

  const fileRemove = (file) => {
    setFileList(null);
  }

  return (
    <Stack>
      <Typography variant='h4'>Profile</Typography>
      <Grid container mt={1} spacing={3}>
        <Grid item xl={3}>
        <Typography mb={2} variant='subtitle1'>Profile Photo...</Typography>
          <Stack>
          <DropFileInput
                style={{ borderRadius: "100%" }}
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
              >
                <DropFileInputLabel>
                  <img
                    src="https://picsum.photos/2300/2300"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "100%",
                    }}
                    alt="Upload"
                  />
                </DropFileInputLabel>
                {/* <input
                  style={dropFileInput}
                  multiple
                  type="file"
                  value=""
                  onChange={onFileDrop}
                /> */}
              </DropFileInput>

              <Grid mt={3}  
                  container
                  direction="row"
                  pl={{xl:'0%', md:'20%', sm:'38%', xs:'25%'}}>
                <Button variant="outlined" sx={{margin:'5px'}} startIcon={<CameraAltOutlinedIcon />}
                ref={wrapperRef}
                onDragEnter={onDragEnter}>
                <input
                style={dropFileInput}
                multiple
                type="file"
                value=""
                onChange={onFileDrop}/>
                Upload</Button>
              <Button variant="outlined" sx={{margin:'5px'}}>
              <DropFilePreviewItemDel onClick={() => fileRemove(0)}><DeleteOutlinedIcon/></DropFilePreviewItemDel></Button>
              </Grid>

              {
                  fileList !== null ? (
                      <Box mt={3}>
                          <Typography variant='subtitle2' fontWeight={500}>Ready to Upload</Typography>
                            <DropFilePreviewItem>
                                <img style={{width: '90px',marginRight: '20px'}} src={ImgFileIcon} alt="Logo" />
                                <DropFilePreviewItemInfo>
                                    <p>Name: {fileList.name}</p>
                                    <p>Size: {fileList.size} B</p>
                                </DropFilePreviewItemInfo>
                                
                            </DropFilePreviewItem>
                      </Box>
                  ) : null
              }
          </Stack>
        </Grid>
        <Grid item xl={9}>
          <Grid container spacing={3}>
            <Grid item xl={6}>
              <FormControl sx={{width: '100%'}}>
                <Typography variant='subtitle1'>Web site Url...</Typography>
                <Box mt={2} width='100%' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <LanguageIcon color='black' sx={{ mr: 1, my: 0.5 }} />
                  <TextField fullWidth value={site} onChange={(e) => setSite(e.target.value)} id="input-with-sx" label="Web site" variant="standard" />
                </Box>
                <Typography mt={5} variant='subtitle1'>Social Network Profile Url...</Typography>
                <Box mt={2} width='100%' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <InstagramIcon color='black' sx={{ mr: 1, my: 0.5 }} />
                  <TextField fullWidth value={url1} onChange={(e) => setUrl1(e.target.value)} id="input-with-sx" label="Instagram" variant="standard" />
                </Box>
                <Box mt={2} width='100%' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <FacebookIcon color='black' sx={{ mr: 1, my: 0.5 }} />
                  <TextField fullWidth value={url2} onChange={(e) => setUrl2(e.target.value)} id="input-with-sx" label="Facebook" variant="standard" />
                </Box>
                <Box mt={2} width='100%' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <YouTubeIcon color='black' sx={{ mr: 1, my: 0.5 }} />
                  <TextField fullWidth value={url3} onChange={(e) => setUrl3(e.target.value)} id="input-with-sx" label="Youtube" variant="standard" />
                </Box>
                <Box mt={2} width='100%' value={url4} onChange={(e) => setUrl4(e.target.value)} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <TelegramIcon color='black' sx={{ mr: 1, my: 0.5 }} />
                  <TextField fullWidth id="input-with-sx" label="Telegram" variant="standard" />
                </Box>
              </FormControl>
            </Grid>
            <Grid item xl={6}>
              <FormControl sx={{width: '100%'}}>
                <Typography variant='subtitle1'>Personal Information...</Typography>
                  <FormGroup>
                      <TextField value={fullName} onChange={(e) => {setFullName(e.target.value)}} helperText='Please enter fullName' color='success' label='FullName' required margin='normal' />
                  </FormGroup>
                  <FormGroup>
                      <TextField value={phone} onChange={(e) => {setPhone(e.target.value)}} helperText='Please enter phone' color='success' label='+998' type='number' required margin='normal' />
                  </FormGroup>
                  <FormGroup sx={{marginTop: '1rem'}}>
                    <TextField
                    id="outlined-select-currency"
                    select
                    value={region}
                    onChange={(e) => {setRegion(e.target.value)}}
                    color='success'
                    label="Region"
                    helperText="Please select Region">
                        <MenuItem  value="Buxoro Viloyati">
                            Buxoro Viloyati
                        </MenuItem>
                        <MenuItem  value="Toshkent Viloyati">
                            Toshkent Viloyati
                        </MenuItem>
                        <MenuItem  value="Toshkent Shahri">
                            Toshkent Shahri
                        </MenuItem>
                    </TextField>
                </FormGroup>
                <FormGroup sx={{marginTop: '2rem'}}>
                  <TextField
                  id="outlined-select-currency"
                  select
                  value={city}
                  onChange={(e) => {setCity(e.target.value)}}
                  color='success'
                  label="City"
                  helperText="Please select City">
                      <MenuItem  value="Buxoro Shaxar">
                          Buxoro Shaxar
                      </MenuItem>
                      <MenuItem  value="Yunusobod tumani">
                          Yunusobod tumani
                      </MenuItem>
                      <MenuItem  value="Chilonzor tumani">
                          Chilonzor tumani
                      </MenuItem>
                  </TextField>
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={6}>
            <FormControl fullWidth>
              <FormGroup>
                <Typography>Bio:</Typography>
                  <TextField value={bio} onChange={(e) => {setBio(e.target.value)}} helperText='Please enter description' color='success' label='Bio' required margin='normal' />
              </FormGroup>
            </FormControl>
        </Grid>
        <Grid item xl={6}>
          <FormControl fullWidth>
            <FormGroup>
              <Typography>Certificate:</Typography>
              <MuiFileInput color='success' helperText='Enter your Certificate file' margin='normal' value={file} onChange={handleChange} />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xl={6}>
          <Typography mb={2}>Location:</Typography>
          <Places/>
        </Grid>
        <Grid item xl={12}>
          <Button color='secondary' sx={{marginTop: '2.1rem',}} variant="contained">
            Edit Personal Information
          </Button>
        </Grid>
        <Grid item mt={3} xl={4}><Typography variant='subtitle1' gutterBottom fontWeight='bold'>Account:</Typography>
          <FormControl sx={{width: '100%'}}>
                <FormGroup>
                    <TextField value={email} onChange={(e) => {setEmail(e.target.value)}} helperText='Please enter Email' color='success' label='Email' required margin='normal' />
                </FormGroup>
                <FormGroup>
                    <TextField value={newPassword} onChange={(e) => {setNewPassword(e.target.value)}} helperText='Please enter new password' color='success' label='New Password' required margin='normal' />
                </FormGroup>
                <FormGroup>
                    <TextField value={resetPassword} onChange={(e) => {setResetPassword(e.target.value)}} helperText='Please enter Reset password' color='success' label='Reset Password' required margin='normal' />
                </FormGroup>
            </FormControl>
            <Button sx={{marginTop: '2.1rem',}} variant="contained" color="secondary">
              Edit Account
            </Button>
        </Grid>
      </Grid>
    </Stack>
  )
}


const DropFileInput = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    border: 2px dashed #BC002D;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #07255681;
    &:hover , &.dragover {
        opacity: 0.6
    }
`

const DropFileInputLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const DropFilePreviewItem = styled.div`
    position: relative;
    display: flex;
    margin-top : 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
    background-color: #07255681;
    &:hover {
        box-shadow: 0px 10px 10px -10px rgba(0,0,0,0.75);
        
    }
` 
const DropFilePreviewItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
` 
const DropFilePreviewItemDel = styled.span`
    /* background-color: #ee3d3d;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    &:hover {
        opacity: 1;
    } */
` 

const dropFileInput = {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
}

export default Profile