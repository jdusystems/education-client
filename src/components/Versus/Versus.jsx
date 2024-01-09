import { Stack, Grid, Paper, IconButton, Button, CardActions, Pagination, InputBase, FormControl, Select, MenuItem, Box, SvgIcon,  Typography, Card, CardMedia, CardActionArea, CardContent, Container  } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import vs from "../Assets/img/Versus_icon.png";
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { BarPlot } from '@mui/x-charts';
import { useState } from 'react';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#7CC248' : '#abd6f6',
    },
  }));

  const BorderLinearProgressBlue = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1495E0' : '#abd6f6',
    },
  }));

function Versus() {
    const [academy, setAcademy] =useState("University")
    const handleChange = (event) => {
        setAcademy(event.target.value);
      };
  return (
    <Stack>
        <Container>
        <Grid container spacing={3} marginTop='32px' alignItems='center'>
            <Grid item mt={3} xl={6} md={6} sm={12} xs={12}>
                <Typography variant='h6' sx={{
                    color: '#000',
                    /* Large Title/2 */
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '30px', /* 125% */
                    letterSpacing: '-1px', 
                }} fontWeight='bold'>Taqqoslamoqchi bo'lgan talim muassasini tanlang</Typography>
            </Grid>
            <Grid item mt={3} xl={6} md={6} sm={12} xs={12}>
                <FormControl fullWidth >
                  <Select

                    defaultValue='English'
                    id="demo-select-small"
                    color='primary'
                    value={academy}
                    onChange={handleChange}
                    renderValue={(value) => {
                      return (
                        <Box sx={{ display: "flex", gap: 1, fontSize: '18px' }}>
                          {value}
                        </Box>
                      );
                    }}
                  >
                    <MenuItem value='University'> University</MenuItem>
                    <MenuItem value='Trining Center'>Trining Center</MenuItem>
                    <MenuItem value='School'>School</MenuItem>
                    <MenuItem value='Pre School'>Pre School</MenuItem>
                  </Select>
                </FormControl>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid mt={3} item xl={6} md={12} sm={12} xs={12}>
                <Paper
                  component="form"
                  sx={{display: 'flex', alignItems: 'center', width: '100%' }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Academy Name..."
                  />
                  <IconButton  type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>  
                <Grid container mt={2} spacing={3}>
                    <Grid item xl={6} md={4} sm={6} xs={12}>
                        <Card sx={{
                            border: '3px solid var(--border-base-surface, #FFF); background: #F5F5F5',
                            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)' 
                        }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2000/2000"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={30} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgress variant="determinate" value={40} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgress variant="determinate" value={90} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" sx={{
                                    padding: '12px 16px',
                                    marginTop: '10px',
                                    borderRadius: '10px',
                                    border: '1px solid #E2E3E6',
                                    background: '#FFF',
                                    color: 'black',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '26px', /* 144.444% */
                                    letterSpacing: '-0.6px',
                                    textTransform: 'capitalize', 
                                }} variant='contained' color='grey'>
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={6} md={4} sm={6} xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2003/2003"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={30} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgress variant="determinate" value={40} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgress variant="determinate" value={90} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" sx={{
                                    padding: '12px 16px',
                                    marginTop: '10px',
                                    borderRadius: '10px',
                                    border: '1px solid #E2E3E6',
                                    background: '#FFF',
                                    color: 'black',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '26px', /* 144.444% */
                                    letterSpacing: '-0.6px',
                                    textTransform: 'capitalize', 
                                }} variant='contained' color='grey'>
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={6} md={4} sm={6} xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2002/2002"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgress variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgress variant="determinate" value={30} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgress variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgress variant="determinate" value={40} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgress variant="determinate" value={90} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" sx={{
                                    padding: '12px 16px',
                                    marginTop: '10px',
                                    borderRadius: '10px',
                                    border: '1px solid #E2E3E6',
                                    background: '#FFF',
                                    color: 'black',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '26px', /* 144.444% */
                                    letterSpacing: '-0.6px',
                                    textTransform: 'capitalize', 
                                }} variant='contained' color='grey'>
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Stack my={5}>
                    <Pagination sx={{margin: '0 auto'}} shape="rounded" defaultPage={6} count={10} color="success" />
                </Stack>
            </Grid>
            <Grid mt={3} item xl={6} md={12} sm={12} xs={12}>
                <Paper
                  component="form"
                  sx={{display: 'flex', alignItems: 'center', width: '100%' }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Academy Name..."
                  />
                  <IconButton  type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
                <Grid container mt={2} spacing={3}>
                <Grid item xl={6} md={4} sm={6} xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2020/2020"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={30} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={40} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={90} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" sx={{
                                    padding: '12px 16px',
                                    marginTop: '10px',
                                    borderRadius: '10px',
                                    border: '1px solid #E2E3E6',
                                    background: '#FFF',
                                    color: 'black',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '26px', /* 144.444% */
                                    letterSpacing: '-0.6px',
                                    textTransform: 'capitalize', 
                                }} variant='contained' color='grey'>
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={6} md={4} sm={6} xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2013/2013"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={30} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={40} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={90} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" sx={{
                                    padding: '12px 16px',
                                    marginTop: '10px',
                                    borderRadius: '10px',
                                    border: '1px solid #E2E3E6',
                                    background: '#FFF',
                                    color: 'black',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '26px', /* 144.444% */
                                    letterSpacing: '-0.6px',
                                    textTransform: 'capitalize', 
                                }} variant='contained' color='grey'>
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xl={6} md={4} sm={6} xs={12}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://picsum.photos/2004/2004"
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="subtitle1" fontWeight='bold' component="div">
                                    Uniersity
                                </Typography>
                                    <Typography mt={1} variant='body2'>Category 1</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={60} />
                                    <Typography mt={1} variant='body2'>Category 2</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={30} />
                                    <Typography mt={1} variant='body2'>Category 3</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={70} />
                                    <Typography mt={1} variant='body2'>Category 4</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={40} />
                                    <Typography mt={1} variant='body2'>Category 5</Typography>
                                    <BorderLinearProgressBlue variant="determinate" value={90} />
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button  size="small" sx={{
                                    padding: '12px 16px',
                                    marginTop: '10px',
                                    borderRadius: '10px',
                                    border: '1px solid #E2E3E6',
                                    background: '#FFF',
                                    color: 'black',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    lineHeight: '26px', /* 144.444% */
                                    letterSpacing: '-0.6px',
                                    textTransform: 'capitalize', 
                                }} variant='contained' color='grey'>
                                Comparison
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
                <Stack my={5}>
                    <Pagination sx={{margin: '0 auto'}} shape="rounded" defaultPage={3} count={10} color="success" />
                </Stack>
            </Grid>
        </Grid>
        <Typography sx={{
            marginTop: '52px',fontFamily: 'Inter',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '30px', /* 125% */
            letterSpacing: '-1px', }} variant='h6' fontWeight='bold'>Taqqoslash natijasi</Typography>
        <Grid container spacing={5} mt='52px'>
            <Grid item xl={6} md={6} sm={6} xs={12}>
                <Card sx={{padding: '0 0 24px 0', 
                            border: '3px solid var(--border-base-surface, #FFF); background: #F5F5F5',
                            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)' }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="340"
                        image="https://picsum.photos/2600/2600"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography align='center' gutterBottom variant="h6" fontWeight='bold' component="div">
                            Uniersity
                        </Typography>
                            <Typography mt={1} variant='body2'>Category 1</Typography>
                            <BorderLinearProgress variant="determinate" value={60} />
                            <Typography mt={1} variant='body2'>Category 2</Typography>
                            <BorderLinearProgress variant="determinate" value={30} />
                            <Typography mt={1} variant='body2'>Category 3</Typography>
                            <BorderLinearProgress variant="determinate" value={70} />
                            <Typography mt={1} variant='body2'>Category 4</Typography>
                            <BorderLinearProgress variant="determinate" value={40} />
                            <Typography mt={1} variant='body2'>Category 5</Typography>
                            <BorderLinearProgress variant="determinate" value={90} />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xl={6} md={6} sm={6} xs={12}>
            <Card sx={{padding: '0 0 24px 0', 
                            border: '3px solid var(--border-base-surface, #FFF); background: #F5F5F5',
                            boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 4px -2px rgba(0, 0, 0, 0.04)' }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="340"
                    image="https://picsum.photos/2500/2500"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography align='center' gutterBottom variant="h6" fontWeight='bold' component="div">
                        Uniersity
                    </Typography>
                        <Typography mt={1} variant='body2'>Category 1</Typography>
                        <BorderLinearProgressBlue variant="determinate" value={50} />
                        <Typography mt={1} variant='body2'>Category 2</Typography>
                        <BorderLinearProgressBlue variant="determinate" value={70} />
                        <Typography mt={1} variant='body2'>Category 3</Typography>
                        <BorderLinearProgressBlue variant="determinate" value={80} />
                        <Typography mt={1} variant='body2'>Category 4</Typography>
                        <BorderLinearProgressBlue variant="determinate" value={80} />
                        <Typography mt={1} variant='body2'>Category 5</Typography>
                        <BorderLinearProgressBlue variant="determinate" value={50} />
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
        </Grid>
        <Grid container marginTop='32px'>
            <Grid item xl={12} md={12} sm={12} xs={12} display='flex' justifyContent='flex-end' gap={1}>
                <Stack mt={1} direction="row" alignItems="center" gap={1}>
                    <FiberManualRecordIcon sx={{color: '#7CC248' }} />
                    <Typography sx={{
                        fontSize: '14px',
                    }}>University 1</Typography>
                </Stack>
                <Stack mt={1} direction="row" alignItems="center" gap={1}>
                    <FiberManualRecordIcon sx={{color: '#1495E0' }} />
                    <Typography sx={{
                        fontSize: '14px',
                    }}>University 1</Typography>
                </Stack>
            </Grid>
            <Grid item xl={12} md={12} sm={12} xs={12}>
                <ResponsiveChartContainer
                series={[
                    {
                        type: 'bar',
                        color: "#7CC248",
                        data: [60, 30, 70, 40, 90],
                    },
                    {
                        type: 'bar',
                        color: '#1495E0',
                        data: [50, 70, 80, 80, 50],
                    },
                ]}
                xAxis={[
                    {
                    data: ['Category 1', 'Category2', 'Category 3', 'Category 4', 'Category 5'],
                    scaleType: 'band',
                    id: 'x-axis-id',
                    },
                ]}
                height={550}
                >
                    <BarPlot />
                    <ChartsXAxis  position="bottom" axisId="x-axis-id" />
                </ResponsiveChartContainer>
            </Grid>
        </Grid>
        </Container>
    </Stack>
  )
}

export default Versus