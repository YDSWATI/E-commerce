import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import shopping_cart_ from '../Assets/shopping_cart_.png';
import { Link } from 'react-router-dom'; // ✅ Corrected import
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='Navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Shopper Logo" />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li className={menu === 'shop' ? 'active' : ''} onClick={() => setMenu('shop')}>
                    <Link to="/" style = {{textDecoration:'none'}}>SHOP</Link>
                </li>
                <li className={menu === 'men' ? 'active' : ''} onClick={() => setMenu('men')}>
                    <Link to="/mens" style = {{textDecoration:'none'}}>MEN</Link>
                </li>
                <li className={menu === 'women' ? 'active' : ''} onClick={() => setMenu('women')}>
                    <Link to="/womens" style = {{textDecoration:'none'}}>WOMEN</Link>
                </li>
                <li className={menu === 'kids' ? 'active' : ''} onClick={() => setMenu('kids')}>
                    <Link to="/kids" style = {{textDecoration:'none'}}>KIDS</Link>
                </li>
            </ul>

            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={shopping_cart_} alt="Cart" /></Link>
                
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;


