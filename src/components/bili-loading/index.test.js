import React from 'react'
import BiliLoading from "./index";
export default class Loading extends React.Component {
    state = {
        loading:true,
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({loading:false})
        },200)
    }

    render() {
        return (
            <div>
                <BiliLoading spinning={this.state.loading} delay={200}/>
            </div>
        )
    }
}