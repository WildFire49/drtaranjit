import React from "react";
import { Box, Container, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import collab1 from "../assets/photos/collab.jpg";

const collaborators = [
  {
    name: "Dr Nupur Prabhudesai",
    specialization: "MDS Prosthodontics, Crown & Bridge",
    image: collab1,
  },
  {
    name: "Dr. Evencio Luis",
    specialization: "Specialist",
    image: collab1, // Will be added later
  },
  // More collaborators can be added here
];

const Collaborations = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
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
            Our Collaborations
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              width: "50px",
              top: 0,
              bottom: 0,
              zIndex: 2,
            },
            "&::before": {
              left: 0,
              background:
                "linear-gradient(to right, rgba(245, 247, 250, 1), transparent)",
            },
            "&::after": {
              right: 0,
              background:
                "linear-gradient(to left, rgba(245, 247, 250, 1), transparent)",
            },
          }}
        >
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{
              display: "flex",
              gap: "2rem",
              padding: "2rem 0",
            }}
          >
            {[...collaborators, ...collaborators, ...collaborators].map(
              (collaborator, index) => (
                <Box
                  key={index}
                  sx={{
                    minWidth: 300,
                    p: 3,
                    background: "white",
                    borderRadius: 4,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Avatar
                    src={collaborator.image}
                    sx={{
                      width: 120,
                      height: 120,
                      border: "4px solid",
                      borderColor: "primary.main",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "primary.main",
                      textAlign: "center",
                    }}
                  >
                    {collaborator.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", textAlign: "center" }}
                  >
                    {collaborator.specialization}
                  </Typography>
                </Box>
              )
            )}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Collaborations;
