

import React from 'react';

const Skills = () => {
  return (
    <section className="relative p-8 lg:pt-5 lg:pl-1 lg:pb-6 ">
        
      <div className="container mx-auto">
      <h1 className='text-2xl  ml-3 lg:ml-4 font-bold mb-4'>
        What I Offer
       </h1>
        <div className="grid gap-4 lg:gap-8 grid-cols-12 ">
          {/* First Block - Large Image */}
          <div className="col-span-12 lg:col-span-5 row-span-8 flex justify-center rounded-lg overflow-hidden">
            <img
              src="https://bibekdhakal.odoo.com/web/image/498-a733b19c/a%20dog%20day%20out%203.webp"
              alt="A Dog Day Out"
              className="w-full h-auto "
              loading="lazy"
            />
          </div>

          {/* Second Block - Video Editing */}
          <div
            className="col-span-12 lg:col-span-4 row-span-4 flex flex-col justify-end items-start p-5 bg-cover bg-center bg-no-repeat rounded-lg relative"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dgymvrggo/image/upload/v1730465772/videoEdit_jmomlw.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <h3 className="relative z-10 text-3xl font-mono text-gray-300">
              Video <br /> Editing
            </h3>
          </div>

          {/* Third Block - Brand Identity */}
          <div
            className="col-span-12 lg:col-span-3 row-span-4 flex flex-col justify-end items-start p-5 bg-cover bg-center bg-no-repeat rounded-lg relative"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dgymvrggo/image/upload/v1730465772/brand_raerew.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <h3 className="relative z-10 text-3xl font-mono text-gray-300">
              Brand <br /> Identity
            </h3>
          </div>

          {/* Fourth Block - Art Work */}
          <div
            className="col-span-12 lg:col-span-3 row-span-4 flex flex-col justify-end items-start p-5 bg-cover bg-center bg-no-repeat rounded-lg relative"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dgymvrggo/image/upload/v1730460783/OVERDUE-2_nw98su.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <h3 className="relative z-10 text-3xl font-mono text-gray-300">
              Art <br /> Work
            </h3>
          </div>

          {/* Fifth Block - Thumbnails */}
          <div
            className="col-span-12 lg:col-span-4 row-span-4 flex flex-col justify-end items-start p-5 bg-cover bg-center bg-no-repeat rounded-lg relative"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dgymvrggo/image/upload/v1730461328/Ipl_2_m5a1dy.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <h3 className="relative z-10 text-3xl font-mono text-gray-300">Thumbnails</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
