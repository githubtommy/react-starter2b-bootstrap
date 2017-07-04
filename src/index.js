import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './scenes/app'

import 'sanitize.css/sanitize.css'
import './index.css'

import './app/bootstrap-3.3.7-dist/css/bootstrap.css'
import './app/bootstrap-3.3.7-dist/css/bootstrap.css.map'
import './app/bootstrap-3.3.7-dist/css/bootstrap-theme.css'
import './app/bootstrap-3.3.7-dist/css/bootstrap-theme.css.map'

import { Button } from 'react-bootstrap';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
