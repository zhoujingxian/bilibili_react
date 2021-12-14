import {queryCell} from "../../api/news";

export const actionCell = (url)=>async dispatch =>{
    const data = await queryCell(url)
    dispatch({type:"updateRec",payload:data})
}