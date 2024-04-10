const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1; // 默认高亮显示的元素为1

prev.disabled = true;  // 注意这里需要加上这句话，否则初始化时Prev仍可以点击且向前

next.addEventListener('click', ()=>{
    currentActive++;
    /* 颜色变色 */
    update();
});

prev.addEventListener('click', ()=>{
    currentActive--;
    update();
});

// 控制颜色改变：需注意 进度条、圆圈、按钮 三点
function update(){
    /* 圆圈根据currentActive来写 */
    circles.forEach((item, index)=>{
        if(index < currentActive){
            item.classList.add('active');
        }
        else{
            item.classList.remove('active');
        }
    })

    //控制进度条颜色变化
    progress.style.width = (currentActive-1) / (circles.length -1 ) * 100 + "%"; 

    // 按钮
    if(currentActive===1){
        prev.disabled=true;
    }
    else if(currentActive===4){
        next.disabled=true;
    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }
}