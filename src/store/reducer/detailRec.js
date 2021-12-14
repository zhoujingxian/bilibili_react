let state = []

const detailRec = (detail = state,{type,payload})=>{
    switch(type){
        case "detailRec" :
            return payload
        default:
            return detail
    }
}

export default detailRec