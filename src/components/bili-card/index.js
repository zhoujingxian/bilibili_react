import React from 'react'
import propTypes from 'prop-types'
import styles from './index.module.scss'

export default class End extends React.Component {
    static defaultProps = {
        username: '-----',
        time: null,
        fans:null,
        src:"https://dummyimage.com/40x40/1890ff&text=1",
        imgStyle:null
    }
    static propTypes = {
        username: propTypes.string,
        time: propTypes.string,
        fans:propTypes.string,
        src:propTypes.string,
        imgStyle:propTypes.object
    }

    render() {
        const {username, time,fans,src,imgStyle} = this.props
        return (<div className={styles.card}>
            <div className={styles.cardLeft}>
                <img src={src} alt="" className={styles.cardImg} style={imgStyle}/>
                <div className={styles.cardName}>
                    <div>{username}</div>
                    {
                        !fans && <p>{time}</p>
                    }
                    {
                        fans && <p>{fans}粉丝</p>
                    }
                </div>
            </div>
            <div className={styles.cardRight}/>
        </div>)
    }
}