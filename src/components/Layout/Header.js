import React from "react";
import headerImage from "../../Assets/header.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1> K Meals</h1>
               <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage}/>
            </div>
        </React.Fragment>
    )


}

export default Header;
