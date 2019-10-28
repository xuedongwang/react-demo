import React, { Component } from 'react';
import style from './style.scss';

class Footer extends Component {
  render () {
    return (
      <footer className={ style.footer }>
        <div className={ style.footerRow }>
          <span className={ style.footerItem }>Powered by <a href="">Xuedong Wang</a></span>
        </div>
        <div className={ style.footerRow }>
          <span className={ style.footerItem }>@2019 <a href="">xxx博客</a></span>
          <span className={ style.footerItem }>xICP备xxxxxxx号</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
