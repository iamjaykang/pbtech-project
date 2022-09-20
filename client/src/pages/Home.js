import Navbar from "../components/navbar/Navbar";
import Carousel, { CarouselItem } from "../components/carousel/Carousel";
import image1 from "../components/carousel/carousel1.png";
import image2 from "../components/carousel/carousel2.jpg";
import image3 from "../components/carousel/carousel3.jpg";
import carouselStyles from "../components/carousel/Carousel.module.css";
import LaptopTypeButtons from "../components/laptopTypeButtons/LaptopTypeButtons";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel>
        <CarouselItem>
          <img
            src={image1}
            alt=""
            className={carouselStyles.carouselImage}
          ></img>
          <div className={carouselStyles.overlayBG}>
            <h1 className={carouselStyles.overlayTitle}>
              Find the best laptop <br /> for your business
            </h1>
            <h3 className={carouselStyles.overlayText}>
              Looking for a perfect laptop for your office? Use our <br />
              custom tool for prices and features
            </h3>
            <button className={carouselStyles.overlayButton}>
              Find a laptop now
            </button>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img
            src={image2}
            alt=""
            className={carouselStyles.carouselImage}
          ></img>
          <div className={carouselStyles.overlayBG}>
            <h1 className={carouselStyles.overlayTitle}>
              Exclusive deals for <br /> business owners
            </h1>
            <h3 className={carouselStyles.overlayText}>
              Gain access to PB Tech's commercial pricing and <br />
              features such as leasing and flexibles payments
            </h3>
            <button className={carouselStyles.overlayButton2}>
              Apply for a business account
            </button>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img
            src={image3}
            alt=""
            className={carouselStyles.carouselImage}
          ></img>
          <div className={carouselStyles.overlayBG}>
            <h1 className={carouselStyles.overlayTitle}>
              We're happy to help <br /> with anything
            </h1>
            <h3 className={carouselStyles.overlayText}>
              Let our PB Tech experts help you navigate your tech <br />
              woes so you can focus on running your business
            </h3>
            <button className={carouselStyles.overlayButton3}>
              Talk to our team
            </button>
          </div>
        </CarouselItem>
      </Carousel>
      <LaptopTypeButtons />
    </>
  );
}

export default Home;
