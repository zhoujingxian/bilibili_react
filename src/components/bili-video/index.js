import React from 'react'
import propTypes from 'prop-types'
import styles from './index.module.scss'
export default class BiliVideo extends React.Component {
    static defaultProps = {
        src:null,
    }
    static propTypes = {
        src:propTypes.string
    }
    render() {
        const {src} = this.props
        return (<div className={styles.video}>
            <video src={src} controls/>
        </div>)
    }
}