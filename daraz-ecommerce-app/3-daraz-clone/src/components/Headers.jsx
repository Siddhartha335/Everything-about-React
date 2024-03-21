import React from "react";
import { CgProfile } from "react-icons/cg";
import { LiaListSolid } from "react-icons/lia";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

const Headers = () => {

  const bag = useSelector((store)=> store.bag)

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="../images/daraz.png"
            alt="Myntra Home"
            style={{ backgroundColor: "#f85606" }}
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">Search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <span className="action_name">Profile</span>
          <CgProfile />
        </div>

        <div className="action_container">
          <span className="action_name">Wishlist</span>
          <LiaListSolid />
        </div>

        <Link to="/bag" style={{ color: "white", textDecoration: "none" }}>
          <div className="action_container">
            <span className="action_name">Bag</span>
            <IoBag />
            <span className="bag-item-count">{bag.length}</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Headers;
