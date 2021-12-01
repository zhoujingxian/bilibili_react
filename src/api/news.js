import request from '../plugins/umi-request'

export const queryHome = async params => request.get("/api/home")
export const queryRec = async (url,params) => request.post('/api'+url,{data:params})
export const queryCell = async (url) => request.post('/api'+url)
export const queryDetail = async (url,params) => (request.get('/api'+url,{params:params}))
// export const queryDetail = async (url,params) => (console.log(params,'---'))