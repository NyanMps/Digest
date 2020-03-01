import React, {PureComponent} from 'react'
import {Button, Input, LoginBox, LoginWrapper} from './style'
import {connect} from 'react-redux'
import {actionCreators as actions} from './store'
import {Redirect} from 'react-router-dom'

class Login extends PureComponent{
  render () {

    if (this.props.loginStatus) {
      return <Redirect to='/' />
    }

    return (
      <LoginWrapper>
        <LoginBox>
          {/*使用 styled 的组件用 ref 拿不到原始控件，可以使用 innerRef 获取。高版本已经废弃, 使用 ref 即可*/}
          <Input placeholder='账号' ref={(input) => {this.account = input}}/>
          <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
          <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem){
    console.log(accountElem)
    dispatch(actions.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispatch)(Login);
