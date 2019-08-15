import React, { Component } from 'react';
import { throttle } from 'lodash';
import style from './style.scss';

const SHOW_GO_TO_BACK_DISTANCE = 800;

class BackTop extends Component {
  constructor (props) {
    super(props);
    this.handleBackTop = this.handleBackTop.bind(this);
    this.state = {
      show: false
    };
  }
  componentDidMount () {
    this.bindWindowScroll();
    if (this.top() > SHOW_GO_TO_BACK_DISTANCE) {
      this.setState({
        show: true
      });
    }
  }
  top () {
    return document.documentElement.scrollTop;
  }
  bindWindowScroll () {
    window.addEventListener('scroll', throttle(() => {
      this.setState({
        show: this.top() > SHOW_GO_TO_BACK_DISTANCE
      });
    }, 300));
  }
  handleBackTop () {
    const animationWidth = () => {
      document.documentElement.scrollTop = this.top() - this.top() * 0.2;
      if (this.top() > 0) {
        requestAnimationFrame(animationWidth);
      }
    };
    requestAnimationFrame(animationWidth);
  }
  render () {
    const { show } = this.state;
    return (
      show && <div className={ style.backTop }>
        <i onClick={ this.handleBackTop } className={ `icon-huidaodingbu iconfont ${style.backTopIcon}` }></i>
      </div>
    );
  }
}

export default BackTop;
