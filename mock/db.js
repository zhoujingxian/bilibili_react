const Mock = require('mockjs')

const mr = Mock.Random;

const homeData = (count) => {
    let data = []
    for (let i = 0; i < count; i++) {
        data.push({
            id: 1000 + i,
            title: '@ctitle(10,40)',
            time: '@integer(1310505744645,1610505744645)',
            viewCounts: '@integer(0,9999999)', //播放量
            comment: '@integer(0,99999)',//评论
            cover: "/images/img" + "@integer(0,2)" + ".jpg",
            detail: {
                fans: '@integer(0,9999999)', //粉丝
                barrage: '@integer(0,9999999)', //弹幕
                like: '@integer(0,9999999)',//点赞
                auth: "@cname()",
                content: "@ctitle(14,24)",
                auth_icon: mr.image(50 * 50, mr.color(), mr.word(1))
            }
        })
    }
    return data
}

    // const channelData = [{
    //     "1": [{path: '/channel/1', name: '推荐'}, {path: '/channel/1/2', name: 'MAD·AMV'}, {path: '/channel/1/3', name: 'MMD·3D'}, {path: '/channel/1/4', name: '短片·手书·配音'}, {path: '/channel/1/5', name: '手办·模玩'}, {path: '/channel/1/6', name: '特摄'}, {path: '/channel/1/7', name: '综合'}],
    //     "2":[{path: '/channel/2', name: '推荐'},{path: '/channel/2/2', name: '连载动画'},{path: '/channel/2/3', name: '完结动画'},{path: '/channel/2/4', name: '资讯'},{path: '/channel/2/5', name: '官方延伸'}],
    //     "3":[{path: '/channel/3', name: '推荐'},{path: '/channel/3/2', name: '国产动画'},{path: '/channel/3/3', name: '国产原创相关'},{path: '/channel/3/4', name: '布袋戏'},{path: '/channel/3/5', name: '动态漫·广播剧'},{path: '/channel/3/6', name: '资讯'}],
    //     "4":[{path: '/channel/4', name: '推荐'},{path: '/channel/4/2', name: '原创音乐'},{path: '/channel/4/3', name: '翻唱'},{path: '/channel/4/4', name: 'VOCALOID·UTAU'},{path: '/channel/4/5', name: '电音'},{path: '/channel/4/6', name: '演奏'},{path: '/channel/4/7', name: 'MV'},{path: '/channel/4/8', name: '音乐现场'},{path: '/channel/4/9', name: '音乐综合'}],
    //     "5":[{path: '/channel/5', name: '推荐'},{path: '/channel/5/2', name: '宅舞'},{path: '/channel/5/3', name: '街舞'},{path: '/channel/5/4', name: '明星舞蹈'},{path: '/channel/5/5', name: '中国舞'},{path: '/channel/5/6', name: '舞蹈综合'},{path: '/channel/5/7', name: '舞蹈教程'}],
    //     "6":[{path: '/channel/6', name: '推荐'},{path: '/channel/6/2', name: '单机游戏'},{path: '/channel/6/3', name: '电子竞技'},{path: '/channel/6/4', name: '手机游戏'},{path: '/channel/6/5', name: '网络游戏'},{path: '/channel/6/6', name: '桌游棋牌'},{path: '/channel/6/7', name: 'GMV'},{path: '/channel/6/8', name: '音游'},{path: '/channel/6/9', name: 'Mugen'}],
    //     "7":[{path: '/channel/7', name: '推荐'},{path: '/channel/7/2', name: '科学科普'},{path: '/channel/7/3', name: '社科·法律·心理'},{path: '/channel/7/4', name: '人文历史'},{path: '/channel/7/5', name: '财经商业'},{path: '/channel/7/6', name: '校园学习'},{path: '/channel/7/7', name: '职业职场'},{path: '/channel/7/8', name: '设计·创意'},{path: '/channel/7/9', name: '野生技能协会'}],
    //     "8":[{path: '/channel/8', name: '推荐'},{path: '/channel/8/2', name: '数码'},{path: '/channel/8/3', name: '软件应用'},{path: '/channel/8/4', name: '计算机技术'},{path: '/channel/8/5', name: '工业·工程·机械'},{path: '/channel/8/6', name: '极客DIY'}],
    // }]
const recData = (count) => {
    let data = []
    for (let i = 0; i < count; i++) {
        data.push({
            id:"@integer(0,9999999)" ,
            title: '@ctitle(10,40)',
            time: '@integer(1310505744645,1610505744645)',
            viewCounts: '@integer(0,9999999)', //播放量
            comment: '@integer(0,99999)',//评论
            // cover: "/images/img" + "@integer(0,2)" + ".jpg",
            detail: {
                fans: '@integer(0,9999999)', //粉丝
                barrage: '@integer(0,9999999)', //弹幕
                like: '@integer(0,9999999)',//点赞
                auth: "@cname()",
                content: "@ctitle(14,24)",
                auth_icon: mr.image(50 * 50, mr.color(), mr.word(1))
            }
        })
    }
    return data
}
const listData = (count) => {
    let data = []
    for (let i = 0; i < count; i++) {
        data.push({
            id:"@integer(0,9999999)" ,
            title: '@ctitle(10,40)',
            time: '@integer(1310505744645,1610505744645)',
            viewCounts: '@integer(0,9999999)', //播放量
            comment: '@integer(0,99999)',//评论
            // cover: "/images/img" + "@integer(0,2)" + ".jpg",
            detail: {
                fans: '@integer(0,9999999)', //粉丝
                barrage: '@integer(0,9999999)', //弹幕
                like: '@integer(0,9999999)',//点赞
                auth: "@cname()",
                content: "@ctitle(14,24)",
                auth_icon: mr.image(50 * 50, mr.color(), mr.word(1))
            }
        })
    }
    return data
}

module.exports = Mock.mock({
    home: homeData(100),
    1:recData(32),
    2:recData(24),
    3:recData(28),
    4:recData(40),
    5:recData(32),
    6:recData(40),
    7:recData(40),
    8:recData(28),
    listData:listData(50)
})