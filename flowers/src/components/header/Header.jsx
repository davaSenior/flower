import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import './header.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const { cartItem } = useSelector( (state) => state.carts)
  return (
    <div className='header container'>
        <div className="header-left">
            <h1> exclusive </h1>
            <ul>
                <li> <a href="/"> home </a> </li>
                <li> <a href=""> about </a> </li>
                <li> <a href=""> contact </a> </li>
                <li> <a href=""> sign up </a> </li>
            </ul>
        </div>
        <div className="header-right">
            <div className="search">
                <input type="text" placeholder='typing...'/>
                <CiSearch />
            </div>
            <div className="icons">
                <a href="">
                    <div className="icon">
                        <CiHeart className='icon-react'/>
                    </div>
                </a>
                <Link to="/cartPage">
                    <div className="icon">
                        <CiShoppingCart className='icon-react'/>
                        <div className="count"> {cartItem.length} </div>
                    </div>
                </Link>
                <a href="">
                    <div className="icon">
                        <CiUser className='icon-react'/>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header

