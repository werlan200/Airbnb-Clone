import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 grid grid-cols-1 md:grid-cols-4 space-y-5 md:space-y-0 mt-14 px-12 md:px-32 py-16">
      <div className="space-y-4 text-sm text-gray-800">
        <h4 className="font-bold">ABOUT</h4>
        <p>Airbnb</p>
        <p>How does it work</p>
        <p>Investors</p>
        <p>Premium</p>
        <p>Luxery</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h4 className="font-bold">COMMUNITY</h4>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It is a clone</p>
        <p>Some useful links</p>
        <p>Orders</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h4 className="font-bold">HOST</h4>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It is a clone</p>
        <p>Some useful links</p>
        <p>Orders</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h4 className="font-bold">SUPPORT</h4>
        <p>Call Center</p>
        <p>Help</p>
        <p>Locations</p>
        <p>Contact us</p>
        <p>Join now</p>
      </div>
    </footer>
  );
};

export default Footer;
