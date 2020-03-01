import React from 'react';
import Header from './common/header'
import {ResetStyle} from './style'
import {GlobalStyle} from './statics/iconfont/iconfont'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'


function App() {
  return (
    <Provider store={store}>
      <ResetStyle/>
      <GlobalStyle/>

      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home}/>
        <Route path='/detail/:id' exact component={Detail}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
