import React from 'react'

import styles from './index.module.scss'

import {Button, Tabs} from 'antd-mobile'

import BiliVideo from "../../components/bili-video";
import BiliCollapse from "../../components/bili-collapse";
import {queryDetail} from '../../api/news'
import BiliLoading from "../../components/bili-loading";
import pubsub from "pubsub-js";
import Count from '../../utils/count'
import {month} from '../../utils/date'
// import BiliDynamic from '../../components/bili-dynamic'
import BiliCard from '../../components/bili-card'

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
                            <div className={styles.detailContent}>
                                <BiliCard username={detail.auth} src={detail.auth_icon} fans={Count(detail.fans)}
                                          imgStyle={{width: "0.36rem", height: "0.36rem"}}/>
                                <div className={styles.detailData}>
                                    <span>{Count(viewCounts)}观看</span>
                                    <span>{Count(detail.barrage)}弹幕</span>
                                    <span>{month(time)}</span>
                                </div>
                                <p className={styles.ban}><i className={`iconfont`}>&#xe666;</i>未经作者授权禁止转载</p>
                                <div>{detail.content}</div>
                            </div>
                        </BiliCollapse>
                    </div>
                    <div>
                        <Tabs className={styles.detailTabs}>
                            <Tabs.Tab title={<p>相关推荐</p>} key='fruits' style={{height: '0.32rem'}}>
                                asdf
                            </Tabs.Tab>
                            <Tabs.Tab title={<p>评论{Count(comment)}</p>} key='vegetables' style={{height: '0.32rem'}}>
                                评论
                            </Tabs.Tab>
                        </Tabs>
                    </div>
                </div>
                }
            </div>)
    }
}