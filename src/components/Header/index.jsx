import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style';

class Header extends Component {
  render () {
    return (
      <header className={ style.header }>
        <div className={ style.headerInner }>
          <div className={ style.headerLeft }>
            <Link to="/" className={ style.headerLogo }>
              <img src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" height="22"/>
            </Link>
          </div>
          <div className={ style.headerRight }>
            <nav className={ style.navBar }>
              <Link className={ style.menuLink } to="/archives">归档</Link>
              <Link className={ style.menuLink } to="/about">关于</Link>
            </nav>
            <Link to="/search" className={style.search}>
              <i className="iconfont icon-sousuo"></i>
            </Link>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
