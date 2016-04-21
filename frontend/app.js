import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.react'

// import app style
import './styles/app.less'

ReactDOM.render(<App />, document.getElementById('app'))

// import vendor javascript
import 'bootstrap'
