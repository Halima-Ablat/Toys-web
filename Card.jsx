import { Link } from "react-router-dom";
import teddy from "../assets/image-1.webp";
import sheep from "../assets/image-3.jpeg";
import tiger from "../assets/image-4.jpg";
import monkey from "../assets/image-5.jpeg";
import rabbit from "../assets/monkey.webp";
import elephant from "../assets/lion.webp";

const images = [
  { url: teddy, name: "Plush", caption: "Shop our Plush Toys" },
  { url: rabbit, name: "Teddy", caption: "Shop Animal Soft Toys" },
  { url: tiger, name: "Tiger", caption: "Go to our store for 10% off" },
  { url: sheep, name: "Elephant", caption: "Shop our Plush Toys" },
  { url: monkey, name: "Sheep", caption: "Shop Animal Soft Toys" },
  { url: elephant, name: "Monkey", caption: "Go to our store for 10% off" },
];
function Card() {
  return (
    <>
      <h2 className="text-center mt-3">Recommended Toys</h2>
      <p className="text-center">Some top rated soft toys We Reccomend!</p>
      <div className="row justify-content-center">
        {images.map((image, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
            <div className="card rounded-3 text-white">
              <div
                className="card-img"
                style={{
                  height: "250px",
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="card-title text-dark fw-bold">{image.name}</h5>
                  <p className="card-text">{image.caption}</p>
                  <Link to="/not-found" style={{ textDecoration: "none" }}>
                    <button className="border-0 mt-2 rounded-3">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Card;
