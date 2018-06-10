import React, { Component } from 'react';
import { PostContainer } from './containers';
import { Header } from './componenets';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <PostContainer/>
      </div>
    );
  }
}

export default App;
