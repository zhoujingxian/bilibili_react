import React from 'react'
import styles from './index.module.scss'
import {NavLink} from 'react-router-dom'
import propTypes from 'prop-types'
export default class Video extends React.Component{
    static defaultProp = {
        title:'视频标题',
        src:'/images/img.png',
        viewCounts: '000',
        comment:'000',
        url:"/"
    }
    static propTypes = {
        title:propTypes.string,
        src:propTypes.string,
        viewCounts: propTypes.string,
        comment:propTypes.string,
        url:propTypes.object
    }
    /*
    * title: 视频的标题
    * src: 视频封面的图片路径
    * viewCounts: 观看数量
    * comment: 评论数量
    * url: 路由
    * **/
    render(){
        const {title,src,viewCounts,comment,url} = this.props;
        return (<div className={styles.videoBox}>
            <NavLink to={{pathname:url.pathname,state:url.state}}>
                <div className={styles.imgBox}>
                    <img src={src} alt=""/>
                    <div className={styles.videoTitle}>
                        <span><i className={'iconfont'}>&#xe6a9;</i>{viewCounts}</span>
                        <span><i className={'iconfont'}>&#xe665;</i>{comment}</span>
                    </div>
                </div>
                <p className={styles.videoP}>{title}</p>
            </NavLink>
        </div>)
    }
}