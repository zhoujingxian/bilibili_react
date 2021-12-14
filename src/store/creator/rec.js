import {queryRec} from '../../api/news'

export const actionRec = (url,params)=>async dispatch =>{
    const data = await queryRec(url,params);
    dispatch({type:"updateRec",payload:data})
}