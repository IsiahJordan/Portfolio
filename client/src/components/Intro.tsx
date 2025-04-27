import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import ContactModal from './Contacts';
import FormalImage from "../assets/formal.png";

const HeroSection: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('home');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <Box
        id="home"
        sx={{
          flexGrow: 1,
          px: 4,
          py: 8,
          backgroundColor: '#34495E',
          position: 'relative',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: '350px',
                borderRadius: '50%',
                boxShadow: '0 0 30px rgba(26, 188, 156, 0.6)',
                transition: 'transform 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {!imageLoaded && (
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1ABC9C, #16A085)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    animation: 'pulse 1.5s infinite ease-in-out',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <Typography variant="h6" color="white" sx={{ fontWeight: 'bold' }}>Loading...</Typography>
                </Box>
              )}
              <Box
                component="img"
                src={FormalImage}
                alt="Formal Portrait"
                onLoad={() => setImageLoaded(true)}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  opacity: imageLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              color: '#ECF0F1',
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{
                textShadow: '0 0 10px #1ABC9C',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
                wordBreak: 'break-word',
                whiteSpace: 'normal',
              }}
            >
              Hello, I Am{' '}
              <Box component="span" sx={{ color: '#1ABC9C' }}>
                Isiah Jordan <br/> Dimaunahan
              </Box>
            </Typography>

            <Typography
              variant="h5"
              color="#95A5A6"
              paragraph
              sx={{
                marginBottom: 2,
                fontSize: '1.2rem',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
              }}
            >
              I know AI. Do you know AI?
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                marginBottom: 3,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
              }}
            >
              Let’s build the next big thing together.
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={() => setModalOpen(true)}
              sx={{
                backgroundColor: '#1ABC9C',
                color: '#2C3E50',
                fontWeight: 'bold',
                boxShadow: '0 0 12px #1ABC9C',
                '&:hover': {
                  backgroundColor: '#16A085',
                  boxShadow: '0 0 18px #1ABC9C',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
                borderRadius: '25px',
              }}
            >
              Let’s Talk
            </Button>
          </Grid>
        </Grid>
      </Box>

      <ContactModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export default HeroSection;

