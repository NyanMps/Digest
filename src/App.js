import React from 'react';
import Header from './common/header'
import {ResetStyle} from './style'
import {GlobalStyle} from './statics/iconfont/iconfont'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
    <Provider store={store}>
      <ResetStyle/>
      <GlobalStyle/>

      <Header />
      <BrowserRouter>
        <Route path='/' exact render={() => <div>home</div>}></Route>
        <Route path='/detail' exact render={() => <div>detail</div>}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
