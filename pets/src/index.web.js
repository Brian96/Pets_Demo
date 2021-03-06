import React from 'react';
import ReactDOM from 'react-dom';
import Root from './configs/Root';
import reportWebVitals from './reportWebVitals';
import configureStore from './stores/configureStore'

import './scss/app.scss'

const store = configureStore()


ReactDOM.render( < Root store = { store }
        />, document.getElementById('root'))

        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();