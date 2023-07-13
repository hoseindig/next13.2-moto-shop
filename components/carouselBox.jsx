import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// https://www.npmjs.com/package/react-responsive-carousel
const carouselBox = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
    >
      <div>
        <img src="images/bannner/1.png" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="images/bannner/2.png" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="images/bannner/3.png" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default carouselBox;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
