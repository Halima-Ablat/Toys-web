import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="background-image">
        <Navbar />
        <div className="container-fluid p-0">
          <div className="back-image text-white text-center">
            <div className="front-font">
              <p>Hand made toys</p>
              <h1>Welcome to Adeena's world</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
