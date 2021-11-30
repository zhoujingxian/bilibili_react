import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from '../components/header'
import Home from '../views/home'
import User from '../views/user'
import Detail from '../views/detail'

// import BiliVideo from '../components/bili-video'
export default class Default extends React.Component {


    render() {
        console.log('home')
        return (<div>
            {/*<BiliVideo src={"/video/1-1.mp4"}/>*/}
            <Header/>
            {/*<Home/>*/}
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/home'} component={Home}/>
                <Route path={'/channel'} component={Home}/>

                <Route path={'/user'} component={User}/>
                <Route path={'/detail'} component={Detail}/>
            </Switch>
        </div>)
    }
}