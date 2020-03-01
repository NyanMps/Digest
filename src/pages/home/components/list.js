import React, {Component} from 'react'
import {ListInfo, ListItem} from '../style'
import {connect} from 'react-redux'

class List extends Component{
  render () {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
                <ListItem >
                  <img alt='' className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
            );
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(List)
