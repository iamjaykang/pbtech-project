import brandStyles from './Brands.module.css'

export default function BrandCard ({sect}) {
    return (
        <div className={brandStyles.card}>
            <div className={brandStyles.innerContainer}>
                <img src={sect.image} className={ brandStyles.image} alt='' />
                <div className={brandStyles.text}>{sect.text}</div>
            </div>
        </div>
        )
}