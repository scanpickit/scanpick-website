import React from 'react';
import { Footer } from 'flowbite-react';
import logo from '../../src/images/logo.png';
import './footer.css';

const FooterComponent = ({ onOpenTermsOverlay, onOpenPrivacyPolicyOverlay }) => {
  return (
    <Footer container className="text-black">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              className='logo items-center ml-4 mt-4'
              href="https://scanpick.in"
              src={logo}
              alt="Scanpick Logo"
              width={'10%'}
              height={'10%'}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className='text-[#05d79f]' title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/scanpickit">Github</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/company/scanpick-pvt-ltd/">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className='text-[#05d79f]' title="Legal" />
              <Footer.LinkGroup col>
                <button onClick={onOpenTermsOverlay} className="text-black">Terms &amp; Conditions</button>
                <button onClick={onOpenPrivacyPolicyOverlay} className="text-black">Privacy Policy</button>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Scanpick" year={2024} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
