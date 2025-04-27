import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        backgroundColor: '#1A252F',
        py: 8,
      }}
      id="about"
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: '#ECF0F1',
              textShadow: '0 0 6px #1ABC9C',
            }}
          >
            About Me
          </Typography>

          <Divider
            sx={{
              mb: 4,
              width: '60px',
              borderBottomWidth: 3,
              borderColor: '#1ABC9C',
              boxShadow: '0 0 8px #1ABC9C',
            }}
          />

          <Typography
            variant="body1"
            color="#95A5A6"
            paragraph
          >
            I'm a passionate developer and AI enthusiast with a mission to create impactful and intelligent digital experiences. With a strong foundation in machine learning, data science, and full-stack development, I love building solutions that blend innovation with real-world utility.
          </Typography>

          <Typography
            variant="body1"
            color="#95A5A6"
            paragraph
          >
            Whether it's experimenting with neural networks, optimizing model performance, or crafting seamless user interfaces — I believe in the power of tech to make a difference. When I'm not coding, you'll probably find me exploring new ideas, mentoring peers, or sketching out the next big project.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

export default AboutMe;

