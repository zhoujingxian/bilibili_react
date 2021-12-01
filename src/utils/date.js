export function year(date) {
    let t = new Date(date)
    return `${t.getFullYear()}年${t.getMonth() + 1}月${t.getDate()}日 ${t.getHours() < 10 ? "0" + t.getHours() : t.getHours()}:${t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()}:${t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds()}`
}
export function month(date){
    let t = new Date(date)
    return `${(t.getMonth() + 1)<10?"0"+(t.getMonth()+1):t.getMonth()+1}-${t.getDate()<10?"0"+t.getDate():t.getDate()}`
}

