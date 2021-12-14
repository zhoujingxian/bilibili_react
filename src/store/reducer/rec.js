let state=[]
const rec = (rec=state,{type,payload})=>{
    switch(type){
        case "updateRec":
            return payload
        default:
            return rec
    }
}
export default rec;