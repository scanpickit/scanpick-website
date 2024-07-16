import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* ensure it's above other content */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const PrivacyContainer = styled.div`
  max-width: 800px;
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-height: 80vh; /* Limit height to 80% of viewport height */
  overflow-y: auto; /* Enable vertical scrolling within container */
`;

const Title = styled.h1`
  color: #333;
`;

const SectionTitle = styled.h2`
  color: #555;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  color: #666;
`;

const PrivacyPolicyOverlay = ({ onClose }) => (
  <Overlay onClick={onClose}>
    <PrivacyContainer onClick={(e) => e.stopPropagation()}>
      <Title>Privacy Policy</Title>

      <SectionTitle>1. Information We Collect</SectionTitle>
      <Paragraph>
        We collect your name, email, contact details, and payment information when you make a purchase.
      </Paragraph>

      <SectionTitle>2. How We Use Your Information</SectionTitle>
      <Paragraph>
        We use your data to process orders, provide customer support, and send promotional emails.
      </Paragraph>

      <SectionTitle>3. Protection of Your Information</SectionTitle>
      <Paragraph>
        We employ security measures like encryption and SSL to safeguard your data.
      </Paragraph>

      <SectionTitle>4. Third-Party Disclosure</SectionTitle>
      <Paragraph>
        We do not share your personal information with outside parties without your consent.
      </Paragraph>

      <SectionTitle>5. Cookies</SectionTitle>
      <Paragraph>
        Our website uses cookies for improved functionality and analytics.
      </Paragraph>

      <SectionTitle>6. Your Rights</SectionTitle>
      <Paragraph>
        You have the right to access, update, or delete your personal information.
      </Paragraph>

      <SectionTitle>7. Updates to This Policy</SectionTitle>
      <Paragraph>
        We may update this policy from time to time, and changes will be reflected on this page.
      </Paragraph>
    </PrivacyContainer>
  </Overlay>
);

export default PrivacyPolicyOverlay;
