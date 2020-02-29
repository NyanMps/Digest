import React from 'react'
import {connect} from 'react-redux'
import {Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group'
import {actions} from './store'

const Header = (props) => {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载 App</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>

          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={props.focused ? 'focused' : ''}
                         onFocus={props.handleInputFocus}
                         onBlur={props.handleInputBlur}
                >
              </NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
          </SearchWrapper>
        </Nav>

        <Addition>
          <Button className='writing'>
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actions.searchFocus());
    },
    handleInputBlur () {
      dispatch(actions.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
