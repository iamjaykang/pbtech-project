import laptopTypeStyles from "./LaptopTypeButtons.module.css";


export default function ButtonCard ({sect}) {
    return (
        <div className={laptopTypeStyles.card}>
            <div className={laptopTypeStyles.innerContainer}>
                <img src={sect.image} className={ laptopTypeStyles.image} alt=''/>
                <div className={laptopTypeStyles.text}>{sect.text}</div>
            </div>
        </div>
        )
}