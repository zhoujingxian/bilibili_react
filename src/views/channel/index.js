import React from 'react'
import {Switch,Route} from 'react-router-dom'
import {Tabs} from "antd-mobile";
import {NavLink} from "react-router-dom";
import Cell from '../Cell'
import Recommend from '../recommend'
import styles from './index.module.scss'
import BiliLoading from "../../components/bili-loading";
import BiliGrid from "../../components/bili-grid";
import BiliVideo from "../../components/bili-videoTitle";
import Count from "../../utils/count";
export default class Channel extends React.Component{
    state = {
        channelTabs:[],
        channelList:{
            "1": [{path: '/channel/1', name: '推荐'}, {path: '/channel/1/2', name: 'MAD·AMV'}, {path: '/channel/1/3', name: 'MMD·3D'}, {path: '/channel/1/4', name: '短片·手书·配音'}, {path: '/channel/1/5', name: '手办·模玩'}, {path: '/channel/1/6', name: '特摄'}, {path: '/channel/1/7', name: '综合'}],
            "2":[{path: '/channel/2', name: '推荐'},{path: '/channel/2/2', name: '连载动画'},{path: '/channel/2/3', name: '完结动画'},{path: '/channel/2/4', name: '资讯'},{path: '/channel/2/5', name: '官方延伸'}],
            "3":[{path: '/channel/3', name: '推荐'},{path: '/channel/3/2', name: '国产动画'},{path: '/channel/3/3', name: '国产原创相关'},{path: '/channel/3/4', name: '布袋戏'},{path: '/channel/3/5', name: '动态漫·广播剧'},{path: '/channel/3/6', name: '资讯'}],
            "4":[{path: '/channel/4', name: '推荐'},{path: '/channel/4/2', name: '原创音乐'},{path: '/channel/4/3', name: '翻唱'},{path: '/channel/4/4', name: 'VOCALOID·UTAU'},{path: '/channel/4/5', name: '电音'},{path: '/channel/4/6', name: '演奏'},{path: '/channel/4/7', name: 'MV'},{path: '/channel/4/8', name: '音乐现场'},{path: '/channel/4/9', name: '音乐综合'}],
            "5":[{path: '/channel/5', name: '推荐'},{path: '/channel/5/2', name: '宅舞'},{path: '/channel/5/3', name: '街舞'},{path: '/channel/5/4', name: '明星舞蹈'},{path: '/channel/5/5', name: '中国舞'},{path: '/channel/5/6', name: '舞蹈综合'},{path: '/channel/5/7', name: '舞蹈教程'}],
            "6":[{path: '/channel/6', name: '推荐'},{path: '/channel/6/2', name: '单机游戏'},{path: '/channel/6/3', name: '电子竞技'},{path: '/channel/6/4', name: '手机游戏'},{path: '/channel/6/5', name: '网络游戏'},{path: '/channel/6/6', name: '桌游棋牌'},{path: '/channel/6/7', name: 'GMV'},{path: '/channel/6/8', name: '音游'},{path: '/channel/6/9', name: 'Mugen'}],
            "7":[{path: '/channel/7', name: '推荐'},{path: '/channel/7/2', name: '科学科普'},{path: '/channel/7/3', name: '社科·法律·心理'},{path: '/channel/7/4', name: '人文历史'},{path: '/channel/7/5', name: '财经商业'},{path: '/channel/7/6', name: '校园学习'},{path: '/channel/7/7', name: '职业职场'},{path: '/channel/7/8', name: '设计·创意'},{path: '/channel/7/9', name: '野生技能协会'}],
            "8":[{path: '/channel/8', name: '推荐'},{path: '/channel/8/2', name: '数码'},{path: '/channel/8/3', name: '软件应用'},{path: '/channel/8/4', name: '计算机技术'},{path: '/channel/8/5', name: '工业·工程·机械'},{path: '/channel/8/6', name: '极客DIY'}],
        },
    }

    render(){
        const tabList = this.state.channelList[this.props.location.pathname.split('/')[2]]
        const num = this.props.location.pathname.split('/')[3]?(this.props.location.pathname.split('/')[3]-1).toString():"0";

        return (<div>
            <Tabs className={styles.chanTabs} defaultActiveKey={num}>
                {
                    tabList.map((value, index) => (
                        <Tabs.Tab title={<NavLink to={value.path}>{value.name}
                        </NavLink>} key={index}  className={styles.chanBody}/>
                    ))
                }
            </Tabs>
            <div className={styles.recHeader}>
                {this.state.loading && <BiliLoading spinning={this.state.loading} delay={100}/>}
                {
                    !this.state.loading && <BiliGrid moreTitle={'排行榜'} moreIcon={true} moreUrl={'/rank'} moreStyle={{color: "#ffa726"}}>
                        {
                            this.state.recData.data[0].data.map((value, index) => (
                                <BiliVideo key={index} title={value.title} src={value.cover} viewCounts={Count(value.viewCounts)} comment={Count(value.comment)}
                                           url={'/a'}/>
                            ))
                        }
                    </BiliGrid>
                }
                {
                    !this.state.loading && data.map((value, index) => (
                            value.name !== '推荐' && <BiliGrid key={index} title={value.name} moreUrl={value.path}>
                                {
                                    this.state.recData.data[index].data.map((value, index) => (
                                        <BiliVideo key={index} title={value.title} src={value.cover} viewCounts={Count(value.viewCounts)}
                                                   comment={Count(value.comment)} url={'/a'}/>
                                    ))
                                }
                            </BiliGrid>
                        )
                    )

                }
            </div>
            {/*<Switch>*/}
            {/*    <Route exact path={'/channel/:tab'} component={Recommend}/>*/}
            {/*    <Route exact path={'/channel/:tab/:child'} component={Cell}/>*/}
            {/*</Switch>*/}
        </div>)
    }
}