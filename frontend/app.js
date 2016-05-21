import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import AppController from './components/app-controller.react'
import Hero from './components/hero/hero.react'
import Roadmap from './components/sections/roadmap/roadmap.react'
import Gallery from './components/sections/gallery/gallery.react'
import Wallpaper from './components/sections/wallpaper/wallpaper.react'
import About from './components/sections/about/about.react'
import Admin from './components/admin/admin.react'

// import app style
import './styles/app.less'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppController}>
      <IndexRoute component={Hero} />
      <Route path="roadmap" component={Roadmap}/>
      <Route path="gallery/:city" component={Wallpaper}/>
      <Route path="gallery" component={Gallery} />
      <Route path="about" component={About}/>
      <Route path="admin" component={Admin}/>
    </Route>
  </Router>
), document.getElementById('app'))

// import vendor javascript
import 'bootstrap'
