import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Rating,
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const reviews = [
  {
    name: "Neha Pillay",
    rating: 5,
    comment: `Dr. Taranjit is an excellent dentist who did a great job with my teeth cleaning n bruxism... which helped me with my teeth sensitivity issues and jaw pain, she ensured I was comfortable and also guided me way to deal with my dental issues in future. Would highly recommend for all dental treatments .`,
    date: "3 months ago",
  },
  {
    name: "Nikunj",
    rating: 5,
    comment:
      "I suffer from extreme sensitivity and was advised impants as a solution. Dr Kaur who has a very holistic approach in her treatment advised against it and pointed out the drawbacks going for implants. She saved me quite a bit of pain a very lengthy treatment and ofcourse a lot of money. Her experience in this field makes the seemingly complex tasks very easy and pain-free. She aced my dental management which included crowns, extraction and mouth guards for my condition. The tooth extraction which most of us dread was painless and so perfect that I was back to normal in 12 hrs flat. Keep up the good work Doctor. All the best 👍",
    date: "4 months ago",
  },
  {
    name: "Ajay Jadhav",
    rating: 5,
    comment:
      "Dr. Ma'am is not just remain doctor for me; she is now like big sister. Doctor Patient relation is elevated to another level where pain is getting treated with emotions. Ma'am is giving Medicines to help in pain but its actual cure is happening at emotional level. That ice break of emotional barrier with transparency and honesty is must because many of our topics are rather more emotional than physical. Doctor ma'am is like that person where your pain will get handle with care…🙏🙏",
    date: "3 months ago",
  },
];

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const getPreviewText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).trim() + "...";
  };

  return (
    <Box
      sx={{
        py: 8,
        background:
          "linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(255,255,255,0) 100%)",
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
              mb: 6,
              fontWeight: 700,
              color: "primary.main",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -16,
                left: "50%",
                transform: "translateX(-50%)",
                width: 80,
                height: 4,
                backgroundColor: "primary.main",
                borderRadius: 2,
              },
            }}
          >
            Patient Reviews
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            mt: 4,
          }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  },
                }}
                onClick={() => setSelectedReview(review)}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 48,
                      height: 48,
                      mr: 2,
                    }}
                  >
                    {review.name[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {review.name}
                    </Typography>
                    <Rating value={review.rating} readOnly size="small" />
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2, flexGrow: 1 }}
                >
                  "{getPreviewText(review.comment)}"
                  {review.comment.length > 150 && (
                    <Button
                      sx={{
                        ml: 1,
                        p: 0,
                        minWidth: "auto",
                        textTransform: "none",
                        color: "primary.main",
                        "&:hover": {
                          background: "none",
                          textDecoration: "underline",
                        },
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedReview(review);
                      }}
                    >
                      Read more
                    </Button>
                  )}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {review.date}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>

        <Dialog
          open={Boolean(selectedReview)}
          onClose={() => setSelectedReview(null)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 2,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            },
          }}
        >
          {selectedReview && (
            <>
              <DialogTitle>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 56,
                      height: 56,
                      mr: 2,
                    }}
                  >
                    {selectedReview.name[0]}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{selectedReview.name}</Typography>
                    <Rating value={selectedReview.rating} readOnly />
                  </Box>
                  <IconButton
                    onClick={() => setSelectedReview(null)}
                    sx={{ color: "text.secondary" }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    lineHeight: 1.8,
                    color: "text.secondary",
                    fontStyle: "italic",
                  }}
                >
                  "{selectedReview.comment}"
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", display: "block", mt: 2 }}
                >
                  Posted {selectedReview.date}
                </Typography>
              </DialogContent>
            </>
          )}
        </Dialog>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Typography
              component="a"
              href="https://maps.app.goo.gl/YwB9PpVzviFpzTpT6"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              View all reviews on Google
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;
