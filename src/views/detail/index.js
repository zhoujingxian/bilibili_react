import React from 'react'
import pubsub from "pubsub-js";
import {Button, Tabs} from 'antd-mobile'

import styles from './index.module.scss'
import BiliCollapse from "../../components/bili-collapse";
import {queryDetail} from '../../api/news'
import Count from '../../utils/count'
import {month} from '../../utils/date'
import BiliLoading from "../../components/bili-loading";
import BiliVideo from "../../components/bili-video";
import BiliCard from '../../components/bili-card'
import store from '../../plugins/redux'
import BiliVideoTitle from "../../components/bili-videoTitle";
import Footer from '../../components/footer'


export default class Detail extends React.Component {
    state = {
        loading: true,
        detailData: {},
        recommendData: store.getState().detailRec
    }

    constructor(props) {
        super(props)
        pubsub.subscribe('detail_loading', (msg, bl) => {
            this.setState({loading: bl})
        })
        store.subscribe(()=>{
            this.setState({recommendData:store.getState().recommendData})
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
        const {title, comment, detail, viewCounts, time, video} = this.state.detailData;
        const recommentData = this.state.recommendData
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
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
                                    <BiliCard username={detail.auth} src={detail.auth_icon} fans={Count(detail.fans)}
                                              imgStyle={{width: "0.36rem", height: "0.36rem"}}/>
                                    <Button className={styles.btnFocus}>+ 关注</Button>
                                </div>
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
                                <div className={styles.detailTabsBox}>
                                    {
                                        recommentData.map((value, index) => (
                                            <BiliVideoTitle key={value.id} title={value.title} src={value.cover} viewCounts={Count(value.viewCounts)}
                                                            comment={Count(value.comment)}
                                                            url={{pathname: `/detail/${value.id}`, state: {det: value.det}}}/>
                                        ))
                                    }
                                </div>

                            </Tabs.Tab>
                            <Tabs.Tab title={<p>评论{Count(comment)}</p>} key='vegetables' style={{height: '0.32rem'}}>
                                评论
                            </Tabs.Tab>
                        </Tabs>
                        <div className={styles.btnMoreBox}>
                            <Button className={styles.btnMore}>还看不够？App内尽情探索吧></Button>
                        </div>
                        <Footer/>
                    </div>
                </div>
                }
            </div>)
    }
}