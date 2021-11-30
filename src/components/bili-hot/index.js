import React from 'react'

import styles from './index.module.scss'
function BiliHot(props){
 return (<div className={styles.hot}>
     <i className={`iconfont`}>&#xe781;</i>
     <span>热门</span>
 </div>)
}

export default BiliHot;