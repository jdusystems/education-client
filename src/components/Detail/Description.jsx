import { Box, Stack, Typography, CardContent,IconButton, } from '@mui/material';
import SendOutlined from '@mui/icons-material/SendOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';

function Description() {
  return (
    <Stack>
        <Typography mt='40px' sx={{
          color: '#000',
          fontFamily: 'Inter',
          fontSize: '28px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '22px', /* 78.571% */
          letterSpacing: '-0.4px' 
        }} variant='body1' fontWeight='bold'>Description</Typography>
        <Box mt={2}>
            <img src="https://images.uzum.uz/cl1od1nn7c6qm23hg060/original.jpg" width='100%' alt="" />
        </Box>
        <CardContent
                orientation="horizontal"
                sx={{ alignItems: 'center', mt: '38px', position: 'relative', padding: 0, paddingBottom: '8px !important' }}
              >
                <Box sx={{ width: 0, display: 'flex', gap: '20px' }}>
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
                </Box>
              </CardContent>
    </Stack>
  )
}

export default Description;