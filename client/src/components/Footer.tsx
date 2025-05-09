import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#0f172a', color: '#fff', py: 4 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: '#1ABC9C',
            textShadow: '0 0 8px #1ABC9C', 
          }}
        >
          I Know AI. Do You Know AI? Let's Connect.
        </Typography>

        <Stack direction="row" justifyContent="center" spacing={2} mb={2}>
          <IconButton
            component="a"
            href="https://github.com/NoobAtem"
            target="_blank"
            rel="noopener"
            sx={{
              color: 'white',
              '&:hover': {
                color: '#1ABC9C', 
                transform: 'scale(1.1)', 
                transition: '0.3s ease-in-out',
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/isiah-jordan-dimaunahan-27aba2292"
            target="_blank"
            rel="noopener"
            sx={{
              color: 'white',
              '&:hover': {
                color: '#1ABC9C', 
                transform: 'scale(1.1)', 
                transition: '0.3s ease-in-out',
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/isiah.jordan.2024"
            sx={{
              color: 'white',
              '&:hover': {
                color: '#1ABC9C', 
                transform: 'scale(1.1)', 
                transition: '0.3s ease-in-out',
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>

        <Typography
          variant="body2"
          color="gray"
          sx={{
            color: '#B0BEC5',
            textShadow: '0 0 6px #1ABC9C', 
          }}
        >
          © {new Date().getFullYear()} Isiah Jordan Dimaunahan. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

