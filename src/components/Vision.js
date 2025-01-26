import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import doctorOperating from '../assets/photos/doctor-operatiing.jpg';
import doctorOperation2 from '../assets/photos/doctor-operation-2.jpg';

const Vision = () => {
  return (
    <Box
      id="vision"
      sx={{
        py: 15,
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                color="primary"
                sx={{ mb: 4, fontWeight: 'bold' }}
              >
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                At Healing Touch Centre, we envision a future where dental care transcends traditional boundaries. 
                Our mission is to provide comprehensive, patient-centered care that combines cutting-edge technology 
                with a gentle, compassionate approach.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                We strive to create an environment where patients feel comfortable, informed, and confident in their 
                dental care decisions. Our commitment to excellence drives us to continuously evolve and adapt to the 
                latest advancements in dental medicine.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ flex: 1 }}
                >
                  <Box
                    component="img"
                    src={doctorOperating}
                    alt="Doctor Operating"
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ flex: 1 }}
                >
                  <Box
                    component="img"
                    src={doctorOperation2}
                    alt="Doctor Operating"
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />
                </motion.div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: 4,
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <VisibilityIcon sx={{ fontSize: 60, mb: 2 }} />
                    <Typography variant="h3" sx={{ mb: 2 }}>
                      Why Choose Us?
                    </Typography>
                    <Typography>
                      • State-of-the-art Technology<br />
                      • Personalized Treatment Plans<br />
                      • Experienced Professional Team<br />
                      • Comfortable Environment<br />
                      • Comprehensive Care Solutions
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Vision;