const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// 对于sounds数组里边的元素，进行遍历
sounds.forEach(sound => { //sound为applause等元素
    // 创建button按钮，并命名为btn
    const btn = document.createElement('button')
    
    // 对于创建的名为btn的按钮，添加css里的.btn类名
    btn.classList.add('btn')

    // 显示的内容为sound
    btn.innerText = sound
    
    btn.addEventListener('click', ()=>{
        // 如果不加stopSongs()，则逐个点击各个声音时会有重叠
        stopSongs()
        //获取applause等进行播放，通过单击事件进行触发
        document.getElementById(sound).play()
    })

    // 在HTML中button里添加声明的btn按钮
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        // 当前播放停止
        song.pause()

        // 当前播放归为零秒
        song.currenTime = 0;
    })
}