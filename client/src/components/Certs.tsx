import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia } from '@mui/material';

import cert1 from '../assets/cert-1.png';
import cert2 from '../assets/cert-2.png';
import cert3 from '../assets/cert-3.png';
import cert4 from '../assets/cert-4.png';
import cert5 from '../assets/cert-5.png';

const certificateImages = [cert1, cert2, cert3, cert4, cert5];

const CertificatesSection = () => {
  return (
    <Box id="certification" sx={{ backgroundColor: '#121B25', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          align="center"
          sx={{
            color: '#ECF0F1',
            textShadow: '0 0 8px #1ABC9C', // Soft glow effect on text
          }}
        >
          Certifications
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          align="center"
          sx={{
            color: '#B0BEC5', // Soft secondary color for text
          }}
        >
          Credentials and certifications that validate my journey in development, AI, and data.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {certificateImages.map((src, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  width: 380,
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(26, 188, 156, 0.3)', // Light glow shadow effect
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)', // Slightly enlarge on hover
                    boxShadow: '0 6px 30px rgba(26, 188, 156, 0.5)', // Increase shadow on hover
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={src}
                  alt={`Certificate ${index + 1}`}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CertificatesSection;

