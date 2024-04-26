import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { FaCartPlus } from "react-icons/fa";
const NavBar = ({ setData,cart }) => {
    const location=useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const filterByCategory = (category) => {
        const element = items.filter((item) => item.category === category);
        setData(element);
    }
    const filterByPrice = (price) => {
        const element = items.filter((item) => item.price >= price);
        setData(element);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
        setSearchTerm("");
    }
    return (
        <>
            <header className='sticky-top'>
                <div className="nav-bar">
                    <Link to={'/'} className='brand'>E-Cart</Link>

                    <form
                        onSubmit={handleSubmit}
                        className="search-bar">
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text" placeholder='Search Products' />
                    </form>

                    <Link to={'/cart'} className='cart'>
                        <button type="button" className="btn btn-primary position-relative">
                            <FaCartPlus style={{fontSize:"1rem"}}/>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </Link>
                </div>
                {
                    location.pathname=='/'&&(
                        <div className="nav-bar-wrapper">
                    <div className="item">Filter by {"->"}</div>
                    <div
                        onClick={() => setData(items)}
                        className="item">No Filter</div>
                    <div
                        onClick={() => filterByCategory('mobiles')}
                        className="item">Moblies</div>
                    <div
                        onClick={() => filterByCategory('laptops')}
                        className="item">Laptops</div>
                    <div
                        onClick={() => filterByCategory('tablets')}
                        className="item">Tablets</div>
                    <div
                        onClick={() => filterByPrice(29999)}
                        className="item">{">=29000"}</div>
                    <div
                        onClick={() => filterByPrice(49999)}
                        className="item">{">=49999"}</div>
                    <div
                        onClick={() => filterByPrice(69999)}
                        className="item">{">=69999"}</div>
                    <div
                        onClick={() => filterByPrice(89999)}
                        className="item">{">=89999"}</div>
                </div>
                    )
                }
            </header>
        </>
    )
}

export default NavBar