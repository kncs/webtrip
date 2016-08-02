import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import AppController from './components/app-controller.react'
import Gallery from './components/gallery/gallery.react'
import Wallpaper from './components/wallpaper/wallpaper.react'

// import app style
import './styles/app.less'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppController}>
      <IndexRoute  component={Gallery} />
      <Route path="gallery/:city" component={Wallpaper}/>
    </Route>
  </Router>
), document.getElementById('app'))

// import vendor javascript
import 'bootstrap'
