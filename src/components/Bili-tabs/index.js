import React from 'react'
import styles from './index.module.scss'
import Tabs from './js/tab'
export default class BiliTabs extends React.Component{
    componentDidMount() {
        new Tabs()
    }

    render(){
        console.log(this.props.children)
        return (
            <div className={styles.Box}>
                <div className={styles.tabLine}></div>
                <div className={styles.tabBox}>
                    {this.props.children.map((value,index)=>(
                        <div key={index} className={styles.tabBody}>
                            {value}
                        </div>
                    ))}
                </div>
            </div>
            )
    }
}