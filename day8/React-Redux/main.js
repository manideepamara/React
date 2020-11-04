import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import App from './App.jsx'
import todoApp from './reducers/reducers'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import 'regenerator-runtime/runtime'
// ...
import { helloSaga } from './sagas/hellosaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  todoApp,
  applyMiddleware(sagaMiddleware)
)
    sagaMiddleware.run(helloSaga)

const action = type => store.dispatch({type})



let rootElement = document.getElementById('app')

render(
   

   <Provider store = {store}>
      <App />
   </Provider>,
	
   rootElement
)