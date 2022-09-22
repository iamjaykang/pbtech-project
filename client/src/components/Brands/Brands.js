import brandStyles from "./Brands.module.css";
import { brandDataA, brandDataB } from "./BrandInfo";
import BrandCard from "./BrandCard";
import bannerImage from '../../images/bannerImage.png'

function Brands() {
  return (
    <>
      <h1 className={brandStyles.title}>Shop By Brand</h1>
      <div className={brandStyles.mainContainer}>
        {brandDataA.map((sect) => {
          return <BrandCard sect={sect} />;
        })}
      </div>
      <div className={brandStyles.mainContainer}>
        {brandDataB.map((sect) => {
          return <BrandCard sect={sect} />;
        })}
      </div>
      <div className={brandStyles.offerBanner}>
        <img src={bannerImage} alt='' className={brandStyles.bannerImage}/>
        <h1 className={brandStyles.bannerTitle}>Get bulk discounts</h1>
        <p className={brandStyles.bannerText}>on all office laptops this September</p>
        <button className={brandStyles.offerButton}><p className={brandStyles.offerButtonText}>Check offer</p></button>
      </div>
    </>
  );
}

export default Brands;
