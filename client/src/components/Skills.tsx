import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const skills = {
  Frontend: ['HTML', 'CSS', 'SCSS', 'Tailwind', 'JavaScript', 'React'],
  Backend: ['Node.js', 'Flask', 'C/C++', 'Python'],
  Databases: ['PostgreSQL', 'MariaDB', 'MongoDB', 'MySQL'],
  'AI / ML': [
    'TensorFlow',
    'PyTorch',
    'scikit-learn',
    'pandas',
    'Apache Spark',
  ],
  Tools: ['Airflow', 'Kafka'],
};

const SkillsSection: React.FC = () => {
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
      id="skills"
      sx={{
        backgroundColor: '#22303C',
        py: 8,
      }}
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
            Skills
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
            paragraph
            sx={{
              color: '#95A5A6',
            }}
          >
            Here’s a snapshot of the tools and technologies I use to build, analyze, and innovate.
          </Typography>

          <Grid container spacing={4}>
            {Object.entries(skills).map(([category, items]) => (
              <Grid item xs={12} sm={6} key={category}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 50,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: '#1ABC9C',
                    }}
                  >
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {items.map(skill => (
                      <Chip
                        label={skill}
                        key={skill}
                        sx={{
                          backgroundColor: '#2C3E50',
                          color: '#ECF0F1',
                          fontWeight: 'bold',
                          boxShadow: '0 0 8px rgba(26, 188, 156, 0.4)',
                          '&:hover': {
                            backgroundColor: '#1ABC9C',
                            color: '#22303C',
                            boxShadow: '0 0 12px rgba(26, 188, 156, 0.6)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default SkillsSection;

