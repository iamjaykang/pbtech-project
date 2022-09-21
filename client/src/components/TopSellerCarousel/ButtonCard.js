import topSellerStyles from "./TopSellerCarousel.module.css";


export default function ButtonCard ({sect}) {
    return (
        <div className={topSellerStyles.card}>
            <div className={topSellerStyles.innerContainer}>
            <div className={topSellerStyles.text}>{sect.text}</div>
                <img src={sect.image} className={ topSellerStyles.image} />
                <div className={ topSellerStyles.starSection}>
                    <img src={sect.star} className={ topSellerStyles.star}/>
                    <img src={sect.star2} className={ topSellerStyles.star}/>
                    <img src={sect.star3} className={ topSellerStyles.star}/>
                    <img src={sect.star4} className={ topSellerStyles.star}/>
                    <img src={sect.star5} className={ topSellerStyles.star}/>
                    </div>

                <div className={topSellerStyles.oldPrice}>{sect.oldPrice}</div>
                <div className={topSellerStyles.newPrice}>{sect.newPrice}</div>
                <button className={topSellerStyles.button}>{sect.button}</button>
            </div>
        </div>
        )
}