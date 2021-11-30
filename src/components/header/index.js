import React from 'react'
import {Button, Image} from 'antd-mobile'
import {SearchOutline} from 'antd-mobile-icons'
import {NavLink} from 'react-router-dom'

import styles from './index.module.scss'

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1 className={`iconfont ${styles.logo}`}>&#xe609;</h1>
                </div>
                <div className={styles.headerRight}>
                    <SearchOutline className={styles.headerSearch}/>
                    <NavLink to={'/user'}>
                        <Image src='https://dummyimage.com/24x24/1890ff&text=1' width={24} height={24}
                               style={{borderRadius: "50%"}}/>
                    </NavLink>
                    <Button className={styles.headerBtn} size={"mini"}>下载App</Button>

                </div>
            </div>
        )
    }
}