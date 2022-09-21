import HomeStyles from './Home.module.css'
import Navbar from "../components/Navbar/Navbar";
import Carousel, { CarouselItem } from "../components/Carousel/Carousel";
import image1 from "../components/Carousel/carousel1.png";
import image2 from "../components/Carousel/carousel2.jpg";
import image3 from "../components/Carousel/carousel3.jpg";
import carouselStyles from "../components/Carousel/Carousel.module.css";
import LaptopTypeButtons from "../components/LaptopTypeButtons/LaptopTypeButtons";
import ContactAndFind from "../components/ContactAndFind/ContactAndFind";
import Brands from "../components/Brands/Brands";
import TopSellerCarousel from '../components/TopSellerCarousel/TopSellerCarousel';
import Benefits from '../components/Benefits/Benefits';
import Footer from '../components/Footer/Footer';


function Home() {
  return (
    <>
      <Navbar />
      <div className={HomeStyles.page}>
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
      <ContactAndFind />
      <Brands />
      <TopSellerCarousel />
      <Benefits />
      <Footer />
      </div>
    </>
  );
}

export default Home;
