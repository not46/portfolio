

import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const ContactForm = () => {
  return (
    <section className="container mx-auto px-1 lg:px-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start  p-5 rounded-lg ">
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-4xl font-semibold leading-tight ">Get in Touch</h2>
          <p className="text-lg leading-relaxed">
          Contact me about anything related to the services.
          I'll do my best to get back to you as soon as possible.
          </p>
          <p className="text-lg leading-relaxed flex items-center gap-5">
          <IoLocationSharp />  <p className="text-lg font-bold ">Guwahati</p>
          </p>

          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
            <p className="text-lg font-bold ">+91 6000518471</p>
          </div>

          <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <p className="text-lg font-bold ">bibekdhakal680@gmail.com
            </p>
          </div>


          <div className="flex justify-start gap-5 space-x-4 mt-4 mr-4">
                <Link to="/website/social/facebook" target="_blank" aria-label="Facebook">
                <FaFacebookF  className="text-[#1877F2] text-2xl"/>
                
                </Link>
                <Link href="/website/social/instagram" target="_blank" aria-label="Instagram">
                <FaInstagram className="text-[#E1306C] text-2xl"/>
               
                
                </Link>
              </div>
        
          
        </div>

        <div className="w-full lg:w-1/2 bg-white p-4 rounded-lg shadow-md">
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="peer w-full border border-gray-300 text-gray-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 placeholder-transparent"
                placeholder="First Name"
                required
              />
              <label
                htmlFor="first-name"
                className="absolute left-3 -top-2.5 text-gray-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600"
              >
                First Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                className="peer w-full border border-gray-300 text-gray-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 placeholder-transparent"
                placeholder="Email"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-2.5 text-gray-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600"
              >
                Email
              </label>
            </div>
            
            <div className="relative">
              <input
                type="number"
                name="phone"
                id="phone"
                className="peer w-full border border-gray-300 text-gray-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 placeholder-transparent"
                placeholder="Phone"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-2.5 text-gray-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600"
              >
                Phone
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                name="subject"
                id="subject"
                className="peer w-full border border-gray-300 text-gray-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 placeholder-transparent"
                placeholder="Subject"
                required
              />
              <label
                htmlFor="subject"
                className="absolute left-3 -top-2.5 text-gray-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600"
              >
                Subject
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                className="peer w-full border border-gray-300 text-gray-900 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 placeholder-transparent"
                placeholder="Message"
                rows={5}
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 -top-2.5 text-gray-600 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-indigo-600"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
