import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import bannerImg from "../assets/photos/banner.jpg";
import WhatsAppButton from "./WhatsAppButton";
import Reviews from "./Reviews";

// Animation variants for consistent animations
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <>
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(45deg, #1f6cb9 50%, #024f8e 90%)",
            animation: "gradientBreathing 8s ease infinite",
          },
          "@keyframes gradientBreathing": {
            "0%, 100%": {
              opacity: 1,
              background: "linear-gradient(45deg, #1f6cb9 30%, #024f8e 90%)",
            },
            "50%": {
              opacity: 0.8,
              background: "linear-gradient(45deg, #1f6cb9 30%, #024f8e 90%)",
            },
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            position: "relative",
            zIndex: 2,
            pt: { xs: "100px", sm: "120px", md: "100px" },
            pb: { xs: 4, md: 6 },
          }}
        >
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
            sx={{
              minHeight: {
                xs: "calc(100vh - 120px)",
                sm: "calc(100vh - 140px)",
                md: "calc(100vh - 160px)",
              },
            }}
          >
            {/* Left Content Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    mb: 3,
                    fontSize: {
                      xs: "2.5rem",
                      sm: "3rem",
                      md: "3.5rem",
                      lg: "4rem",
                    },
                    lineHeight: 1.2,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
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
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                    textShadow: "1px 1px 2px rgba(0,0,0,0.15)",
                  }}
                >
                  (Professor) Dr. Taranjit Kaur
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
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      lineHeight: 1.8,
                      textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                    }}
                  >
                    Experience exceptional dental care at Healing Touch Centre.
                    We combine advanced technology with compassionate care to
                    provide you with the best dental treatment experience. Our
                    state-of-the-art facility and expert team are dedicated to
                    your oral health and comfort.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      mt: 4,
                      mb: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "white",
                        color: "primary.main",
                        px: 6,
                        py: 1.5,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        borderRadius: "30px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        minWidth: "250px",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                        },
                        transition: "all 0.3s ease-in-out",
                      }}
                      onClick={() => {
                        document
                          .getElementById("contact")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Book an Appointment
                    </Button>
                  </Box>
                </motion.div>
              </motion.div>
              <Box
                sx={{
                  mt: 6,
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Box
                    sx={{
                      background: "#1a4b83",
                      backdropFilter: "blur(4px)",
                      borderRadius: "15px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      p: 3,
                      width: 760,
                      mx: "auto",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [-3, 3, -3],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          color: "white",
                          fontWeight: 500,
                          width: 700,
                          fontSize: { xs: "1.2rem", md: "1.4rem" },
                          fontStyle: "italic",
                          textAlign: "center",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                          letterSpacing: "1.5px",
                          lineHeight: 1.5,
                          "& span": {
                            color: "#4bde75",
                            fontWeight: 600,
                          },
                        }}
                      >
                        "Delivering <span>Personalized Care</span> with{" "}
                        <span>Professionalism</span>"
                      </Typography>
                    </motion.div>
                  </Box>
                </motion.div>
              </Box>
            </Grid>

            {/* Right Image Section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                mt: { xs: 4, md: 3 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "auto", md: "100%" },
                maxHeight: { xs: "500px", md: "600px" },
                overflow: "visible",
              }}
            >
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                <motion.div
                  variants={floatAnimation}
                  animate="animate"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    transformOrigin: "center center",
                  }}
                >
                  <Box
                    component="img"
                    src={bannerImg}
                    alt="Healing Touch Centre"
                    sx={{
                      width: "80%",
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "480px",
                      height: "auto",
                      borderRadius: "30px",
                      boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                      transform: "perspective(1000px) rotateY(-10deg)",
                      transition: "all 0.5s ease-in-out",
                      "&:hover": {
                        transform:
                          "perspective(1000px) rotateY(0deg) scale(1.02)",
                        boxShadow: "0 40px 70px rgba(0,0,0,0.4)",
                      },
                    }}
                  />
                </motion.div>

                {/* Decorative Elements */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "200%",
                    height: "200%",
                    top: "-50%",
                    left: "-50%",
                    background:
                      "radial-gradient(circle, rgba(66,165,245,0.15) 0%, rgba(25,118,210,0) 70%)",
                    animation:
                      "pulseGradient 4s ease-in-out infinite alternate",
                    zIndex: -1,
                    "@keyframes pulseGradient": {
                      "0%": { transform: "scale(0.8)", opacity: 0.5 },
                      "100%": { transform: "scale(1.2)", opacity: 0.8 },
                    },
                  }}
                />

                {/* Top Right Glow */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
                    top: "-50px",
                    right: "-50px",
                    filter: "blur(20px)",
                    zIndex: 0,
                  }}
                />

                {/* Bottom Left Glow */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
                    bottom: "-30px",
                    left: "-30px",
                    filter: "blur(15px)",
                    zIndex: 0,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Reviews />
      <WhatsAppButton />
    </>
  );
};

export default Home;
