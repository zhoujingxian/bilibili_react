import React from 'react'
// import $ from 'jquery'
import {withRouter} from 'react-router-dom';
import propTypes from 'prop-types'
import './index.module.scss'
import styles from './index.module.scss'
import Swipe from './js/swipe'

class BiliSwipe extends React.Component {
    static defaultProps = {
        autoplay:true,
        autoplayInterval:3000
    }
    static propTypes = {
        autoplay:propTypes.bool
    }
    componentDidMount() {
        new Swipe(this.props)
    }

    render() {
        const {children} = this.props
        return (<div className={styles.swipeBox}>
            <div className = {`${styles.swipeImg} clearfix`}>
                {children}
            </div>
        </div>)
    }
}

export default withRouter(BiliSwipe)