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

class Header extends Component{

  render () {
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
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={this.props.focused ? 'focused' : ''}
                         onFocus={this.props.handleInputFocus}
                         onBlur={this.props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>

            {/* 热门搜索 */}
            {this.getListArea(this.props.focused)}
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

  getListArea (show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>

          <SearchInfoList>
            {
              this.props.list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
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
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      // 获取热门词
      dispatch(actions.getList());
      dispatch(actions.searchFocus());
    },
    handleInputBlur () {
      dispatch(actions.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
