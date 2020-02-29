import React from 'react';
import Header from './common/header'
import {ResetStyle} from './style'
import {GlobalStyle} from './statics/iconfont/iconfont'
import store from './store'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <ResetStyle/>
      <GlobalStyle/>

      <Header />
    </Provider>
  );
}

export default App;
