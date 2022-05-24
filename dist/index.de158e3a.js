console.log('hi');
let str = `/*大家好,我是deibo,
今天我来做自己第一个JS的小项目
我是练习时长1个月的前端小白
我最喜欢的是颜色是绿色
我猜你也很喜欢
对吧,那么
绿色,来!*/
#int {
    color:green
}
/*怎么样?
什么!?
你竟然不喜欢,
你喜欢阴阳的颜色
不好吧,
不要急,
给你看就是了
最初的世界,
一片混沌......*/
#yin {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: black;
}
#yang {
    position: relative;
    left: 150px;
    top: 0;
    width: 150px;
    height: 300px;
    background-color: white;
    border-radius: 0 150px 150px 0;
}

#yang::before {
    content: '';
    display: block;
    position: absolute;
    left: -50%;
    top: 0;
    width: 150px;
    height: 150px;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
    border-radius: 50%;
}
#yang::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 50%;
    width: 150px;
    height: 150px;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
    border-radius: 50%;
}
/*至终,
阴阳调和*/
`;
document.documentElement.scrollTop = '999px';
let int = document.getElementById('int');
let style = document.querySelector('style');
let n = -1;
function fn() {
    n = n + 1;
    if (n < str.length) setTimeout(()=>{
        if (str[n] === '\n') int.innerHTML = int.innerHTML + '<br> ';
        else int.innerHTML = int.innerHTML + str[n];
        style.innerHTML = style.innerHTML + str[n];
        fn();
        int.scrollTo(0, 9999);
        window.scrollTo(0, 9999);
    }, 75);
}
fn();

//# sourceMappingURL=index.de158e3a.js.map
