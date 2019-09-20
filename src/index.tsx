import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Login from '@/containers/Login'
import Header from '@/containers/common/Header'
import List from '@/containers/List'
import '@/modules/states'
import store from '@/store'

render(
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme()}>
      <Router>
        <>
          <Route path="/" component={Login} />
          <Route path="/" component={Header} />
          <Route path="/" component={List} exact />
          <Route path="/:category" component={List} exact />
        </>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
