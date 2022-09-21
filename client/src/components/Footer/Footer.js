import footerStyles from './Footer.module.css'
import icon from "./Vector(6).png"
import copyright from "./copyright.png"
import insider from './insider.png'

function Footer () {
    return (
        <div className={footerStyles.container}>
            <div className={footerStyles.innerContainer}>
                <div className={footerStyles.iconTitle}>
            <h1 className={footerStyles.title}>Shop By DEPARTMENT</h1>
            <img src={icon} alt='' className={footerStyles.icon} />
            </div>
           
            <h1 className={footerStyles.title}>Commercial</h1>
            <h1 className={footerStyles.title2}>Services {'&'} Support</h1>
            <h1 className={footerStyles.title3}>Sign up for news</h1>
            <img src={insider} style={{height: '110px', width: '110px',position: 'absolute', right: '-30px', top: '40px'}} alt='' />


            </div>
            <div className={footerStyles.lowerContainer}>
            <div className={footerStyles.departmentSect}>
            <ul className={footerStyles.links}>
                <li>Computers {'&'} Tablets</li>
                <li>PC Parts</li>
                <li>Printing {'&'} Office</li>
                <li>TV {'&'} AV</li>
                <li>Gaming</li>
                <li>Smart Home {'&'} Security</li>
                <li>Others</li>
            </ul>
            <ul className={footerStyles.links}>
                <li>Peripherals {'&'} Accessories</li>
                <li>Networking</li>
                <li>Phones {'&'} Accessories</li>
                <li>Headphones {'&'} Audio</li>
                <li>Cameras {'&'} Drones</li>
                <li>Toys, Hobbies {'&'} STEM</li>
                <li>Gift Ideas</li>
            </ul>
            <ul className={footerStyles.links2}>
                <li>Business</li>
                <li>Education</li>
                <li>Wholesale</li>
                <li>Government</li>
                <li>Health</li>
                <li>Additional Services</li>
            </ul>
            <ul className={footerStyles.links2}>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Help</li>
                <li>Return {'&'} Warranty</li>
                <li>Finance</li>
                <li>Additional Services</li>
            </ul>
            <ul className={footerStyles.links3}>
                <p>get early access to sales, <br />exclusive discounts {'&'} more!  </p>
                <input placeholder='Your e-mail address' className={footerStyles.input}></input>
                <button className={footerStyles.button}>Sign up for newsletter</button>
                <div className={footerStyles.checkdiv}>
                <input type='checkbox' className={footerStyles.checkbox}/>
                <p>I accept the terms and conditions</p>
                </div>
            </ul>
            </div>
            </div>
            <div className={footerStyles.bottomDiv}>
                <img style={{height: '25px', margin: '25px'}} src={copyright} alt='' />
                <h2 className={footerStyles.bottomTitle}>PB Technologies Limited</h2>
                <p className={footerStyles.bottomText}>587 Great South Road, Manukau, Auckland, New Zealand </p>
                <div className={footerStyles.socials}>
                    <img src='https://totalpng.com/files/preview/800x800/11656657462dox1andzz9zqnop8emjbvbmvmy5qkfupetkoupdsw6sms3c2o16n9hwqnx7tc2m0y1g5hrxqsi8704eadfnztryrqflxhkkaj2qy.png' alt='' className={footerStyles.socialLogos}/>
                    <img src='https://cdn.pixabay.com/photo/2018/03/19/02/52/logo-instagram-3238899_1280.png' alt='' className={footerStyles.socialLogos}/>
                    <img src='https://www.o1properties.ru/wp-content/uploads/2022/03/photo_2022-03-15_22-56-22__2_-removebg-preview.png' alt='' className={footerStyles.socialLogos}/>
                </div>
                <p className={footerStyles.bottomTextLink}>Additional Services </p>
            </div>
        </div>
    )
}
export default Footer;