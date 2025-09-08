import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";

import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null); 
  const [errors, setErrors] = useState({});

  // HaANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  //INPUT FIELDS VALIDATION
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus("env-error");
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        formData,
        publicKey
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 4000);
      })
      .catch(() => {
        setSubmitStatus("error");
      });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Contact Me
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
      
        textAlign="center"
      >
        Have a question or want to work together? Fill out the form below!
      </Typography>


      {submitStatus === "env-error" && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Email service is not configured. Please contact the site owner or try again later.
        </Alert>
      )}
      {submitStatus === "success" && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Your message has been sent! I'll get back to you soon.
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>

        <TextField
          fullWidth
          label="Your Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
          required
        />

        {/* Email Field */}
        <TextField
          fullWidth
          label="Your Email"
          type="email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
          required
        />

        {/* Message Field */}
        <TextField
          fullWidth
          label="Your Message"
          multiline
          rows={5}
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          margin="normal"
          required
        />

        {/* Submit a message Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          disabled={submitStatus === "success"}
        >
          {submitStatus === "success"?"Sent":"Send Message"}
        </Button>
      </Box>
    </Container>
  );
}
