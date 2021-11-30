import React from 'react'
import propsTypes from 'prop-types'
import styles from './index.module.scss'

export default class BiliLoading extends React.Component {
    state = {
        el : null
    }
    static defaultProps ={
        spinning:false
    }
    static propsTypes = {
        spinning:propsTypes.bool,
        detail:propsTypes.number
    }
    componentDidMount(){

        setTimeout(()=>{
            if(this.props.spinning){
                this.setState({el:<div className={styles.spinner}/>})
            }
        },this.props.delay)
    }

    render() {
        return this.props.spinning && this.state.el
    }
}