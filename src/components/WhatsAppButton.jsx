import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918788947831', '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      style={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 1000,
      }}
    >
      <Tooltip title="Chat with us on WhatsApp" placement="left">
        <IconButton
          onClick={handleWhatsAppClick}
          sx={{
            backgroundColor: '#25D366',
            width: 60,
            height: 60,
            '&:hover': {
              backgroundColor: '#128C7E',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease-in-out',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          <WhatsAppIcon sx={{ color: 'white', fontSize: 32 }} />
        </IconButton>
      </Tooltip>
    </motion.div>
  );
};

export default WhatsAppButton;
