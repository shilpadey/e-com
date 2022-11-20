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
                        <li>
                            <a href="www.youtube.com">
                                <img src={youtube} alt=""></img>
                            </a>
                        </li>
                        <li>
                            <a href="www.spotify.com">
                                <img src=" https://prasadyash2411.github.io/ecom-website/img/Spotify Logo.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="www.facebook.com">
                                <img src="https://prasadyash2411.github.io/ecom-website/img/Facebook Logo.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
           </div>
        </React.Fragment>
    );
};

export default Footer;