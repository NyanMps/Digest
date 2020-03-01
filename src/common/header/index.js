import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo, SearchInfoItem, SearchInfoList, SearchInfoSwitch,
  SearchInfoTitle,
  SearchWrapper
} from './style'
import {CSSTransition} from 'react-transition-group'
import {actions} from './store'
import {actionCreators as loginActions} from '../../pages/login/store'
import {Link} from 'react-router-dom'

class Header extends Component{

  render () {
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>

        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载 App</NavItem>
          {
            this.props.login ?
              <NavItem onClick={this.props.logout} className='right'>退出</NavItem>:
              <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
          }
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>

          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={this.props.focused ? 'focused' : ''}
                         onFocus={() => {this.props.handleInputFocus(this.props.list)}}
                         onBlur={this.props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>

            {/* 热门搜索 */}
            {this.getListArea()}
          </SearchWrapper>
        </Nav>

        <Addition>
          <Link to='/write'>
            <Button className='writing'>
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getListArea () {
    const { list, page, mouseIn,focused, totalPage } = this.props;
    if (mouseIn || focused) {
      // 不可变转为普通对象，否则不能 list[index]
      const newList = list.toJS();
      const pageList = [];

      for (let i = ((page - 1) * 10); i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }

      return (
        <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => {this.props.handleChangePage(page, totalPage)}}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>

          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    // 不可变对象使用 get
    focused: state.get('header').get('focused'),
    // state.getIn(['header', 'focused'])  等价于
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    page: state.getIn(['header', 'page']),


    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      // 获取热门词
      (list.size === 0) && dispatch(actions.getList());
      dispatch(actions.searchFocus());
    },
    handleInputBlur () {
      dispatch(actions.searchBlur());
    },
    handleMouseEnter () {
      dispatch(actions.mouseEnter());
    },
    handleMouseLeave () {
      dispatch(actions.mouseLeave());
    },
    handleChangePage (page, totalPage) {
      if (totalPage <= page) {
        dispatch(actions.changePage(1))
        return
      }
      dispatch(actions.changePage(page + 1))
    },
    logout () {
      dispatch(loginActions.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
