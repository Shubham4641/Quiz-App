import React from 'react';
import classes from './Footer.module.css';
const Footer = () => {
    return (
            <footer className={classes.footer}>

        <div className={classes.divi}>
            Copyright @ ShubhamQuiz.in
            <a href = "ShubhamSrivastava.com"
            style ={{cursor: "pointer" }}
             > Shubham Srivastava</a>

            </div>
            </footer>

    );

};

export default Footer;