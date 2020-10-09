// function draw () {
//   const canvas = document.getElementById('canvas')
//   const context = canvas.getContext('2d')
//   var code = ''
//   // 每次绘画前，清空画板
//   context.clearRect(0, 0, 120, 40)
//   // 顶个边框
//   context.strokeRect(0, 0, 120, 40)
//   // 设置随机数选项
//   const aCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//   // 画出随机数
//   for (let i = 0; i < 4; i++) {
//     const x = 20 + 20 * i
//     const y = 20 + 10 * Math.random()
//     const index = Math.floor(Math.random() * aCode.length)
//     const txt = aCode[index]
//     code += txt
//     context.font = 'bold 20px 微软雅黑'
//     context.fillStyle = getColor()
//     // 从此步开始，为字母旋转
//     context.translate(x, y)
//     const deg = Math.random() * 70 * Math.PI / 180
//     context.rotate(deg)
//     context.fillText(txt, 0, 0)
//     context.rotate(-deg)
//     context.translate(-x, -y)
//   }
//   // 设置干扰线 8条
//   for (let i = 0; i < 8; i++) {
//     context.beginPath()
//     context.moveTo(Math.random() * 120, Math.random() * 40)
//     context.lineTo(Math.random() * 120, Math.random() * 40)
//     context.strokeStyle = getColor()
//     context.stroke()
//   }
//   // 设置干扰点 20 个
//   for (let i = 0; i < 20; i++) {
//     context.beginPath()
//     const x = Math.random() * 120
//     const y = Math.random() * 40
//     context.moveTo(x, y)
//     context.lineTo(x + 1, y + 1)
//     context.strokeStyle = getColor()
//     context.stroke()
//   }
//   return code
// }
// // 获取随机颜色
// function getColor () {
//   const r = Math.floor(Math.random() * 256)
//   const g = Math.floor(Math.random() * 256)
//   const b = Math.floor(Math.random() * 256)
//   return `rgb(${r}, ${g}, ${b})`
// }
