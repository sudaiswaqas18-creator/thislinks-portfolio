import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0); // ← MISSING!

  // Validation errors
  const [errors, setErrors] = useState({
    email: "",
  });

  const slides = [
    {
      id: 1,
      title: "Shaping the Future...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Leading the Future...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Building the Future...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Auto slider - every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email blur
  const handleEmailBlur = () => {
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    } else if (!validateEmail(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  // Handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = { email: "" };

    // Validate email
    if (!email || !validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    console.log("Signup:", { email });
  };

  return (
    <div
      className="signup-page"
      style={{
        backgroundImage: `linear-gradient(153.84deg, #025c13, #0db82c 31.77%, #06c428 50.1%, #0ba226 66.8%, #006a13 83.53%), 
          url("/assets/images/wavy-lines-DTz3t743.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Content - Left Side */}
      <div className="signup-background">
        {/* Logo */}
        <div className="logo-container">
          <img
            src={`assets/images/logo-light-76kj-48r.png`}
            alt="THIS LINKS"
            className="logo"
          />
        </div>

        {/* Slider Content */}
        <div className="slider-content">
          <h2 className="slider-title">{slides[currentSlide].title}</h2>
          <p className="slider-description">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Slider Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Signup Card - Overlapping Background */}
      <div className="signup-card-wrapper">
        <div className="signup-card">
          {/* Email Icon Circle */}
          <div className="email-icon-wrapper">
            <div className="email-icon-circle">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="email-icon"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
          </div>

          <div className="form-header">
            <h1 className="form-title">Create Account</h1>
            <p className="form-subtitle">
              Enter your email to create an account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form" noValidate>
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`form-input ${errors.email ? "error" : ""}`}
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              CONTINUE
            </button>

            {/* Login Link */}
            <div className="login-link">
              Already have an account? <Link to="/login">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
