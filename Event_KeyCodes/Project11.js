const insert = document.getElementById('insert')

window.addEventListener("keydown", (event) => {
    // 注意，innerHTML不仅会改变显示的内容，同时会改变其标签 
    insert.innerHTML = ` 
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key} 
    <small>event.key</small>
    </div>

    <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class="key">
    ${event.code}
    <small>event.code</small>
    </div>

`
})