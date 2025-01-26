import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import bannerImg from "../assets/photos/banner.jpg";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
        pt: { xs: 8, md: 0 },
        overflow: "hidden",
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                }}
              >
                Welcome to Healing Touch Centre
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: 500,
                  mb: 2,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Dr. Taranjit Kaur
              </Typography>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.9)",
                    maxWidth: "600px",
                    mb: 4,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    lineHeight: 1.8,
                  }}
                >
                  Experience exceptional dental care at Healing Touch Centre. We
                  combine advanced technology with compassionate care to provide
                  you with the best dental treatment experience. Our
                  state-of-the-art facility and expert team are dedicated to
                  your oral health and comfort.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                  onClick={() => {
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book an Appointment
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ position: "relative" }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Box
                  component="img"
                  src={bannerImg}
                  alt="Healing Touch Centre"
                  sx={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "auto",
                    borderRadius: "30px",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                    transform: "perspective(1000px) rotateY(-10deg)",
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": {
                      transform: "perspective(1000px) rotateY(0deg)",
                    },
                  }}
                />
              </motion.div>
              {/* Decorative elements */}
              <Box
                sx={{
                  position: "absolute",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                  top: "-50px",
                  right: "-50px",
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                  bottom: "-30px",
                  left: "-30px",
                  zIndex: 0,
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
