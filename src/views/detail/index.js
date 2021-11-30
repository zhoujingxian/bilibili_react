import React from 'react'

import styles from './index.module.scss'

import { Button } from 'antd-mobile'

import BiliVideo from "../../components/bili-video";
export default class Detail extends React.Component{
    render(){
        return (<div className={styles.detail}>
            <BiliVideo src={'/video/1-1.mp4'}/>
            <Button>打开App，流畅又高清</Button>
        </div>)
    }
}