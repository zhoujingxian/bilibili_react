let state=[]
const home = (home=state,{type,payload})=>{
    switch(type){
        case "updateHome":
            return payload
        default:
            return home
    }
}
export default home;