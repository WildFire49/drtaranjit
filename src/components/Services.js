import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import servicesImg from '../assets/photos/Services.jpg';
import equipmentImg from '../assets/photos/Equipmemt.jpeg';
import consultingImg from '../assets/photos/consulting-card.jpg';

const services = [
  {
    title: 'General Dentistry & Dental Trauma',
    description: 'Comprehensive dental care including cleanings, fillings, and emergency trauma treatment.',
    image: servicesImg,
    delay: 0.2,
  },
  {
    title: 'Dental Implantology & Bone Grafting',
    description: 'Advanced tooth replacement solutions with dental implants and bone regeneration procedures.',
    image: equipmentImg,
    delay: 0.4,
  },
  {
    title: 'TMJ Disorders & Sleep Medicine',
    description: 'Specialized treatment for jaw joint disorders and sleep-related dental conditions.',
    image: consultingImg,
    delay: 0.6,
  },
  {
    title: 'Orthodontic & Jaw Repositioning',
    description: 'Comprehensive orthodontic care and surgical solutions for jaw alignment.',
    image: servicesImg,
    delay: 0.8,
  },
  {
    title: 'Facial Aesthetics',
    description: 'Minimally invasive procedures for facial enhancement and rejuvenation.',
    image: equipmentImg,
    delay: 1.0,
  },
  {
    title: 'Medical Patient Care',
    description: 'Specialized dental care for medically compromised patients with comprehensive management protocols.',
    image: consultingImg,
    delay: 1.2,
  },
];

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        py: 15,
        backgroundColor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(180deg, rgba(25, 118, 210, 0.05) 0%, rgba(255,255,255,0) 100%)',
          zIndex: 0,
        },
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            color="primary"
            sx={{
              mb: 2,
              textAlign: 'center',
              fontWeight: 'bold',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                backgroundColor: 'primary.main',
                borderRadius: 2,
              },
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 8, textAlign: 'center', maxWidth: 800, mx: 'auto', mt: 4 }}
          >
            Comprehensive dental care solutions tailored to your needs
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: service.delay }}
                  viewport={{ once: true }}
                >
                  <Card
                    component={motion.div}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.12)',
                    }}
                    transition={{ duration: 0.3 }}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, primary.main, primary.light)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        color="primary"
                        gutterBottom
                        sx={{ 
                          fontWeight: 600,
                          mb: 2,
                          minHeight: { md: '3em' },
                          display: '-webkit-box',
                          overflow: 'hidden',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{
                          display: '-webkit-box',
                          overflow: 'hidden',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 3,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;