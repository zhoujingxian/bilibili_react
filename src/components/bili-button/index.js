import React from 'react'
import propTypes from 'prop-types'

import Styles from './index.module.scss'

export default class BiliButton extends React.Component {
    static defaultProps = {
        children: "按 钮",
        block: false,
        type: "default",
        shape: "default",
        size: "large",
    }

    static propTypes = {
        children: propTypes.string
    }

    render() {
        const {children, size, block, type, shape} = this.props
        return (<button
            className={`${Styles.button} ${Styles[size]} ${Styles[block && "button-width"]} ${Styles[`type-${type}`]} ${Styles[`shape-${shape}`]}`}>{children}</button>)
    }
}