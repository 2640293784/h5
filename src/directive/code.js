function draw() {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  var code='';
  //每次绘画前，清空画板
  context.clearRect(0, 0, 120, 40);
  //顶个边框
  context.strokeRect(0, 0, 120, 40);
  //设置随机数选项
  let aCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //画出随机数
  for (let i = 0; i < 4; i++) {
    let x = 20 + 20 * i;
    let y = 20 + 10 * Math.random();
    let index = Math.floor(Math.random() * aCode.length);
    let txt = aCode[index];
    code+=txt;
    context.font = 'bold 20px 微软雅黑';
    context.fillStyle = getColor();
    //从此步开始，为字母旋转
    context.translate(x, y);
    let deg = Math.random() * 70 * Math.PI / 180;
    context.rotate(deg);
    context.fillText(txt, 0, 0);
    context.rotate(-deg);
    context.translate(-x, -y);
  }
  //设置干扰线 8条
  for (let i = 0; i < 8; i++) {
    context.beginPath();
    context.moveTo(Math.random() * 120, Math.random() * 40);
    context.lineTo(Math.random() * 120, Math.random() * 40);
    context.strokeStyle = getColor();
    context.stroke();
  }
  //设置干扰点 20 个
  for (let i = 0; i < 20; i++) {
    context.beginPath();
    let x = Math.random() * 120;
    let y = Math.random() * 40;
    context.moveTo(x, y);
    context.lineTo(x + 1, y + 1);
    context.strokeStyle = getColor();
    context.stroke();
  }
  return code;
}
//获取随机颜色
function getColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}