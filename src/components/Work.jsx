import React, { useState } from "react";
import Art from "./works/Art.jsx";
import CreativeWork from "./works/CreativeWork.jsx";
import Logo from "./works/Logo.jsx";
import Thumbnails from "./works/Thumb.jsx";
import Youtube from "./works/Youtube.jsx";

function Work() {
  const [selectedWork, setSelectedWork] = useState("youtube"); // Default state set to "youtube"

  const renderContent = () => {
    switch (selectedWork) {
      case "youtube":
        return <Youtube />;
      case "art":
        return <Art />;
      case "creative-work":
        return <CreativeWork />;
      case "logo":
        return <Logo />;
      case "thumbnails":
        return <Thumbnails />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      
      <div className="flex gap-4 items-center justify-center mb-1">
      <button
          onClick={() => setSelectedWork("youtube")}
          className={`${
            selectedWork === "youtube"
              ? "text-white border-none px-2 rounded-md font-semibold bg-red-600"
              : "font-semibold "
          }  hover:scale-110`}
        >
          Youtube
        </button>
        <button
          onClick={() => setSelectedWork("art")}
          className={`${
            selectedWork === "art"
              ? "text-white border-none px-2 rounded-md font-semibold bg-red-600"
              : "font-semibold "
          }  hover:scale-110`}
        >
          Art
        </button>
        <button
          onClick={() => setSelectedWork("creative-work")}
          className={`${
            selectedWork === "creative-work"
              ? "text-white border-none px-2 rounded-md font-semibold bg-red-600"
              : " font-semibold "
          }  hover:scale-110`}
        >
          Creative
        </button>
        <button
          onClick={() => setSelectedWork("logo")}
          className={`${
            selectedWork === "logo"
              ? "text-white border-none px-2 rounded-md font-semibold bg-red-600"
              : " font-semibold "
          }  hover:scale-110`}
        >
          Logo
        </button>
        <button
          onClick={() => setSelectedWork("thumbnails")}
          className={`${
            selectedWork === "thumbnails"
              ? "text-white border-none px-2 rounded-md font-semibold bg-red-600"
              : " font-semibold "
          }  hover:scale-110`}
        >
          Thumbnails
        </button>
      </div>

      {/* Render the selected content dynamically */}
      <div className="p-1">{renderContent()}</div>
    </div>
  );
}

export default Work;
