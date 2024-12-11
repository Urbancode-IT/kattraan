import React from "react";
import '../assets/styles/footer.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f2f2f2", color: "black", padding: "2rem 1rem" }}>
      {/* Top Banner */}
      <div style={{ textAlign: "center", paddingBottom: "1rem", borderBottom: "1px solid #333" }}>
        <p style={{ fontSize: "1rem", margin: 0 }}>
          Top companies choose <strong style={{ color: "#1DBF73" }}>kattraan Business</strong> to build in-demand career skills.
        </p>
      </div>

      {/* Explore Skills Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        <div>
          <h4>Certifications by Issuer</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Amazon Web Services (AWS)</li>
            <li>Microsoft Certifications</li>
            <li>Google Cloud Certifications</li>
            <li>Tableau Certifications</li>
            <li>See all Certifications</li>
          </ul>
        </div>
        <div>
          <h4>Web Development</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Angular</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h4>IT Certifications</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>CompTIA A+</li>
            <li>Azure Fundamentals</li>
            <li>Google IT Support</li>
            <li>Docker & Kubernetes</li>
            <li>See all Certifications</li>
          </ul>
        </div>
        <div>
          <h4>Data Science</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Data Visualization</li>
            <li>Deep Learning</li>
          </ul>
        </div>
        <div>
          <h4>Business Analytics</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Excel Analytics</li>
            <li>SQL</li>
            <li>Power BI</li>
            <li>Data Analysis</li>
          </ul>
        </div>
      </div>

      {/* Bottom Links */}
      <div
        style={{
          marginTop: "2rem",
          borderTop: "1px solid #333",
          paddingTop: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        <div>
          <h4>About</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4>Discover </h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Get the App</li>
            <li>Teach on kattraan</li>
            <li>Pricing Plans</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
        <div>
          <h4>kattraan for Business</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Corporate Training</li>
            <li>Custom Learning Paths</li>
            <li>Team Analytics</li>
          </ul>
        </div>
        <div>
          <h4>Legal & Accessibility</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Accessibility Statement</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          marginTop: "2rem",
          borderTop: "1px solid #333",
          paddingTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span>© 2024 kattraan Inc. All rights reserved.</span>
        <a href="#" style={{ color: "#black" }}>
          Cookie Settings
        </a>
        <div>
          <select style={{ backgroundColor: "#333", color: "#FFF", border: "none", padding: "0.5rem", borderRadius: "5px" }}>
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
