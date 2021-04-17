import { render } from '@testing-library/react';

import { Provider } from 'react-redux'
import Todo from './component/Todo/Todo'
import Header from './component/Layout/Header'
import Hooks from './component/Hooks'

import Tabs from './component/Tabs'

import RTodo from './component/ReduxTodo/RTodo';

import store from './component/Tabs/store'

import AccountFetch from "./component/JestScripts/FetchAccount"

import Check from "./component/CheckedInput"

function App() {
  
  return (
     <div>
       <Check/>
       <AccountFetch/>
     </div>
  )
}

export default App;
