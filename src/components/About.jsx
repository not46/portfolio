import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const About = () => {
  return (
    <div id="wrap" className="oe_structure oe_empty">
      {/* Hero Section */}
      <section className="s_text_cover o_colored_level o_full_screen_height o_cc o_cc2 py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* About Text Section */}
            <div className="lg:col-span-6 p-6 z-10  shadow-lg rounded-lg">
              <h1 className="text-4xl font-bold">Hello, I'm Bibek Dhakal</h1>
              <p className="mt-4">
                <strong>Video Editor & Graphic Designer</strong>
              </p>
              <p className="mt-2">
                Based in Guwahati, Assam. With nearly 3 years of professional
                experience, I specialize in video editing and graphic design,
                collaborating with{" "}
                <strong>YouTubers, Social media influencers,</strong> and{" "}
                <strong>entertainment pages</strong>. I bring creative solutions
                to enhance visual storytelling across digital platforms.
              </p>
              {/* Social Media Icons */}
              <div className="flex justify-end space-x-4 mt-4 mr-4">
                <Link
                  to="https://www.facebook.com/profile.php?id=100090172245298&mibextid=ZbWKwL"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-[#1877F2] text-2xl" />
                </Link>
                <Link
                  to="https://www.instagram.com/bibekdhakal.in/profilecard/?igsh=MTZ1NnJhbWNmcTY1bA=="
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-[#E1306C] text-2xl" />
                </Link>
              </div>
              {/* Separator */}
              <div className="my-8">
                <hr className="w-full border-gray-300" />
              </div>
              
            </div>
            {/* Background Image (only for large screens) */}
            <div
              className="lg:col-span-6 hidden lg:block o_cc o_cc1 o_not_editable bg-cover bg-center"
              style={{
                backgroundImage: "url('photo.jpg')",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="s_features py-16  px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="btn btn-lg bg-blue-600 w-[30vw] lg:w-[10vw] font-semibold text-white mx-auto py-2  mb-4 rounded-full hover:bg-blue-700 transition">My Skills</h3>
            <p className="text-lg ">
              List and describe the key features of your solution or service.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skill 1: Video Editing */}
            <div className=" p-4 rounded-2xl shadow-lg">
             
              <i className="fa fa-flag-o mb-4 text-blue-500 text-3xl"></i>
              <h3 className="text-xl font-semibold">Video Editing</h3>
              <br />
              <p className="mt-2 ">
                Expert in professional video editing, proficient in Premiere
                Pro, DaVinci Resolve, and After Effects. With comprehensive
                knowledge in visual storytelling, I craft engaging video content
                for YouTube, social media, and entertainment platforms.
              </p>
            </div>

            {/* Skill 2: Graphic Design */}
            <div className=" p-4 rounded-2xl shadow-lg">
             
              <i className="fa fa-paper-plane-o mb-4 text-blue-500 text-3xl"></i>
              <h3 className="text-xl font-semibold">Graphic Design</h3>
               <br />
              <p className="mt-2 ">
                Creating visually compelling graphics, logos, and thumbnails
                that leave a lasting impact. Proficient in Adobe Photoshop and
                Illustrator, I design with precision to build brand identities
                and create eye-catching visuals across platforms.
              </p>
            </div>

            {/* Skill 3: Social Media Management */}
            <div className=" p-4 rounded-2xl shadow-lg">
             
              <i className="fa fa-credit-card mb-4 text-blue-500 text-3xl"></i>
              <h3 className="text-xl font-semibold">Social Media Management</h3>
              <br />
              <p className="mt-2 ">
                Skilled in managing social media content and brand identity, I
                help brands grow through tailored strategies. From planning to
                execution, I manage posts, design graphics, and optimize social
                media presence across platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="s_call_to_action py-16 px-2 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-9/12 mb-6 lg:mb-0 p-4">
              <h3 className="text-3xl font-bold">
                Ready to bring your digital vision to life?
              </h3>
              <p className="text-lg mt-2">
                Let's collaborate to create innovative solutions that stand out
                in the digital landscape. Reach out today and let's build
                something extraordinary together.
              </p>
            </div>
            <div className="lg:w-3/12 text-right">
              <a
                href="#contact"
                className="bg-white font-semibold text-blue-600 py-2 px-6 rounded-full hover:bg-gray-100 transition"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
