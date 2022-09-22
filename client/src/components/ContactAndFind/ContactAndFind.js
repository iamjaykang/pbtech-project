import contactStyles from './ContactAndFind.module.css';
import img1 from '../../images/contactGirl.png';
import img2 from '../../images/laptop.png';
import img3 from '../../images/Eclipse.png';
import img4 from '../../images/Rectangle.png';

function ContactAndFind ({nextStep}) {
    return (
        <>
        <img className={contactStyles.outerImage} src={img3} alt=''/>
        <img className={contactStyles.rectangle1} src={img4} alt=''/>
        <img className={contactStyles.rectangle2} src={img4} alt=''/>
        <img className={contactStyles.rectangle3} src={img4} alt=''/>
        <img className={contactStyles.rectangle4} src={img4} alt=''/>
        <div className={contactStyles.container}>
            
            <div className={contactStyles.phoebeDiv}> 
                
                <div className={contactStyles.info}>
                <h1 className={contactStyles.titles}>Ask Phoebe</h1>
                <p>Can't find what you're looking for? <br /> 
                Get online shopping help from <br />
                our friendly team</p>
                <button className={contactStyles.button}>Schedule a call</button>
                </div>
                <img className={contactStyles.phoebe} src={img1} alt=''/>
                
            </div>
            
            
            <div className={contactStyles.finderDiv}> 
            <div className={contactStyles.info}>
                <h1 className={contactStyles.titles}>Try our laptop finder</h1>
                <p>Whether you're after using your laptop for <br /> 
                work, school, gaming, or personal use, we <br />
                can point you in the right direction</p>
                <button onClick={nextStep} className={contactStyles.button2}>Start your search</button>
                </div>
                <img className={contactStyles.laptop} src={img2} alt=''/>
            </div>

        </div>
        </>
    )
}

export default ContactAndFind;