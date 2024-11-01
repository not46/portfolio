import React from "react";

function Work() {
  return (
    <>
      <div className="ml-4">
        <h1 className="mt-4  text-2xl font-bold mb-5 ml-10">My Works</h1>
      </div>
      <div className="flex items-center lg:px-6 justify-center gap-4 p-1 m-2 flex-wrap md:flex-row ">
        <div className="ml-2 mt-4 ">
          <iframe
           className="md:w-[60vw] lg:w-[30vw] rounded-lg"
            width="350"
            height="300"
            src="https://www.youtube.com/embed/iOdVHqQgA4A?si=d9b5SWs87p4pSRCf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="ml-2 mt-4">
          <img className="w-[350px] h-[370px] md:w-[60vw] lg:w-[30vw]" src="spm.gif" alt="" />
        </div>
        <div className="flex  ml-2 mt-4">
          <iframe 
           className="md:w-[60vw] lg:w-[30vw] rounded-lg"
            width="350"
            height="300"
            src="https://www.youtube.com/embed/hZZm4XB8DBI?si=FMnWDT43YFsawaI8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
         
      </div>
    </>
  );
}

export default Work;
