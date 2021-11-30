import React, {useRef,useState} from 'react'


import styles from './index.module.scss'
import BiliHot from '../bili-hot'

function BiliCollapse(props) {
    let el = useRef(null)
    const [prev,setPrev] = useState(true)

    function unfold() {
        el.current.style.transform = prev ? "rotate(180deg)" : "rotate(0deg)";
        setPrev(!prev)
    }
    return (<div className={styles.collapse}>
        <div className={styles.collapseTitle}>
            <BiliHot/>
            <h2>惊艳！听完一曲《探窗》，网友：你永远可以相信国粹！</h2>
            <i className={`iconfont ${styles.btnCollapse}`} ref={el} onClick={unfold}>&#xe65e;</i>
        </div>
        <div className={styles.collapseFooter}>
            {
                prev && <div className={styles.collToolbar1}>
                    <div className={styles.collUser}>
                        <img src="/images/3-2.jpg" alt=""/>
                        <b>asdf</b>
                    </div>
                    <div className={styles.collBottom}>
                        <span>361.2万观看</span>
                        <span><i className={`iconfont`}>&#xec8c;</i>27.4万</span>
                        <span><i className={`iconfont`}>&#xe608;</i>12.3万</span>
                    </div>
                </div>

            }
            {
                !prev && <div className={styles.collToolbar2}>
                    <div className={styles.collBottom}>
                        <span><i className={`iconfont`}>&#xec8c;</i>27.4万</span>
                        <span><i className={`iconfont`}>&#xe608;</i>12.3万</span>
                        <span><i className={`iconfont`}>&#xe62f;</i>缓存</span>
                    </div>
                </div>

            }

        </div>
    </div>)
}


export default BiliCollapse;