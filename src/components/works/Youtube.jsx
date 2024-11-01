import React from "react";

const Youtube = () => {
  return (
    <div id="wrap" className="oe_structure oe_empty p-4">
      {/* Just Assam Things Section */}
      <section className=" py-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold mb-4">'Just Assam Things Series'</h2>
              
              <p className="md:text-xl">
                A series called 'Just Asking' where we challenge people’s general
                knowledge, opinions, and guesses with fun questions.
              </p>
              <br />
              <p className="md:text-xl">
                I handle everything—filming, editing, creating thumbnails, and social media
                clips—to make each episode engaging and entertaining.
              </p>
            </div>
            <br />
            <div className="lg:col-span-3">
              <iframe
                loading="lazy"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/Y1bL-fGku8E?rel=0&autoplay=0"
                className="w-full h-64"
              ></iframe>
            </div>
            <div className="lg:col-span-3">
              <iframe
                loading="lazy"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/EcchNRr6UQE?rel=0&autoplay=0"
                className="w-full h-64 "
              ></iframe>
            </div>
            <div className="lg:col-span-4 lg:col-start-8">
              <iframe
                loading="lazy"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/7p1Tm0b_Nvs?rel=0&autoplay=0"
                className="w-full h-64 "
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Zeroth Drama Section */}
      <section className=" py-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold mb-4">'Zeroth Drama'</h2>
              <p className="md:text-xl">
                For the Zero Drama YouTube channel, I edited Episodes 3 to 6 of their parody
                podcast and managed thumbnail design to create an engaging, entertaining experience
                for viewers.
              </p>
            </div>
            <br />
            <div className="lg:col-span-3">
              <iframe
                loading="lazy"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/1k95sVf6GI0?rel=0&autoplay=0"
                className="w-full h-64 "
              ></iframe>
            </div>
            <div className="lg:col-span-3">
              <iframe
                loading="lazy"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/YXTI-gEAZn0?rel=0&autoplay=0"
                className="w-full h-64 "
              ></iframe>
            </div>
            <div className="lg:col-span-4 lg:col-start-8">
              <iframe
                loading="lazy"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/CoIda1k9jcw?rel=0&autoplay=0"
                className="w-full h-64"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* BharatERP Section */}
      <section className=" py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold mb-4">'BharatERP'</h2>
              <p className="md:text-xl">
                Produced a tutorial video for Bharat ERP Billing Software, simplifying billing and
                management processes with clear, step-by-step guidance. The video helps users
                quickly learn essential features for efficient business operations.
              </p>
            </div>
            <br />
            <div className="lg:col-span-4">
              <iframe
                loading="lazy"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/iP5FLeQ-AXc?rel=0&autoplay=0"
                className="w-full h-64"
              ></iframe>
            </div>
            
            <div className="lg:col-span-4 lg:col-start-8">
              <iframe
                loading="lazy"
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/QTNaHI7sbnc?rel=0&autoplay=0"
                className="w-full h-64"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Youtube;
