import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer id="bottom" data-anchor="true" data-name="Footer" className="bg-gray-800 text-white p-2">
      <div id="footer" className="container mx-auto py-10">
        <section className="text-sm">
          <div className="container">
            <div className="grid grid-cols-12 gap-4">

              <div id="connect" className="col-span-12 lg:col-span-4 space-y-3">
                <h5 className="text-lg font-semibold">Connect with Me</h5>
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <i className="fa fa-envelope mr-2"></i>
                    <NavLink to="mailto:bibekdhakal680@gmail.com" className="hover:underline">bibekdhakal680@gmail.com</NavLink>
                  </li>
                  <li className="flex items-center">
                    <i className="fa fa-phone mr-2"></i>
                    <NavLink to="tel://6000518471" className="hover:underline">6000518471</NavLink>
                  </li>
                </ul>
                <div className="flex space-x-4">
                  <a target="_blank" href="/website/social/facebook" aria-label="Facebook" className="text-blue-500">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a target="_blank" href="/website/social/instagram" aria-label="Instagram" className="text-pink-500">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-2 space-y-3">
                <h5 className="text-lg font-semibold">Useful Links</h5>
                <ul className="list-none space-y-2">
                  <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
                  <li><NavLink to="/" className="hover:underline">Contact us</NavLink></li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </div>

      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center lg:text-left flex flex-col lg:flex-row justify-between items-center text-sm">
          <div className="text-gray-400">
            <span>Copyright © Bibek Dhakal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
