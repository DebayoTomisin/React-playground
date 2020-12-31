import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import './App.css';

import Todo from './component/Todo/Todo'
import Header from './component/Layout/Header'
import Hooks from './component/Hooks'

import Posts from './component/Tests/Posts'
import PostForm from './component/Tests/PostForm';
import store from './component/Tests/store'


function App() {
  
  return (
    <Provider store={ store }>
      <div className="App">
        <br/>
        <PostForm/>
        <br/>
        <Posts />
      </div>
    </Provider>
    
  )
}

export default App;
