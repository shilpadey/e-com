import React from "react";

import classes from './Home.module.css';

const tracks = [
    {
      id: "t1",
      date: "JULY16",
      title: "DETROIT, MI",
      description: "DTE ENERGY MUSIC THEATRE",
    },
    {
      id: "t2",
      date: "JUL19",
      title: "TORONTO,ON",
      description: "BUDWEISER STAGE",
    },
    {
      id: "t3",
      date: "JUL 22",
      title: "BRISTOW, VA",
      description: "JIGGY LUBE LIVE",
    },
    {
      id: "t4",
      date: "JUL 29",
      title: "PHOENIX, AZ",
      description: "AK-CHIN PAVILION",
    },
    {
      id: "t5",
      date: "AUG 2",
      title: "LAS VEGAS, NV",
      description: "T-MOBILE ARENA",
    },
    {
      id: "t6",
      date: "AUG 7",
      title: "CONCORD, CA",
      description: "CONCORD PAVILION",
    },
  ];

const Home = () => {

    const trackList = tracks.map(list => (
        <li key={list.id} className={classes['tour-item']}>
            <span className={classes['tour-date']}>{list.date}</span>
            <span className={classes['tour-place']}>{list.title}</span>
            <span className={classes['tour-spec']}>{list.description}</span>
            <button className={classes.btn}>BUY TICKETS</button>
        </li>
    ));

    return (
        <section className={classes.container}>
            <h2>Tours</h2>
            {trackList}
        </section>
    );

};

export default Home;