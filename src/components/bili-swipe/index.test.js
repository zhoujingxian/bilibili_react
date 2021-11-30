import React from 'react'

import BiliSwipe from "./index";
// import {Link} from 'react-router-dom'

export default class Swipe extends React.Component{
    state = {
        data:[{
            id:"0001",
            title:"aaaa",
            img:"https://dummyimage.com/570x324/1890ff&text=1"
        },{
            id:"0002",
            title:"bbbb",
            img:"https://dummyimage.com/570x324/1890ff&text=2"
        },{
            id:"0003",
            title:"cccc",
            img:"https://dummyimage.com/570x324/1890ff&text=3"
        },{
            id:"0004",
            title:"dddd",
            img:"https://dummyimage.com/570x324/1890ff&text=4"
        },]
    }
    render(){
        return (<BiliSwipe autoplay={true} autoplayInterval={1000}>
            {
                this.state.data.map((item,index)=>(
                    // <Link
                    //     key={item.id}
                    //     to={{pathname: `/detail/${item._id}`, search: 'collectionName=banner'}}
                    // >
                    //     <img src={item.img} alt='' key={item.id}/>

                    // </Link>
                    <li key={item.id} onClick={()=>item.url && this.props.history.push(item.url)}>
                        <img src={item.img} alt=""/>
                        <div style={{height:"40px",width:"100%",marginTop:'-40px'}}>
                            <h2>{item.title}</h2>
                            <p>{item.title}</p>
                        </div>
                    </li>

                    )
                )
            }
        </BiliSwipe>)
    }
}