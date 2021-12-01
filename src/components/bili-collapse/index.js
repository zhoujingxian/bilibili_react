import {useRef, useState} from 'react'
import Count from '../../utils/count'


import styles from './index.module.scss'
import BiliHot from '../bili-hot'

function BiliCollapse(props) {
    let btn = useRef(null)
    let content = useRef(null)
    let height = useRef(null)
    let h2 = useRef(null)
    const [prev, setPrev] = useState(true)

    function unfold() {
        btn.current.style.transform = prev ? "rotate(180deg)" : "rotate(0deg)";
        content.current.style.height = prev ? height.current.offsetHeight + 'px' : '0';
        h2.current.style.whiteSpace = prev ? "normal" : "nowrap"
        setPrev(!prev)
    }
    const {title,viewCounts,detail:{auth,auth_icon,collect,like}} = props;
    return (<div className={styles.collapse}>
        <div className={styles.collapseTitle}>
            <BiliHot/>
            <h2 ref={h2}>{title}</h2>
            <i className={`iconfont ${styles.btnCollapse}`} ref={btn} onClick={unfold}>&#xe65e;</i>
        </div>
        <div className={styles.collContent} ref={content}>
            <div ref={height} className={styles.collContChild}>
                {props.children}
            </div>
        </div>
        <div className={styles.collapseFooter}>
            {
                prev && <div className={styles.collToolbar1}>
                    <div className={styles.collUser}>
                        <img src={auth_icon} alt=""/>
                        <b>{auth}</b>
                    </div>
                    <div className={styles.collBottom}>
                        <span>{Count(viewCounts)}观看</span>
                        <span><i className={`iconfont`}>&#xec8c;</i>{Count(like)}</span>
                        <span><i className={`iconfont`}>&#xe608;</i>{Count(collect)}</span>
                    </div>
                </div>
            }
            {
                !prev && <div className={styles.collToolbar2}>
                    <div className={styles.collBottom}>
                        <span><i className={`iconfont`}>&#xec8c;</i>{Count(like)}</span>
                        <span><i className={`iconfont`}>&#xe608;</i>{Count(collect)}</span>
                        <span><i className={`iconfont`}>&#xe62f;</i>缓存</span>
                    </div>
                </div>

            }

        </div>
    </div>)
}


export default BiliCollapse;