import React, { useRef } from 'react';

import classes from './Contact.module.css';

const Contact = (props) => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneNoRef = useRef('');

    const submitHandler = async (event) => {
        event.preventDefault();

        const userDetails = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phoneNo: phoneNoRef.current.value,
        };

        const response = await fetch('https://contacts-d45ec-default-rtdb.firebaseio.com//contacts.json',{
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        console.log(data);

    };

    return(
        <section className={classes.section}>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name'ref={nameRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='email'>Email ID</label>
                    <input type='text' id='email'ref={emailRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='phnumber'>Phone Number</label>
                    <input type='number' id='phnumber' ref={phoneNoRef}/>
                </div>
                <button className={classes.button}>Submit</button>
            </form>
        </section>
    )
};

export default Contact;