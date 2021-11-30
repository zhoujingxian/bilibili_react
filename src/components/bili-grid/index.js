import React from 'react'
import {NavLink} from 'react-router-dom'
import propTypes from 'prop-types'
import styles from './index.module.scss'

export default class Grid extends React.Component{
    static defaultProps={
        title:'热门推荐',
        moreTitle:'查看更多',
        moreUrl:null,
        moreIcon:false, //是否显示排行榜图标
        style:null,
        moreStyle:null
    }
    static propTypes ={
        title:propTypes.string,
        moreTitle:propTypes.string,
        moreUrl:propTypes.string,
        moreIcon:propTypes.bool,
        style:propTypes.object,
        moreStyle:propTypes.object
    }
    render(){
        const {children,title,moreTitle,moreUrl,moreIcon,style,moreStyle}= this.props
        return(<div className={styles.videoBox}>
            <div className={styles.videoHeader}>
                <span className={styles.bt} style={style}>{title}</span>
                {moreUrl && <NavLink to={moreUrl} className={styles.videoMore} style={moreStyle}>{moreIcon&&(<i className={`iconfont ${styles.I1}`}>&#xe6c5;</i>)}{moreTitle}<i className={`iconfont ${styles.I2}`}>&#xe65f;</i></NavLink>}
            </div>
            <div className={styles.cardBox}>{children}</div>
        </div>)
    }
}