import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

import equipmentImg from "../assets/photos/Equipment.jpeg";
import servicesImg from "../assets/photos/Services.jpg";
import consultingImg from "../assets/photos/consulting-card.jpg";

const services = [
  {
    title: "Dental Implants & Surgery",
    description: "State-of-the-art implant solutions and surgical procedures.",
    image: servicesImg,
    delay: 0.2,
    procedures: [
      "Single and multiple tooth implants",
      "All-on-4 implant solutions",
      "Bone grafting procedures",
      "Sinus lift surgery",
    ],
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic treatments.",
    image: equipmentImg,
    delay: 0.4,
    procedures: [
      "Teeth whitening",
      "Veneers",
      "Smile makeover",
      "Composite bonding",
    ],
  },
  {
    title: "Orthodontic & Jaw Repositioning",
    description:
      "Comprehensive orthodontic care and surgical solutions for jaw alignment.",
    image: servicesImg,
    delay: 0.6,
    procedures: [
      "Traditional braces",
      "Clear aligners",
      "Jaw surgery",
      "Retention planning",
    ],
  },
  {
    title: "Facial Aesthetics",
    description: "Non-surgical facial enhancement treatments.",
    image: equipmentImg,
    delay: 0.8,
    procedures: [
      "Botox treatments",
      "Dermal fillers",
      "Facial contouring",
      "Anti-aging solutions",
    ],
  },
  {
    title: "Medical Patient Care",
    description: "Comprehensive medical care for overall well-being.",
    image: consultingImg,
    delay: 1.0,
    procedures: [
      "Health assessments",
      "Preventive care",
      "Treatment planning",
      "Follow-up care",
    ],
  },
  {
    title: "Face Esthetics and Cosmetology",
    description: "Advanced cosmetic procedures for facial enhancement",
    image: consultingImg,
    delay: 1.2,
    procedures: [
      "IV Glutathione therapy",
      "PRP/GFC skin boosters & hair scalp boosters",
      "Acce scar treatment",
      "Chemical peels",
      "Dermabrasion and microneedling",
      "Mesotherapy",
    ],
  },
  {
    title: "TMJ Disorder Management",
    description: "Comprehensive care using biopsychosocial model",
    image: servicesImg,
    delay: 1.4,
    procedures: [
      "Multidisciplinary approach with specialists",
      "Complete condition assessment",
      "Personalized treatment plans",
      "Regular monitoring and adjustments",
    ],
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
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
            Our Services
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      objectFit: "cover",
                      borderBottom: "4px solid",
                      borderColor: "primary.main",
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: "primary.main",
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                    <Box sx={{ mt: "auto" }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "primary.main",
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        Key Procedures:
                      </Typography>
                      <Box
                        component="ul"
                        sx={{
                          listStyle: "none",
                          p: 0,
                          m: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        {service.procedures.map((procedure, idx) => (
                          <Box
                            component="li"
                            key={idx}
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              "&::before": {
                                content: '"•"',
                                color: "primary.main",
                                fontWeight: "bold",
                                mr: 1,
                              },
                            }}
                          >
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                fontSize: "0.875rem",
                                lineHeight: 1.4,
                              }}
                            >
                              {procedure}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
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
};

export default Services;
