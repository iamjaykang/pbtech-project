import ButtonCard from './ButtonCard';
import laptopTypeStyles from './LaptopTypeButtons.module.css';
import { buttonData } from './LaptopTypeInfo'

function LaptopTypeButtons () {
    return (
        <>
        <div>
            <h1 className={laptopTypeStyles.typeTitle}>Shop by laptop type</h1>
        </div>
        <div className={laptopTypeStyles.container}>
        {buttonData.map((sect) => {
          return <ButtonCard sect={sect} />;
        })}
      </div>
      </>
    )
}

export default LaptopTypeButtons;