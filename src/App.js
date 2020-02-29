import React from 'react';
import Header from './common/header'
import {ResetStyle} from './style'
import {GlobalStyle} from './statics/iconfont/iconfont'

function App() {
  return (
    <div className="App">
      <ResetStyle/>
      <GlobalStyle/>
      <Header />
    </div>
  );
}

export default App;
