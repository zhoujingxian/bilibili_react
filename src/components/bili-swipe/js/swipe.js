export default class Swipe {
    constructor(props) {
        this.swipeBox = document.querySelector('.bili-swipe_swipeBox__3bK6u');
        this.swipeImg = document.querySelector('.bili-swipe_swipeImg__3g7QK');
        this.swipeLi = document.querySelectorAll(".bili-swipe_swipeImg__3g7QK>*")

        this.index = 0;
        this.indexNext = 1;
        this.indexLast = this.swipeLi.length - 1;
        // this.leftPrev = true;
        // this.rightPrev = true;
        // this.props = props
        this.init()
        this.addEvent();
    }

    init() {
        this.boxWidth = this.swipeBox.offsetWidth
        this.swipeImg.style.width = this.boxWidth * this.swipeLi.length + 'px';
        this.swipeBox.style.height = this.swipeLi[0].offsetHeight + 'px';
        this.swipeLi.forEach(val => {
            val.style.width = this.boxWidth + 'px'
        })
        // this.swipeA[0].style.left = 0;
        // this.interval()
    }

    //
    // interval() {
    //     this.props.autoplay && (this.t = setInterval(() => {
    //         this.swipeA[this.indexLast].style.left = '100%';
    //         this.nextMove()
    //     }, this.props.autoplayInterval))
    // }
    //
    addEvent() {
        const that = this;
        this.swipeBox.ontouchstart = function (eve) {
            that.touchStart(eve)
        }
        this.swipeBox.ontouchmove = function (eve) {
            that.swipeMove(eve)
        }
        this.swipeBox.ontouchend = function (eve) {
            that.touchEnd(eve)
        }
        // window.onblur = function () {
        //     that.blur()
        // }
        // window.onfocus = function () {
        //     that.focus()
        // }
    }

    //
    // blur() {
    //     clearInterval(this.t)
    // }
    //
    // focus() {
    //     this.interval()
    // }
    //
    touchStart(eve) {
        // clearInterval(this.t)
        clearTimeout(this.timeOut)
        this.coord = eve.touches[0].clientX;
        this.bool = true;
        this.timeOut = setTimeout(() => {
            this.bool = false;
        }, 1000)
        // this.swipeInit()
    }

    // swipeInit() {
    //     this.swipeLi[this.index.js].style.left = this.boxWidth + 'px'
    //     this.swipeLi[this.indexLast].style.left = 0;
    //     this.swipeLi[this.indexNext].style.left = 2 * this.boxWidth + 'px'
    // }

    touchEnd(eve) {
        // this.interval()
        clearTimeout(this.timeOut)
        const moveNum = parseInt(this.getStyle(this.swipeImg, "left"));
        const widthNum = -this.index * this.boxWidth
        this.num = eve.changedTouches[0].clientX - this.coord;
        if (this.bool && (this.num > 30 || this.num < -30)) {
            (this.num > 0) ? this.lastMove() : this.nextMove()
        } else if (moveNum > widthNum) {
            this.lastMove()
        } else if (moveNum < (-widthNum)) {
            this.nextMove()
        } else if (moveNum < 0) {
            this.moveStart();
        } else {
            this.moveStart()
        }
    }

    lastMove() {
        this.index - 1 === -1 ? this.index = this.swipeLi.length - 1 : this.index--
        this.moveStart()
    }

    nextMove() {
        this.index + 1 === this.swipeLi.length ? this.index = 0 : this.index++
        this.moveStart();
    }

    moveStart() {
        this.move(this.swipeImg, -this.index * this.boxWidth)
    }


    //上手指滑动移动
    swipeMove(eve) {
        this.num = eve.touches[0].clientX - this.coord;
        this.swipeImg.style.left = -this.boxWidth * this.index + this.num + "px"
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
