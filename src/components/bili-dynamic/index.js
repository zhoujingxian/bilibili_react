import React from 'react'
import propTypes from 'prop-types'

import styles from './index.module.scss'

export default class Dynamic extends React.Component {
    static defaultProps = {
        name:"---",
        src:'/images/img.png',
        text:'----------------------------------------------------------------------------------',
        title:"--------------------------------------------"
    }

    static propTypes = {
        name:propTypes.string,
        src:propTypes.string,
        text:propTypes.string,
        title:propTypes.string
    }
    render() {
        const {name, src, text, title} = this.props;
        return (
            <div className={styles.dynamic}>
                <div className={styles.dynamicHeader}>@{name}</div>
                <div className={styles.dynamicText}>{text}</div>
                {
                    src && <img src={src} alt="" className={styles.dynamicImg}/>
                }
                {
                    title && (<p className={styles.dynamicP}>{title}</p>)
                }
            </div>
        )
    }
}