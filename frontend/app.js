import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.react'

//import font-awesome
import '../node_modules/font-awesome/css/font-awesome.min.css'

// import app style
import './styles/app.less'

ReactDOM.render(<App />, document.getElementById('app'))

// import vendor javascript
import 'bootstrap'
