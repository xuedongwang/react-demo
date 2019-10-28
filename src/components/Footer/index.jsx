import React, { Component } from 'react';
import style from './style.scss';

class Footer extends Component {
  render () {
    return (
      <footer className={ style.footer }>
        <div className={ style.footerRow }>
          <span className={ style.footerItem }>Powered by <a href="">WordPress</a></span>
        </div>
        <div className={ style.footerRow }>
          <span className={ style.footerItem }>@2019 <a href="">又有博客</a></span>
          <span className={ style.footerItem }>京ICP备12015504号</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
