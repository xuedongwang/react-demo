import React, { Component } from 'react';
import style from './style';

class Header extends Component {
  render () {
    return (
      <header className={ style.header }>
        <div className={ style.headerInner }>
          <a href="/" className={ style.headerLogo }>
            {/* 博客系统 */}
            <img src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" height="22"/>
          </a>
          <div className={ style.headerRight }>
            <nav className={ style.navBar }>
              <a className={ style.menuLink } href="/archives">归档</a>
              <a className={ style.menuLink } href="/about">关于</a>
            </nav>
            <a href="/search" className={style.search}>
              <i className="iconfont icon-sousuo"></i>
            </a>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
