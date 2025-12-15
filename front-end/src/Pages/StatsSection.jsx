import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/StatsSection.css";

const StatsSection = () => {
  return (
    <div className="stats-wrapper">
      <Container>
        {/* TOP STAT CARDS */}
        <div className="stats-container">
          <div className="stat-card red-card">
            <h2>10,000+</h2>
            <p>Active Users</p>
          </div>

          <div className="stat-card white-card">
            <h2>70+</h2>
            <p>Cities & Countries</p>
          </div>
        </div>

        <h3 className="trusted-title">
          Trusted by SMB owners across all industries
        </h3>

        {/* INDUSTRIES - 2x400px containers, 2x3 grid inside each */}
        {/* INDUSTRIES - Perfect Centered 400x400 Boxes */}
        <div className="industries-wrapper">
          <Row className="industries">
            <Col  className="industry-col">
              <p>🏢 Real estate</p>
              <p>🏨 Hospitality</p>
              <p>📚 Education</p>
              <p>🏭 Manufacturing</p>
              <p>🛒 E-Commerce</p>
              <p>📈 Digital Marketing</p>
            </Col>

            <Col md={6} className="industry-col">
              <p>🏬 Offline Retail</p>
              <p>💗 Healthcare</p>
              <p>🚗 Automobile</p>
              <p>🖌 Interior Design</p>
              <p>💰 Financial Services</p>
              <p>👩‍💻 Freelancers</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default StatsSection;
