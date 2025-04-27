import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Spectrogram CNN',
    image: '/assets/spectrogram.png',
    description:
      'Trained a multimodal CNN on spectrogram-based audio data for classification tasks. Integrated signal processing and deep learning pipelines.',
    tech: ['TensorFlow', 'Python', 'Deep Learning'],
  },
  {
    title: 'Power BI Dashboard',
    image: '/assets/dashboard.png',
    description:
      'Developed a sales performance dashboard using Power BI, with cleansed Excel datasets for clear business insights and KPIs.',
    tech: ['Power BI', 'Excel', 'Data Cleaning'],
  },
  {
    title: 'Engineer ETL Tool',
    image: '/assets/engineer.png',
    description:
      'Built a scraping and ETL pipeline that aggregates data from multiple sources using Spark and schedules workflows with Airflow.',
    tech: ['Apache Spark', 'Airflow', 'Python', 'Web Scraping'],
  },
];

function ProjectsSection() {
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
        backgroundColor: '#121B25', // Dark base
        py: 8,
      }}
      id="work"
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: '#ECF0F1',
            textShadow: '0 0 8px #1ABC9C', // Soft glow effect
          }}
        >
          Projects
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            color: '#B0BEC5', // Soft secondary text
          }}
        >
          A few highlights from what I’ve built — blending AI, data engineering, and visualization to solve real-world problems.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 50,
                }}
                transition={{ duration: 0.7 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: '#1B2735',
                    color: '#ECF0F1',
                    boxShadow: '0 4px 20px rgba(26, 188, 156, 0.2)', // Light greenish glow
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 6px 30px rgba(26, 188, 156, 0.4)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ color: '#1ABC9C' }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      paragraph
                      sx={{ color: '#B0BEC5' }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: '#16A085',
                            color: '#ECF0F1',
                            fontWeight: 'bold',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProjectsSection;

