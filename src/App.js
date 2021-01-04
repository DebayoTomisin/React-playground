import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import './App.css';

import Todo from './component/Todo/Todo'
import Header from './component/Layout/Header'
import Hooks from './component/Hooks'

import RTodo from './component/ReduxTodo/RTodo';

import store from './component/ReduxTodo/store'




function App() {
  
  return (
    <Provider store={store}>
      <div>
        <RTodo/>
      </div>
    </Provider>
    
    
    
  )
}

export default App;
