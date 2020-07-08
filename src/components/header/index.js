import React from 'react';
import { Link } from "react-router-dom";
import meta from '../../meta.json';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={ styles.header }>
      <Link to='/'>
        <img src="/logo512.png" alt="logo" className={ `${ styles.header__logo } logo` }/>
      </Link>
      <div className={ styles.header__title }>
        <h3 className={ styles.header__title__name }>
          <Link to="/" className="title">
            { meta.name }
          </Link>
        </h3>
        <p className={ styles.header__title__description }>( { meta.description } )</p>
      </div>
      <ul className={ styles.header__links }>
        {
          meta.sections.map((link, index) => {
            return (
              <li className={ styles.header__links__link } key={ index }>
                <Link to={ link.ref } className="link link__primary">
                  { link.title }
                </Link>
              </li>
            )
          })
        }
      </ul>
    </header>
  );
}

export default Header;
