import React, {Component} from 'react'
import {TopicItem, TopicWrapper} from '../style'
import {connect} from 'react-redux'

class Topic extends Component{
  render () {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => (
            <TopicItem key={item.get('id')}>
              <img
                className='topic-pic'
                src={item.get('imgUrl')}
                alt=''
              />
              {item.get('title')}
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Topic)
