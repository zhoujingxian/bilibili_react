import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import Default from './layouts/default'
import './assets/fonts/iconfont.css'

ReactDOM.render(
    <BrowserRouter>
        <Default/>

    </BrowserRouter>,
    document.getElementById('root')
)
