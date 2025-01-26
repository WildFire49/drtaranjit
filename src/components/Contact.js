import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Box
      id="contact"
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
          <Typography
            variant="h2"
            color="primary"
            sx={{ mb: 6, textAlign: 'center', fontWeight: 'bold' }}
          >
            Contact Us
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{ p: 4, height: '100%', borderRadius: 4 }}
              >
                <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
                  Get in Touch
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ mt: 3 }}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  backgroundColor: 'primary.main',
                  color: 'white',
                }}
              >
                <Typography variant="h4" sx={{ mb: 4 }}>
                  Contact Information
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <IconButton sx={{ color: 'white', mr: 2 }}>
                      <PhoneIcon />
                    </IconButton>
                    <Typography>+1 234 567 8900</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <IconButton sx={{ color: 'white', mr: 2 }}>
                      <EmailIcon />
                    </IconButton>
                    <Typography>info@healingtouchcentre.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ color: 'white', mr: 2 }}>
                      <LocationOnIcon />
                    </IconButton>
                    <Typography>
                      123 Medical Center Drive,<br />
                      Suite 456,<br />
                      City, State 12345
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Hours of Operation
                </Typography>
                <Typography>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;