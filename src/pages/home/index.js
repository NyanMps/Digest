import React, {Component} from 'react'
import {HomeLeft, HomeRight, HomeWrapper} from './style'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import * as actions from './store/actionCreators'
import {connect} from 'react-redux'

class Home extends Component{
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            className="banner-img"/>
            <Topic />
            <List />
        </HomeLeft>

        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>

      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData()
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData () {
    dispatch(actions.getHomeInfo())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
