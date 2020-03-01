import React, {PureComponent} from 'react'
import {ListInfo, ListItem, LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators as actions} from '../store'
import {Link} from 'react-router-dom'

class List extends PureComponent{
  render () {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem >
                  <img alt='' className='pic' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }

        <LoadMore onClick={() => {this.props.getMoreList(this.props.page)}}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.get('home').get('articlePage')
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList (page) {
    dispatch(actions.getMoreList(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
