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
    const limit = 4 * (req.body.length + 1)
    let recData = [];
    axios({
        url: `http://localhost:3101/api/channel/${req.params.id}`,
        params: {_limit: limit}
    }).then(data => {
        let d = data.data.data;
        let count = 1;
        d.forEach((value, index) => {
            value.cover = `/images/${req.params.id}-${count}.jpg`;
            value.det =`${req.params.id}-${count}`;
            ((index + 1) % 4 === 0) && count++;
        })
        body.forEach((value, index) => {
            recData.push({name: value.name})
            recData[index].data = d.splice(0, 4)
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
    axios({
        url: `http://localhost:3101/api/channel/${req.params.id}/${req.params.num}`,
    }).then(data => {
        let d = data.data.data;
        d.forEach((value, index) => {
            value.cover = `/images/${req.params.id}-${req.params.num}.jpg`;
            value.video = `/video/${req.params.id}-${req.params.num}.flv`;
            value.det =`${req.params.id}-${req.params.num}`
        })
        res.jsonp({
            data: d
        })
    }).catch(err => {
        res.jsonp({
            err: err
        })
    })
})
server.get(`${MOCK}/detail/:id`, (req, res) => {
    const det = req.query[0]
    console.log(det)
    axios({
        url: `http://localhost:3101/api/detail`,
        method:'get'
    }).then(data => {
            const d = data.data.data[Math.round(Math.random() * 50)];
            d.video = `/video/${det}.mp4`
        console.log(d)
            res.jsonp({
                err:0,
                data: d
            })
        }
    ).catch(err=>{
        res.jsonp({
            err:1,
            data:err
        })
    })

})

server.use(jsonServer.rewriter({
    [`${MOCK}/channel/:id/:a`]: "/listData",
    [`${MOCK}/*`]: '/$1',
    [`/channel/*`]: "/$1",
}))

server.use(router)



