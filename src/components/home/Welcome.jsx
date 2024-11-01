import React, { useState, useEffect, useRef } from 'react';

function Welcome() {
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  // Define messages for desktop and mobile
  const desktopText = `Welcome! I'm Bibek Dhakal, a dedicated Video Editor & Graphic Designer. Let's bring your ideas to life with compelling visuals!`;
  const mobileText = `Hi! I'm Bibek Dhakal, a Video Editor & Graphic Designer ready to bring your ideas to life with stunning visuals!`;
  const textToType = isMobile ? mobileText : desktopText;
  const typingSpeed = 50;

  // Check screen size on mount to set the isMobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentCharIndex < textToType.length) {
        setText(textToType.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
  }, [currentCharIndex, textToType]);

  // Set the playback rate once the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Set to half-speed
    }
  }, []);

  return (
    <div className="relative w-[90vw] flex items-center justify-center p-8 mx-auto text-center h-[45vh]">
      <div className="absolute h-[50vh] inset-0 -z-10">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source className="rounded-lg" src="https://videos.pexels.com/video-files/2423338/2423338-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1 className="smoky-reveal md:w-[50%] text-3xl text-gray-300 font-bold mb-4">
        {text}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
}

export default Welcome;
