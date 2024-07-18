const jokeBtn = document.getElementById('jokeBtn')
const jokeEl = document.getElementById('joke')

jokeBtn.addEventListener('click', generateJokes)
// 初始化时直接用generateJokes函数生成的内容覆盖 //Joke goes here
generateJokes()

// 异步处理函数，通常用在请求网址的情况
async function generateJokes(){ 
    // config 为返回的内容，需要在此定义返回的格式
    const config = {
        headers: {
          Accept: 'application/json',  //Accept表示接受，后边为接受文件的类型
        },
      }
    
      // 定义结果变量，在异步处理时等待 请求网络地址，返回config
      const res = await fetch('https://icanhazdadjoke.com', config)
    
      // 让结果转为json字符串类型
      const data = await res.json()
    
      // 将data中的笑话提取并显示
      jokeEl.innerHTML = data.joke
      // 此处可以通过打印data查看数据类型，其中joke是一个变量，存储笑话的内容
      console.log('data: ', data)
}
