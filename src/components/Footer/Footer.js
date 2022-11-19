import React from "react";
import youtube from '../../assests/youtube-logo.jpg';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <React.Fragment>
           <div className={classes.footer}>
                <h3>The Generics</h3>
                <div className={classes.icons}>
                    <ul>
                        <a href="www.youtube.come">
                            <img src={youtube} alt=""></img>
                        </a>
                    </ul>
                </div>
           </div>
        </React.Fragment>
    );
};

export default Footer;