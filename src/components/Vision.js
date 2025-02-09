import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SpaIcon from "@mui/icons-material/Spa";
import GroupsIcon from "@mui/icons-material/Groups";
import VisibilityIcon from "@mui/icons-material/Visibility";
import doctorOperating from "../assets/photos/doctor-operatiing.jpg";
import doctorOperation2 from "../assets/photos/doctor-operation-2.jpg";
import reception from "../assets/photos/reception.jpg";

const features = [
  {
    icon: <MedicalServicesIcon sx={{ fontSize: 40 }} />,
    title: "Expert Care",
    description:
      "Led by Dr. Taranjit Kaur, our clinic provides specialized dental care with years of expertise and a commitment to excellence.",
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    title: "Holistic Approach",
    description:
      "We believe in treating not just symptoms but understanding and addressing the root cause of dental issues for long-term health.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
    title: "Timely Service",
    description:
      "We respect your time and ensure prompt appointments with minimal waiting periods, even accommodating emergency cases.",
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
    title: "Advanced Technology",
    description:
      "Our clinic is equipped with state-of-the-art dental technology to provide precise diagnoses and effective treatments.",
  },
  {
    icon: <SpaIcon sx={{ fontSize: 40 }} />,
    title: "Comfortable Environment",
    description:
      "Experience dental care in a relaxing, clean, and modern environment designed for your comfort and peace of mind.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: "Patient-Centric Care",
    description:
      "We prioritize building lasting relationships with our patients, ensuring personalized care and treatment plans.",
  },
];

const Vision = () => {
  return (
    <Box
      id="vision"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)",
      }}
    >
      <Container maxWidth="xl">
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
              mb: 3,
              fontWeight: 700,
              color: "primary.main",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -16,
                left: "50%",
                transform: "translateX(-50%)",
                width: 100,
                height: 4,
                backgroundColor: "primary.main",
                borderRadius: 2,
              },
            }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 6, md: 10 },
              maxWidth: 800,
              mx: "auto",
              px: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.8,
            }}
          >
            At Healing Touch Centre, we envision a future where dental care
            transcends traditional boundaries. Our mission is to provide
            comprehensive, patient-centered care that combines cutting-edge
            technology with a gentle, compassionate approach.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 6, md: 10 },
              maxWidth: 800,
              mx: "auto",
              px: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.8,
            }}
          >
            We strive to create an environment where patients feel comfortable,
            informed, and confident in their dental care decisions. Our
            commitment to excellence drives us to continuously evolve and adapt
            to the latest advancements in dental medicine.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
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
                  width: "95%",
                  height: 400,
                  objectFit: "cover",
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
                src={reception}
                alt="Doctor Operating"
                sx={{
                  width: "95%",
                  height: 400,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </motion.div>
          </Box>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Box
            sx={{
              py: 8,
              background: "linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)",
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
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 100,
                      height: 4,
                      backgroundColor: "primary.main",
                      borderRadius: 2,
                    },
                  }}
                >
                  Why Choose Us
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="text.secondary"
                  sx={{
                    mb: { xs: 6, md: 10 },
                    maxWidth: 800,
                    mx: "auto",
                    px: 2,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    lineHeight: 1.8,
                  }}
                >
                  Experience excellence in dental care with our comprehensive
                  approach and commitment to your oral health
                </Typography>
              </motion.div>

              <Grid
                container
                spacing={{ xs: 3, md: 4, lg: 5 }}
                sx={{
                  px: { xs: 2, md: 4, lg: 8 },
                  maxWidth: 1600,
                  mx: "auto",
                }}
              >
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: { xs: 3, md: 4 },
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          borderRadius: 4,
                          background:
                            "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                            "& .icon-wrapper": {
                              transform: "scale(1.1) rotate(5deg)",
                              background: (theme) => theme.palette.primary.main,
                              "& svg": {
                                color: "white",
                              },
                            },
                          },
                        }}
                      >
                        <Box
                          className="icon-wrapper"
                          sx={{
                            width: { xs: 70, md: 90 },
                            height: { xs: 70, md: 90 },
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: (theme) =>
                              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                            mb: { xs: 2, md: 3 },
                            color: "white",
                            transition: "all 0.3s ease-in-out",
                          }}
                        >
                          {feature.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            mb: { xs: 1.5, md: 2 },
                            fontWeight: 600,
                            fontSize: { xs: "1.3rem", md: "1.5rem" },
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.8,
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            maxWidth: "90%",
                            mx: "auto",
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Vision;
