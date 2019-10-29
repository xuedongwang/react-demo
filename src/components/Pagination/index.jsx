import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class Pagination extends Component {
  constructor (props) {
    super(props);
    this.displayPageRange = this.displayPageRange.bind(this);
  }
  displayPageRange () {
    const { currentPage, total, onJumpTo } = this.props;
    const start = currentPage - 2 < 1 ? 1 : currentPage - 2;
    const end = currentPage + 2 > total ? total : currentPage + 2;
    const ret = [];
    for (let i = start; i <= end; i++) {
      ret.push(i);
    }
    return ret.map(item => (
      <div key={ item } data-page={ item } onClick={ onJumpTo } className={ `${style.btnItem}${currentPage === item ? ' ' + style.active : ''}` }>{ item }</div>
    ));
  }
  render () {
    const { currentPage, total, onJumpTo, onPrevPage, onNextPage } = this.props;
    return (
      <div className={ style.pagination }>
        { currentPage !== 1 && total > 3 && <div data-page="1" onClick={ onJumpTo } className={ style.btnItem }>首页</div> }
        { currentPage !== 1 && total > 3 && <div onClick={ onPrevPage } className={ style.btnItem }>上一页</div> }
        { this.displayPageRange() }
        { currentPage !== total && total > 3 && <div onClick={ onNextPage } className={ style.btnItem }>下一页</div> }
        { currentPage !== total && total > 3 && <div data-page={ total } onClick={ onJumpTo } className={ style.btnItem }>末页</div> }
      </div>
    );
  }
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  total: PropTypes.number,
  onJumpTo: PropTypes.func,
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func
};

export default Pagination;
