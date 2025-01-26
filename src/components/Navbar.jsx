import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/photos/logo.png";

const navItems = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Vision", icon: <VisibilityIcon /> },
  { name: "Services", icon: <MedicalServicesIcon /> },
  { name: "Contact", icon: <ContactPhoneIcon /> },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        background: scrolled
          ? "#4a70bd"
          : "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
        p: 3,
      }}
    >
      <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
        <img src={logo} alt="Healing Touch Centre" style={{ height: 60 }} />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            onClick={() => scrollToSection(item.name)}
            sx={{
              mb: 2,
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: scrolled
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.04)",
                transform: "translateX(8px)",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: scrolled ? "white" : theme.palette.text.primary,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  cursor: "pointer",
                  fontWeight: 500,
                  color: scrolled ? "white" : theme.palette.text.primary,
                }}
              >
                {item.name}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          backgroundColor: scrolled ? "#4a70bd" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              py: { xs: 1, md: 1.5 },
              px: { xs: 2, md: 4 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                gap: 2,
              }}
            >
              <motion.img
                src={logo}
                alt="Healing Touch Centre"
                style={{ height: 40 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                Healing Touch Centre
              </Typography>
            </Box>

            {isMobile ? (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  gap: { md: 2, lg: 3 },
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.name)}
                      startIcon={item.icon}
                      sx={{
                        color: "white",
                        fontSize: "1rem",
                        textTransform: "none",
                        fontWeight: 500,
                        px: { md: 2, lg: 3 },
                        py: 1,
                        borderRadius: 2,
                        border: scrolled
                          ? "1px solid rgba(255, 255, 255, 0.3)"
                          : "none",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          border: scrolled
                            ? "1px solid rgba(255, 255, 255, 0.5)"
                            : "none",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 250,
            borderRadius: "16px 0 0 16px",
            backgroundColor: scrolled ? "#1a237e" : "white",
          },
        }}
      >
        {drawer}
      </Drawer>
    </motion.div>
  );
};

export default Navbar;
