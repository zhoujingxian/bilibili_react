import React from 'react'

import styles from './index.module.scss'
export default class Footer extends React.Component{
    render(){
        return (
            <div className={styles.footer}>
                <p>信息网络传播视听节目许可证：0910417</p>
                <p>网络文化经营许可证 沪网文【2019】3804-274号</p>
                <p>广播电视节目制作经营许可证：（沪）字第01248号</p>
                <p>增值电信业务经营许可证 沪B2-20100043</p>
            </div>
        )
    }
}