import React from 'react'

import styles from './index.module.scss'
export default class End extends React.Component{
    render(){
        return(<div className={styles.end}>
            <img src="/images/end.png" alt=""/>
            <p>只能到这里了~</p>
            <p>我们在客户端不见不散哦</p>
        </div>)
    }
}