import React from 'react';
import { Link } from "react-router-dom";
import meta from '../../meta.json';
import styles from './footer.module.scss';

const Footer = props => {
  const heart = {
    color: "#ff4141"
  };
  return (
    <footer className={ styles.footer }>
      <div className={ styles.footer__link_groups }>
        <div>
          <p>Sections</p>
          <ul>
            {
              meta.sections.map((section, index) => {
                return (
                  <li key={ index }>
                    <Link to={ section.ref } className="link link__primary">
                      { section.title }
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <p>Support</p>
          <ul>
            {
              meta.supports.map((support, index) => {
                return (
                  <li key={ index }>
                    <Link to={ support.ref } className="link link__primary">
                      { support.title }
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div>
          {
            meta.others.map((other, index) => {
              return (
                <p key={ index }>
                  <Link to={ other.ref } className="link link__primary">
                    { other.title }
                  </Link>
                </p>
              )
            })
          }
        </div>
      </div>
      <div className={styles.footer__misc}>
        <Link to="/">
          <img src="/logo512.png" alt="logo" className={ `${ styles.footer__misc__logo } logo` } />
        </Link>
        <Link to="/" className={ `${ styles.footer__misc__title } link title` }>
          { meta.name }
        </Link>
        <div className={styles.footer__misc__social}>
          {
            meta.socials.map((social, index) => {
              return (
                <a href={ social.ref } target="_blank" rel="noopener noreferrer" key={ index }>
                  <i className={social.icon}></i>
                </a>
              );
            })
          }
        </div>
      </div>
      <div className={ styles.footer__legal }>
        <div className={ styles.footer__legal__copyright }>
          { meta.date.year } &copy; All Right Reserved.
        </div>
        <div className={ styles.footer__legal__dev }>
          Developed with <i style={ heart } className="fa fa-heart"></i> by <a href={meta.developer.url} className="link link__primary">{ meta.developer.name }</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
