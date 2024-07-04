import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store} >
      <div>yes</div>
    </Provider>
  )
}

export default App