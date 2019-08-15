import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style.scss';

class BreadCrumb extends Component {
  
  render () {
    return (
      <div className={ style.breadCrumb }>
        <Link to="/" className={ style.breadCrumbItem }>首页</Link>
        <Link to="/" className={ style.breadCrumbItem }>首页</Link>
        <Link to="/" className={ style.breadCrumbItem }>首页</Link>
      </div>
    );
  }
}

export default BreadCrumb;
