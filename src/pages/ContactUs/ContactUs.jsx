import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5058bce8-58eb-4e84-8ea3-5af035485f3d',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          botcheck: formData.botcheck
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          botcheck: ''
        });
        setFormStatus({
          submitted: true,
          success: true,
          error: null
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        error: error.message || 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Our Location</h3>
                <p>123 Food Street, Culinary City, FC 12345</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>(555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>info@yourfooddelivery.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h3>Hours</h3>
                <p>Monday - Sunday: 10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          {formStatus.submitted && formStatus.success ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h2>Thank You!</h2>
              <p>Your message has been sent successfully. We'll get back to you soon!</p>
              <button onClick={() => setFormStatus({ submitted: false, success: false, error: null })}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus.error && (
                <div className="form-error">{formStatus.error}</div>
              )}

              <div className="hidden">
                <input
                  type="text"
                  id="botcheck"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="user "
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="user@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows="5"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;