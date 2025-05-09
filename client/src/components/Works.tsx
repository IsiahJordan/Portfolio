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
  Divider
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

const workExperiences = [
  {
    title: 'GitHub Collaboration',
    image: 'github.png',
    description:
      'Contributed to open-source repositories, documenation, research, and collaborated on feature branches using Git and GitHub workflows.',
    tech: ['Git', 'GitHub', 'Code Reviews', 'Research', 'Documentation'],
  },
  {
    title: 'Custom Automation Script',
    image: 'script.png',
    description:
      'Develop an automation testing for the slack and the third party plugin test cases',
    tech: ['Python', 'APIs', 'Automation', 'SeleniumBase', 'Slack'],
  },
];


export const ProjectsSection: React.FC<> = () => {
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
        backgroundColor: '#121B25',
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
            textShadow: '0 0 8px #1ABC9C',
          }}
        >
          Projects
        </Typography>
        <Divider
            sx={{
              mb: 4,
              width: '90px',
              borderBottomWidth: 3,
              borderColor: '#1ABC9C',
              boxShadow: '0 0 8px #1ABC9C',
            }}
          />

        <Typography
          variant="body1"
          paragraph
          sx={{
            color: '#B0BEC5', 
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
                    boxShadow: '0 4px 20px rgba(26, 188, 156, 0.2)', 
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 6px 30px rgba(26, 188, 156, 0.4)',
                    },
                  }}
                >
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



export const WorkExperienceSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <Box ref={sectionRef} sx={{ backgroundColor: '#121B25', py: 8 }} id="experience">
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: '#ECF0F1',
            textShadow: '0 0 8px #1ABC9C',
          }}
        >
          Work Experience
        </Typography>
        <Divider
            sx={{
              mb: 4,
              width: '90px',
              borderBottomWidth: 3,
              borderColor: '#1ABC9C',
              boxShadow: '0 0 8px #1ABC9C',
            }}
          />


        <Typography variant="body1" paragraph sx={{ color: '#B0BEC5', mb: 4 }}>
          A snapshot of environments I've contributed to — building scripts, collaborating in codebases, and automating workflows.
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ 
            color: '#1ABC9C',
            textShadow: '0 0 8px #1ABC9C',
          }}
        >
          Otis Philippines Internship
        </Typography>

        {workExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.7 }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              sx={{
                mb: 6,
                flexDirection: 'row',
              }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={experience.image}
                  alt={experience.title}
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(26,188,156,0.3)',
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: '#1ABC9C' }}
                >
                  {experience.title}
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#B0BEC5' }}>
                  {experience.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {experience.tech.map((tech) => (
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
              </Grid>
            </Grid>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

