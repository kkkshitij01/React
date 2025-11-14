import Accordian from "./components/accordian";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/Image-slider/ImageSlider";
import "./App.css";
import LoadMore from "./components/Load-more-data/LoadMore";
import QrCodeGen from "./components/qr-code-generator/QR";
import TreeVidew from "./components/Tree-view/TreeView";

function App() {
  return (
    <>
      {/* Accordian Component */}
      <Accordian />

      {/* Random color Component */}
      <RandomColor />

      {/* Star rating Component */}
      <StarRating noOfStars={5} />

      {/* Image Slider Component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={15} page={10} />

      {/* Image Slider Component */}
      <LoadMore />

      {/* OR Code Generator Component */}
      <QrCodeGen />

      {/* OR Code Generator Component */}
      <TreeVidew />
    </>
  );
}

export default App;
