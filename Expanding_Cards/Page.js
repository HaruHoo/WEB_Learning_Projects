const panels=document.querySelectorAll('.panel'); //返回的是一个数组

panels.forEach((item)=>{
    item.addEventListener('click', ()=>{
        panels.forEach((item)=>{
            item.classList.remove('active');
        })
        item.classList.add('active');
    });
});
