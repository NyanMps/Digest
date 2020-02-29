import * as constants from './constants';
import axios from 'axios'
import {fromJS} from 'immutable'

/**
 * 获取热门词
 */
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      if (res.data) {
        let action = {
          type: constants.CHANGE_LIST,
          data: fromJS(res.data.data)
        }

        dispatch(action);
      }
    }).catch(() => {
      console.log('headerList get fail')
    })
  }
}

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
