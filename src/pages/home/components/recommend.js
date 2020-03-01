import React, {Component} from 'react'
import {RecommendItem, RecommendWrapper} from '../style'
import {connect} from 'react-redux'

class Recommend extends Component{
  render () {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => {
            return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
          })
        }
      </RecommendWrapper>
    )
  }
}


const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
