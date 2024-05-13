const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)

checkBoxes() 

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4 //获得从浏览器顶部到底部的距离的8/10作为是否滑出的边界条件

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top //遍历每个box获取其顶部到浏览器页面底部的高度

        if(boxTop < triggerBottom){
            box.classList.add('show') //若高度小于触发条件高度，则滑入
        }
        else{
            box.classList.remove('show') //否则滑出
        }
    })
}