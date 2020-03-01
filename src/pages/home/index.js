import React, {PureComponent} from 'react'
import {BackTop, HomeLeft, HomeRight, HomeWrapper} from './style'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import * as actions from './store/actionCreators'
import {connect} from 'react-redux'

class Home extends PureComponent{

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=''
            src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            className="banner-img"/>
            <Topic />
            <List />
        </HomeLeft>

        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>

        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData()
    // 绑定事件
    window.addEventListener('scroll', this.props.changeScrollShow)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData () {
    dispatch(actions.getHomeInfo())
  },
  changeScrollShow () {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actions.toggleTopShow(true))
    }else {
      dispatch(actions.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
