import React from 'react'

import styles from './index.module.scss'

import {Button,Collapse} from 'antd-mobile'

import BiliVideo from "../../components/bili-video";
// import BiliDetailTitle from '../../components/bili-detailTitle'
import BiliCollapse from "../../components/bili-collapse";

export default class Detail extends React.Component {
    render() {
        return (<div className={styles.detail}>
            <div className={styles.videoDetail}>
                <BiliVideo src={'/video/1-1.mp4'}/>
            </div>
            <div className={styles.btnBox}>
                <Button className={styles.btnDetail}>打开App，流畅又高清</Button>
            </div>
            <div>
                <BiliCollapse/>
                {/*<Collapse defaultActiveKey={['1']}>*/}
                {/*    <Collapse.Panel key='1' title={<BiliDetailTitle/>}>*/}
                {/*        这里是第一项的内容*/}
                {/*        <br />*/}
                {/*        这里是第一项的内容*/}
                {/*        <br />*/}
                {/*        这里是第一项的内容*/}
                {/*        <br />*/}
                {/*        这里是第一项的内容*/}
                {/*        <br />*/}
                {/*        这里是第一项的内容*/}
                {/*        <br />*/}
                {/*        这里是第一项的内容*/}
                {/*        <br />*/}
                {/*    </Collapse.Panel>*/}
                {/*</Collapse>*/}
            </div>
        </div>)
    }
}