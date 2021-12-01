import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {Tabs, Popup} from 'antd-mobile'
import styles from './index.module.scss'
import HomePage from "../homePage";

class Home extends React.Component {
    state = {
        tabs: [{path: '/', name: '首页'}, {path: '/channel/1', name: '动画'}, {path: '/channel/2', name: '番剧'}, {
            path: '/channel/3', name: '国创'
        }, {path: '/channel/4', name: '音乐'}, {path: '/channel/5', name: '舞蹈'}, {path: '/channel/6', name: '游戏'}, {
            path: '/channel/7',
            name: '知识'
        }, {path: '/channel/8', name: '科技'}],
        visible2: false
    }

    setVisible(val) {
        this.setState({visible: val})
    }

    render() {
        return (
            <div>
                <div className={styles.tabBox}>
                    <Tabs defaultActiveKey={this.props.location.pathname.split('/')[2]} className={styles.homeHeader}>
                        {
                            this.state.tabs.map((value, index) => (
                                <Tabs.Tab title={<NavLink to={value.path}>{value.name}
                                </NavLink>} key={index} className={styles.tabBody}/>
                            ))
                        }
                    </Tabs>
                    <i className={`iconfont ${styles.popupI}`} onClick={() => this.setVisible(true)}>&#xe65e;</i>
                </div>
                <Popup
                    visible={this.state.visible}
                    onMaskClick={() => {
                        this.setVisible(false)
                    }}
                    position='top'
                    bodyStyle={{minHeight: '20px'}}
                    className={styles.popup}
                    maskClassName={styles.popupMask}
                    bodyClassName={styles.popupBody}
                >
                    {
                        this.state.tabs.map((value, index) => (
                            <NavLink to={value.path} key={index} className={styles.drawerBody}>{value.name}</NavLink>))}
                </Popup>
                <HomePage/>
            </div>
        )
    }
}

export default withRouter(Home)