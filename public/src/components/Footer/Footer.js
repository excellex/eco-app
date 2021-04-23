import React from 'react';
import AddButton from '../AddButton';
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className="navbar-inner">
          <div className="container text-center">
            <AddButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
