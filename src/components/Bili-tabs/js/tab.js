export default class Tabs{
    constructor() {
        this.tabBox = document.querySelector('.Bili-tabs_tabBox__6kaDM')
        this.tabBodys = document.querySelectorAll('.Bili-tabs_tabBody__qpAEh')
        // this.tabLink = document.querySelector('')
        this.init()
        this.addEvent()

        this.prev = 0;
    }
    init(){
        this.tabBox.style.width=this.tabBodys.length*60+'px';
        // this.
    }

    addEvent(){

    }
    //获取标签样式
    getStyle(element, attr) {
        return element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element)[attr]
    }

    //动画
    move(value, data) {
        clearInterval(value.t);
        let l = parseInt(this.getStyle(value, "left"));
        const p = l > data ? -1 : 1;
        value.t = setInterval(() => {
            l += 5 * p;
            if (p === 1) {
                if (l > data) {
                    value.style.left = data;
                    clearInterval(value.t);
                } else {
                    value.style.left = l + "px";
                }
            } else {
                if (l < data) {
                    value.style.left = data;
                    clearInterval(value.t);
                } else {
                    value.style.left = l + "px";
                }
            }
        }, 5)
    }
}