import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: "linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: "primary.main",
              position: "relative",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
          >
            Visit our clinic or get in touch with us for appointments and
            inquiries
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 4,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <LocationOnIcon
                        sx={{ fontSize: 30, color: "primary.main", mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Location
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Shop No 3, Sai Siddhi Building, Sector 15, Airoli,
                          Navi Mumbai, Maharashtra 400708
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <PhoneIcon
                        sx={{ fontSize: 30, color: "primary.main", mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Phone
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          component="a"
                          href="tel:+919920582797"
                          sx={{ textDecoration: "none", color: "inherit" }}
                        >
                          +91 99205 82797
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <EmailIcon
                        sx={{ fontSize: 30, color: "primary.main", mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Email
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          component="a"
                          href="mailto:info@healingtouchcentre.com"
                          sx={{ textDecoration: "none", color: "inherit" }}
                        >
                          Healing Touch Centre
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <AccessTimeIcon
                        sx={{ fontSize: 30, color: "primary.main", mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Hours
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Monday - Saturday: 10:00 AM - 8:00 PM
                          <br />
                          Sunday: By Appointment Only
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      href="https://maps.app.goo.gl/Q2DLZze4nnoTAVpJ8"
                      target="_blank"
                      sx={{
                        mt: 2,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                      }}
                    >
                      Get Directions
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: 500,
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8906351120147!2d72.99254837495558!3d19.156144982062967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf57fd3e1c75%3A0x32f0db6d7c1cba63!2sHealing+Touch+Centre!5e0!3m2!1sen!2sin!4v1706274992650!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Healing Touch Centre Location Map"
                  ></iframe>
                </Paper>

                <Typography
                  variant="caption"
                  align="center"
                  sx={{
                    color: "text.secondary",
                    mt: 1,
                    display: "block",
                  }}
                >
                  Click and drag to explore the street view • Double click to
                  zoom
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
