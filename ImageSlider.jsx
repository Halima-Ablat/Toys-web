import React from "react";
// import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import teddy from "../assets/image-1.webp";
import rabbit from "../assets/monkey.webp";
import elephant from "../assets/lion.webp";

const slideImages = [
  { url: teddy, caption: "Shop our Plush Toys" },
  { url: rabbit, caption: "Shop Animal Soft Toys" },
  { url: elephant, caption: "Go to our store for 10% off" },
];

const slideContainerStyle = {
  width: "100%",
};
const divStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  height: "400px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const spanStyle = {
  fontSize: "40px",
  color: "#000000",
  fontWeight: "bold",
};

function ImageSlider() {
  return (
    <div className="slide-container" style={slideContainerStyle}>
      <Fade>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
              <span style={{ ...spanStyle }}>{image.caption}</span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
export default ImageSlider;
