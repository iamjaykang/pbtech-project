import ButtonCard from './ButtonCard';
import topSellerStyles from './TopSellerCarousel.module.css';
import { buttonData } from './TopSellerInfo'
import arrow from '../../images/Vector.png'

function TopSellerCarousel () {
    return (
        <>
        <div>
            <h1 className={topSellerStyles.typeTitle}>Our top sellers</h1>
        </div>
        <div className={topSellerStyles.container}>
        {buttonData.map((sect) => {
          return <ButtonCard sect={sect} />;
        })}
      </div>
      <div className={topSellerStyles.skipButtons}>
      <button className={topSellerStyles.prevButton}><img src={arrow} alt='' /></button>
      <button className={topSellerStyles.nextButton}><img src={arrow} alt='' /></button>
      </div>
      </>
    )
}

export default TopSellerCarousel;