import {queryHome} from '../../api/news'

export const actionHome = ()=> async dispatch =>{
    const data = await queryHome();
    dispatch({type:"updateHome",payload:data})
}
