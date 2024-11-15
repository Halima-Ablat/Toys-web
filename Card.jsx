import { Link } from "react-router-dom";
import pic from "../assets/card.webp";
function Card() {
  return (
    <>
      <div
        className="card rounded-3 text-white mt-3"
        style={{ width: "18rem" }}
      >
        <img src={pic} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title text-dark fw-bold">Plush</h5>
          <p class="card-text">Last updated 3 mins ago</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="border-0 mt-5 rounded-3">Shop Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Card;
