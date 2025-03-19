import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Express Delivery",
      description: "Get your food delivered in under 30 minutes with our express delivery service. Perfect for busy days when you need a quick meal.",
      icon: "🚀",
      benefits: ["Under 30 minute delivery", "Live tracking", "Priority preparation"]
    },
    {
      id: 2,
      title: "Catering Service",
      description: "From corporate events to family gatherings, our catering service provides delicious food for any occasion with customizable menus.",
      icon: "🍽️",
      benefits: ["Custom menu planning", "Event setup", "Professional service staff"]
    },
    {
      id: 3,
      title: "Meal Subscription",
      description: "Subscribe to weekly meal plans and save time on meal planning. Healthy, balanced meals delivered to your door on a schedule.",
      icon: "📅",
      benefits: ["Weekly or monthly plans", "Nutritionist-designed meals", "Flexible scheduling"]
    },
    {
      id: 4,
      title: "Special Dietary Options",
      description: "We cater to all dietary needs with specialized menu options for vegetarian, vegan, gluten-free, and other dietary requirements.",
      icon: "🥗",
      benefits: ["Allergen-free options", "Nutritional information", "Specialty ingredients"]
    },
    {
      id: 5,
      title: "Corporate Accounts",
      description: "Set up a corporate account for your business and enjoy exclusive benefits, simplified billing, and dedicated account management.",
      icon: "💼",
      benefits: ["Consolidated billing", "Volume discounts", "Dedicated account manager"]
    },
    {
      id: 6,
      title: "Private Chef Experience",
      description: "Elevate your dining experience with our private chef service. A professional chef will prepare a gourmet meal in your home.",
      icon: "👨‍🍳",
      benefits: ["Personalized menu creation", "In-home cooking", "Professional presentation"]
    }
  ]

  return (
    <div className="services-container">
      <div className="services-hero">
        <h1>Our Premium Services</h1>
        <p>Discover how we can make your culinary experience exceptional</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="service-benefits">
              <h3>Benefits</h3>
              <ul>
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="service-cta">
        <h2>Ready to elevate your dining experience?</h2>
        <p>Contact our customer service team to learn more about our services and how we can customize them to meet your needs.</p>
        <button className="cta-button">Contact Us</button>
      </div>

      <div className="service-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How quickly can I get my food delivered?</h3>
            <p>Our standard delivery time is 30-45 minutes depending on your location and order volume. With our Express Delivery service, we prioritize your order for delivery in under 30 minutes.</p>
          </div>
          <div className="faq-item">
            <h3>Do you accommodate dietary restrictions?</h3>
            <p>Absolutely! We offer a wide range of options for various dietary needs including vegetarian, vegan, gluten-free, and more. Just specify your requirements when ordering.</p>
          </div>
          <div className="faq-item">
            <h3>How do I set up a corporate account?</h3>
            <p>Contact our business team through the Contact Us form, and a dedicated account manager will guide you through the process of setting up a corporate account tailored to your needs.</p>
          </div>
          <div className="faq-item">
            <h3>What is the minimum order for catering services?</h3>
            <p>Our catering service starts at orders for 10 people. For smaller groups, we recommend our regular delivery service with a group order feature.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services