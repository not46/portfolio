import React, { useState, useEffect, useRef } from 'react';

function Welcome() {
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const videoRef = useRef(null);

  const textToType = `Welcome! I'm Bibek Dhakal, a dedicated Video Editor & Graphic Designer. Let's bring your ideas to life with compelling visuals!`;
  const typingSpeed = 50; // Typing speed in milliseconds

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
          ref={videoRef} // Reference to control playback rate
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source className='rounded-lg' src="https://videos.pexels.com/video-files/2423338/2423338-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1 className="smoky-reveal md:w-[50%] text-4xl text-gray-300 font-bold mb-4">
        {text}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
}

export default Welcome;
