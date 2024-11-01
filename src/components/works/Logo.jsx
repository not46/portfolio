import React from "react";

function Logo() {
  return (
    <div className="md:flex-row md:flex-wrap md:p-1 md:gap-4 lg:p-4 flex flex-col items-center justify-center gap-3 p-6">
     
      <p className="p-1">
        <video className="md:w-[40vw] rounded-xl lg:w-[30vw]" controls>
          <source src="https://res.cloudinary.com/dgymvrggo/video/upload/v1730461247/SPM_1_gsbzsg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </p>
      <p className="p-1">
        <img className="md:w-[40vw] rounded-xl lg:w-[30vw]" src="https://res.cloudinary.com/dgymvrggo/image/upload/v1730461244/otrixon_fts1sz.jpg" alt="Otrixon logo" />
      </p>
      <p className="p-1">
        <img className="md:w-[40vw] rounded-xl lg:w-[30vw]" src="https://res.cloudinary.com/dgymvrggo/image/upload/v1730461243/logo_xtmahy.png" alt="Company logo" />
      </p>
    </div>
  );
}

export default Logo;
