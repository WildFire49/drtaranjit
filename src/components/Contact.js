import {
  Alert,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import dayjs from "dayjs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    phone: "",
    email: "",
    symptoms: "",
    duration: "",
    previousConsultations: "",
    referralSource: "",
    preferredDate: dayjs(),
    preferredTime: dayjs().hour(9).minute(0),
  });

  const [openTimePicker, setOpenTimePicker] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (newValue) => {
    setFormData((prev) => ({
      ...prev,
      preferredDate: newValue,
    }));
  };

  const handleTimeChange = (newValue) => {
    setFormData((prev) => ({
      ...prev,
      preferredTime: newValue,
    }));
  };

  const formatWhatsAppMessage = () => {
    return encodeURIComponent(`
*New Patient Inquiry*
Name: ${formData.name}
Age: ${formData.age}
Location: ${formData.location}
Phone: ${formData.phone}
Email: ${formData.email}

*Medical Information*
Symptoms: ${formData.symptoms}
Duration: ${formData.duration}
Previous Consultations: ${formData.previousConsultations}

*Referral Source*
How did you hear about us: ${formData.referralSource}

*Preferred Appointment*
Date: ${formData.preferredDate.format("DD/MM/YYYY")}
Time: ${formData.preferredTime.format("hh:mm A")}
    `);
  };

  const formatEmailBody = () => {
    return encodeURIComponent(`
Subject: New Patient Inquiry - ${formData.name}

Patient Details:
Name: ${formData.name}
Age: ${formData.age}
Location: ${formData.location}
Phone: ${formData.phone}
Email: ${formData.email}

Medical Information:
Symptoms: ${formData.symptoms}
Duration: ${formData.duration}
Previous Consultations: ${formData.previousConsultations}

Referral Source:
How did you hear about us: ${formData.referralSource}

Preferred Appointment:
Date: ${formData.preferredDate.format("DD/MM/YYYY")}
Time: ${formData.preferredTime.format("hh:mm A")}
    `);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/+918788947831?text=${formatWhatsAppMessage()}`,
      "_blank"
    );
    setSnackbar({
      open: true,
      message: "Opening WhatsApp with your inquiry!",
      severity: "success",
    });
    // Reset form
    setFormData({
      name: "",
      age: "",
      location: "",
      phone: "",
      email: "",
      symptoms: "",
      duration: "",
      previousConsultations: "",
      referralSource: "",
      preferredDate: dayjs(),
      preferredTime: dayjs().hour(9).minute(0),
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:vaishakhsk2052@gmail.com?subject=New Patient Inquiry - ${
      formData.name
    }&body=${formatEmailBody()}`;
    setSnackbar({
      open: true,
      message: "Opening email client with your inquiry!",
      severity: "success",
    });
    // Reset form
    setFormData({
      name: "",
      age: "",
      location: "",
      phone: "",
      email: "",
      symptoms: "",
      duration: "",
      previousConsultations: "",
      referralSource: "",
      preferredDate: dayjs(),
      preferredTime: dayjs().hour(9).minute(0),
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

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

      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            background: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 4,
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            Schedule a Consultation
          </Typography>

          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Symptoms/Concerns"
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                  required
                  multiline
                  rows={3}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="How long have you been experiencing these symptoms?"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Any previous consultations?"
                  name="previousConsultations"
                  value={formData.previousConsultations}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>How did you hear about us?</InputLabel>
                  <Select
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    label="How did you hear about us?"
                  >
                    <MenuItem value="Social Media">Social Media</MenuItem>
                    <MenuItem value="Friend or Family">
                      Friend or Family
                    </MenuItem>
                    <MenuItem value="Google Search">Google Search</MenuItem>
                    <MenuItem value="Doctor Referral">Doctor Referral</MenuItem>
                    <MenuItem value="Website">Website</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Preferred Date"
                    value={formData.preferredDate}
                    onChange={handleDateChange}
                    minDate={dayjs()}
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preferred Time"
                  value={formData.preferredTime.format("hh:mm A")}
                  onClick={() => setOpenTimePicker(true)}
                  InputProps={{
                    readOnly: true,
                    endAdornment: <AccessTimeIcon color="action" />,
                  }}
                  sx={{
                    cursor: "pointer",
                    "& .MuiInputBase-root": {
                      cursor: "pointer",
                    },
                  }}
                />
                <Dialog
                  open={openTimePicker}
                  onClose={() => setOpenTimePicker(false)}
                  PaperProps={{
                    sx: {
                      borderRadius: 2,
                      maxWidth: "100%",
                      margin: 2,
                    },
                  }}
                >
                  <DialogTitle
                    sx={{
                      textAlign: "center",
                      pb: 0,
                      color: "primary.main",
                      fontWeight: 600,
                    }}
                  >
                    Select Time
                  </DialogTitle>
                  <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <StaticTimePicker
                        value={formData.preferredTime}
                        onChange={(newValue) => {
                          handleTimeChange(newValue);
                          setOpenTimePicker(false);
                        }}
                        minTime={dayjs().hour(9).minute(0)}
                        maxTime={dayjs().hour(20).minute(0)}
                        sx={{
                          width: "100%",
                          "& .MuiClock-pin": {
                            backgroundColor: "primary.main",
                          },
                          "& .MuiClockPointer-root": {
                            backgroundColor: "primary.main",
                            "& .MuiClockPointer-thumb": {
                              backgroundColor: "primary.main",
                              borderColor: "primary.main",
                            },
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </DialogContent>
                </Dialog>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: "info.light",
                    p: 2,
                    borderRadius: 1,
                    color: "info.dark",
                  }}
                >
                  <InfoIcon />
                  <Typography variant="body2">
                    <strong>Clinic Hours:</strong> Walk-ins are welcome Monday
                    through Saturday. Sunday consultations are by appointment
                    only.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Button
                    onClick={handleWhatsAppSubmit}
                    variant="contained"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      backgroundColor: "#25D366",
                      "&:hover": {
                        backgroundColor: "#128C7E",
                      },
                    }}
                  >
                    Send via WhatsApp
                  </Button>
                  <Button
                    onClick={handleEmailSubmit}
                    variant="contained"
                    size="large"
                    startIcon={<EmailIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                    }}
                  >
                    Send via Email
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
