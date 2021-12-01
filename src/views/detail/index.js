import React from 'react'

import styles from './index.module.scss'

import {Button} from 'antd-mobile'

import BiliVideo from "../../components/bili-video";
// import BiliDetailTitle from '../../components/bili-detailTitle'
import BiliCollapse from "../../components/bili-collapse";
import {queryDetail} from '../../api/news'
import BiliLoading from "../../components/bili-loading";
import pubsub from "pubsub-js";

export default class Detail extends React.Component {
    state = {
        loading: true,
        detailData: {}
    }

    constructor() {
        super();
        pubsub.subscribe('detail_loading', (msg, bl) => {
            this.setState({loading: bl})
        })
    }

    async componentDidMount() {
        const data = await queryDetail(this.props.location.pathname, this.props.location.state.det)
        this.setState({detailData: data.data})
        this.setState({loading: false})
    }

    componentWillUnmount() {
        pubsub.unsubscribe('detail_loading');  //取消指定订阅
    }

    render() {
        const {title, comment, detail, viewCounts, time, video} = this.state.detailData
        return (
            <div className={styles.detail}>
                <BiliLoading spinning={this.state.loading} delay={100}/>
                {!this.state.loading && <div>
                    <div className={styles.videoDetail}>
                        <BiliVideo src={video}/>
                    </div>
                    <div className={styles.btnBox}>
                        <Button className={styles.btnDetail}>打开App，流畅又高清</Button>
                    </div>
                    <div>
                        <BiliCollapse
                            title={title}
                            detail={detail}
                            comment={comment}
                            viewCounts={viewCounts}
                            time={time}
                        >
                            <div>{detail.content}</div>
                        </BiliCollapse>
                    </div>
                </div>
                }
            </div>)
    }
}