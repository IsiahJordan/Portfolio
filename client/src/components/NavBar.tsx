import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Divider,
  Button,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';
import ContactModal from './Contacts';

const Navbar: React.FC<> = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNavClick = (text: string) => {
    if (text === 'Contact') {
      setModalOpen(true);
    } else {
      const element = document.getElementById(text.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: 'blur(8px)',
          backgroundColor: '#2C3E50',
          borderBottom: '4px solid #1ABC9C',
          boxShadow: '0 4px 10px rgba(26, 188, 156, 0.5)',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'center',
            flexDirection: 'column',
            py: 2,
          }}
        >
          <Typography
            variant="h6"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: '#ECF0F1',
              textShadow: '0 0 5px #1ABC9C',
            }}
          >
            DIMAUNAHAN
          </Typography>

          <Divider
            sx={{
              width: '100%',
              height: '2px',
              mb: 2,
              bgcolor: '#34495E',
              borderRadius: 1,
            }}
          />

          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            justifyContent="center"
            divider={<Divider orientation="vertical" flexItem sx={{ borderColor: '#34495E' }} />}
          >
            {['Home', 'About', 'Skills', 'Work', 'Certification', 'Contact'].map((text) => (
              <Button
                key={text}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(text);
                }}
                sx={{
                  color: '#ECF0F1',
                  textTransform: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    color: '#1ABC9C',
                    textShadow: '0 0 8px #1ABC9C',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: '#1ABC9C',
                    transition: 'width 0.3s',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {text}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <ContactModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default Navbar;

