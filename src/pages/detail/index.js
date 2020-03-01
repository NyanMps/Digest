import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Content, DetailWrapper, Header} from './style'
import {actionCreators as actions} from './store'
import { withRouter } from 'react-router-dom';

class Detail extends Component{
  render () {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </DetailWrapper>
    )
  }

  componentDidMount () {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actions.getDetail(id));
  }
});

export default connect(mapState, mapDispatch)(withRouter(Detail))
