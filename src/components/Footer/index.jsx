import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style.scss';

class Footer extends Component {
  render () {
    return (
      <footer className={ style.footer }>
        <div className={ style.footerRow }>
          <span className={ style.footerItem }>Powered by <Link to="">WordPress</Link></span>
        </div>
        <div className={ style.footerRow }>
          <span className={ style.footerItem }>@2019 <Link to="">又有博客</Link></span>
          <span className={ style.footerItem }>京ICP备12015504号</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
