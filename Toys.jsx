import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ImageSlider from "../components/ImageSlider";

function Toys() {
  return (
    <>
      <div className="pink-page container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-12">
            <ImageSlider />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
export default Toys;
