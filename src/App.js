import { render } from '@testing-library/react';
import './App.css';
import { Provider } from 'react-redux'

import Todo from './component/Todo/Todo'
import Header from './component/Layout/Header'
import Hooks from './component/Hooks'
import Posts from './component/Redux/Posts'
import Postform from './component/Redux/Postform';
import store from './component/Redux/store'

function App() {
  
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <div className="rest">
          <Postform/>
          <Posts/>
        </div>
      </div>
    </Provider>
    
  )
}

export default App;
