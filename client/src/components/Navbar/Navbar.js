import navStyles from "./Navbar.module.css";
import userIcon from "../../images/userLogin.png";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className={navStyles.header}>
        <>
          <img
            className={navStyles.pblogo}
            src="https://www.pbtech.co.nz/imglib/dd/pb-logo-alt.svg"
            alt="Official PBTech Logo"
          />
          <div className={navStyles.searchSection}>
          <img
              className={navStyles.searchIcon}
              src="data:image/png;base64,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"
              alt=""
            />
            <input className={navStyles.searchInput} placeholder="Search" />
                </div>
          <div className={navStyles.icons}>
            <img className={navStyles.loginIcon} src={userIcon} alt=""></img> 
            <img className={navStyles.favIcon} src='https://icon-library.com/images/heart-icon-transparent/heart-icon-transparent-1.jpg' alt=""></img>
            <img className={navStyles.cartIcon} src='https://www.pngkey.com/png/full/134-1344540_free-shopping-cart-png-small-shopping-cart-icon.png' alt=""></img>
          </div>
        </>
      </div>
      <nav className={navStyles.navbar}>
        <ul>
           <li><Link to='/'>Departments</Link><img src="https://pixlok.com/wp-content/uploads/2021/12/Dropdown-arrow-Icon-93kdf.png" alt="" className={navStyles.dropdownArrow}/></li>
           <li><Link to='/'>Brands</Link><img src="https://pixlok.com/wp-content/uploads/2021/12/Dropdown-arrow-Icon-93kdf.png" alt="" className={navStyles.dropdownArrow}/></li>
           <li><Link to='/'>Services</Link><img src="https://pixlok.com/wp-content/uploads/2021/12/Dropdown-arrow-Icon-93kdf.png" alt="" className={navStyles.dropdownArrow}/></li>
           <li><Link to='/'>PB Business</Link><img src="https://pixlok.com/wp-content/uploads/2021/12/Dropdown-arrow-Icon-93kdf.png" alt="" className={navStyles.dropdownArrow}/></li>
        </ul>
      </nav>
    </>
  );
}



export default Navbar;
