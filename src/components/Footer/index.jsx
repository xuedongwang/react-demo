import React, { Component } from 'react';
import Link from 'umi/link';
import style from './style.scss';

class Footer extends Component {
  render () {
    return (
      <footer className={ style.footer }>
        <div className={ style.footerCoppyright }>
          <span className={ style.footerItem }>Powered by <Link to="">Xuedong Wang</Link></span>
        </div>
        <div className={ style.footerRow }>
          <span className={ style.footerItem }>@2019 <Link to="">xx博客</Link></span>
          <span className={ style.footerItem }>xICP备xxxxxxxx号</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
