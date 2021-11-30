const jsonServer = require('json-server')
const Path = require("path")
const db = require("./db")
const axios = require('axios')

const TIME = 1000;
const MOCK = '/api'

//创建服务器
const server = jsonServer.create()
server.listen(3101, () => {
    console.log("Mock server is running")
})

server.use(jsonServer.defaults({
    static: Path.join(__dirname, '/public') //静态资源托管
}))

//抓取body数据，使用中间件
server.use(jsonServer.bodyParser)

const router = jsonServer.router(db);

router.render = (req, res) => {
    const len = Object.keys(res.locals.data).length
    setTimeout(() => {
        res.jsonp({
            err: len ? 0 : 1,
            title: len ? "成功" : "失败",
            data: res.locals.data
        })
    }, TIME)
}
server.post(`${MOCK}/channel/:id`, (req, res) => {
    const body = req.body;
    const limit = 4 * (req.body.length+1)
    let recData = [];
    axios({
        url: `http://localhost:3101/api/channel/${req.params.id}`,
        params: {_limit: limit}
    }).then(data => {
        let d = data.data.data;
        let count = 1;
        d.forEach((value,index)=>{
            value.cover = `/images/${req.params.id}-${count}.jpg`;
            value.video = `/video/${req.params.id}-${count}.flv`;
            ((index+1)%4===0)&&count++;
        })
        body.forEach((value,index)=>{
            recData.push({name:value.name})
            recData[index].data = d.splice(0,4)
        })

        res.jsonp({
            data: recData
        })
    }).catch(err => {
        res.jsonp({
            err: err
        })
    })
})

server.post(`${MOCK}/channel/:id/:num`, (req, res) => {
    console.log(12)
    console.log(`http://localhost:3101/api/channel/${req.params.id}/${req.params.num}`)
    axios({
        url: `http://localhost:3101/api/channel/${req.params.id}/${req.params.num}`,
    }).then(data => {
        let d = data.data.data;
        d.forEach((value,index)=>{
            value.cover = `/images/${req.params.id}-${req.params.num}.jpg`;
            value.video = `/video/${req.params.id}-${req.params.num}.flv`;
        })

        res.jsonp({
            data:d
        })
    }).catch(err => {
        res.jsonp({
            err: err
        })
    })
})

server.use(jsonServer.rewriter({
    [`${MOCK}/channel/:id/:a`]: "/listData",
    [`${MOCK}/*`]: '/$1',
    [`/channel/*`]: "/$1",
}))

server.use(router)



