import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 9%;
  left: 0;
  width: 100%;
  height: 60%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* ensure it's above other content */
  overflow-y: auto;
`;

const TermsContainer = styled.div`
  max-width: 800px;
  max-height:400px;
  margin: 20 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow-y: auto;
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

const TermsOverlay = ({ onClose }) => (
  <Overlay onClick={onClose}>
    <TermsContainer>
      <Title>Terms and Conditions</Title>

      <SectionTitle>1. Acceptance of Terms</SectionTitle>
      <Paragraph>
        By using ScanPick's services, you agree to comply with these Terms. If not, please do not use our services.
      </Paragraph>

      <SectionTitle>2. Service Description</SectionTitle>
      <Paragraph>
        ScanPick provides vending machine solutions for convenient and innovative retail experiences.
      </Paragraph>

      <SectionTitle>3. Ownership and Licensing</SectionTitle>
      <Paragraph>
        Upon purchasing a machine, you own the physical unit. ScanPick retains ownership of software and technology.
      </Paragraph>

      <SectionTitle>4. Service Agreement</SectionTitle>
      <Paragraph>
        Customers enter a service agreement outlining terms, duration, and conditions, including installation and maintenance.
      </Paragraph>

      <SectionTitle>5. Payment and Fees</SectionTitle>
      <Paragraph>
        Customers agree to pay all associated fees for machine purchase or service, specified in the agreement.
      </Paragraph>

      <SectionTitle>6. Machine Usage</SectionTitle>
      <Paragraph>
        Customers are granted the right to use machines for intended purposes. Unauthorized use is strictly prohibited.
      </Paragraph>

      <SectionTitle>7. Maintenance and Repairs</SectionTitle>
      <Paragraph>
        ScanPick is responsible for maintenance and repairs under the service agreement.
      </Paragraph>

      <SectionTitle>8. Stocking and Inventory</SectionTitle>
      <Paragraph>
        ScanPick regularly stocks machines with agreed-upon inventory. Customers may request changes based on availability.
      </Paragraph>

      <SectionTitle>9. Termination of Service</SectionTitle>
      <Paragraph>
        Either party may terminate the service agreement with proper notice, resulting in machine retrieval and settling outstanding fees.
      </Paragraph>
    </TermsContainer>
  </Overlay>
);

export default TermsOverlay;
