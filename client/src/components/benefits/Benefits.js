import benefitsStyles from './Benefits.module.css'
import img1 from './benefitsImages/Vector(1).png'
import img2 from './benefitsImages/Vector(5).png'
import img3 from './benefitsImages/Vector(3).png'
import img4 from './benefitsImages/Vector(4).png'
import img5 from './benefitsImages/Vector(2).png'


function Benefits ()  {
    return (
        <div className={benefitsStyles.container}>
            <div className={benefitsStyles.section}>
            <img src={img1} alt='' className={benefitsStyles.icon}/>
            <p className={benefitsStyles.text}>Secure payments</p>
            </div>
            <div className={benefitsStyles.section}>
            <img src={img2} alt='' className={benefitsStyles.icon2}/>
            <img src={img5} className={benefitsStyles.dot} />
            <p className={benefitsStyles.text}>Click and collect nationwide</p>
            </div>
            <div className={benefitsStyles.section}>
            <img src={img3} alt='' className={benefitsStyles.icon}/>
            <p className={benefitsStyles.text}>Fast courier delivery</p>
            </div>
            <div className={benefitsStyles.section}>
            <img src={img4} alt='' className={benefitsStyles.icon3}/>
            <p className={benefitsStyles.text}>Bulk discounts {'&'} leasing available</p>
            </div>
        </div>
    )
}

export default Benefits;