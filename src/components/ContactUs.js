import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-black py-24 sm:py-32" id="ContactUs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#05d79f] sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Have questions or need assistance? Reach out to us. We're here to help!
          </p>
          <div className="mt-8 text-lg leading-8 text-gray-300">
            <p>Email: <a href="mailto:scanpickit@gmail.com" className="text-[#05d79f]">scanpickit@gmail.com</a></p>
            <p>Phone: <a href="tel:+918050765537" className="text-[#05d79f]">+91 80507 65537</a></p>
            <p>Address: <span className="text-[#05d79f]">#310, Valsala Nivas, 6th Cross,<br />
              Santhosh Nagar, Pipeline Road, T.Dasarahalli<br />
              Bangalore - 57</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
