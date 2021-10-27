const string = `
.face {
  border: 2px solid black;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background: rgb(236, 195, 162);
  position: absolute;
  left: 50%;
  margin-left: -125px;
  top: 113px;
}
.hair {
  position: relative;
  width: 280px;
  height: 260px;
  top: -41px;
  border-radius: 50%;
  margin-left: -21px;
  background: rgb(135, 75, 39);
  z-index: -2;
}
.hair::before {
  content: "";
  position: absolute;
  background: rgb(135, 75, 39);
  width: 30px;
  height: 30px;
  left: -1px;
  top: 130px;
  border-radius: 0 0 0 5px;
  transform: rotate(69deg);
}
.hair::after {
  content: "";
  position: absolute;
  background: rgb(135, 75, 39);
  width: 5px;
  height: 30px;
  left: -2px;
  top: 112px;
  border-top-color: transparent;
  border-radius: 0 0 0 5px;
  transform: rotate(15deg);
}
.hair .hair1 {
  position: absolute;
  width: 50px;
  height: 100px;
  background: rgb(37, 42, 56);
  left: 275px;
  top: 58px;
  border-radius: 50px 0 0 50px;
}
.hair .hair2 {
  position: absolute;
  width: 130px;
  height: 130px;
  background: rgb(37, 42, 56);
  left: -89px;
  top: -48px;
  transform: rotate(36deg);
}
.hair .hair3 {
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgb(37, 42, 56);
  border-radius: 40%;
  transform: rotate(31deg);
}
.hair .hair4 {
  position: absolute;
  width: 70px;
  height: 130px;
  background: rgb(37, 42, 56);
  left: 220px;
  top: -72px;
  border-radius: 50px 0 0 50px;
}
.hair .hair5 {
  position: absolute;
  width: 100px;
  height: 10px;
  background: rgb(37, 42, 56);
  left: 25px;
  top: 6px;
  transform: rotate(-20deg);
}
.eye {
  border: 2px solid black;
  height: 90px;
  width: 90px;
  position: absolute;
  border-radius: 50%;
  background: white;
  top: 40px;
}
  .eye.left {
  margin-left: 20px;
}
  .eye .eyeball {
  border: 2px solid black;
  height: 9px;
  width: 9px;
  position: relative;
  background: black;
  border-radius: 50%;
  left: 40px;
  top: 30px;
}
  .eye.right {
  margin-left: 135px;
}
  .eyebrow {
  position: absolute;
  border: 2px solid black;
  width: 50px;
  height: 20px;
  border-radius: 50%;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
}
.eyebrow.left {
  left: 50px;
  top: 25px;
  transform: rotate(-10deg);
}
.eyebrow.right {
  left: 145px;
  top: 25px;
  transform: rotate(10deg);
}
.nose {
  position: absolute;
  border: 2px solid black;
  width: 35px;
  height: 18px;
  border-radius: 0 20px 30px 0px;
  border-left-color: transparent;
  background-size: 20%;
  left: 110px;
  top: 127px;
  transform: rotate(25deg);
  z-index: 10;
}
.nose::before {
  content: "";
  position: absolute;
  height: 20px;
  width: 20px;
  background: rgb(236, 195, 162);
  transform: rotate(45deg) translateX(-15px);
}
.ear {
  border: 2px solid black;
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: rgb(236, 195, 162);
  z-index: -1;
}
.ear.left {
  left: -20px;
  top: 140px;
}
.ear.right {
  left: 205px;
  top: 140px;
}
.mouth {
  border: 2px solid black;
  width: 100px;
  height: 55px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 170px;
  border-radius: 50%;
  background: rgb(126, 38, 37);
}
.rainbow {
  position: relative;
  height: 160px;
  width: 80px;
  left: 50%;
  margin-left: -40px;
  top: 253px;
  display: flex;
  transform: perspective(2em) rotateX(20deg);
}
.rainbowColor {
  width: 20px;
}
.rainbowColor.purple {
  background: rgb(170, 140, 197);
  border-radius: 10px 0 0 0px;
}
.rainbowColor.blue {
  background-color: aqua;
}
.rainbowColor.yellow {
  background: rgb(238, 220, 60);
}
.rainbowColor.red {
  background: rgb(207, 36, 61);
  border-radius: 0 10px 0 0px;
}
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}
label {
  background: #eee;
  border: 6px solid rgb(177, 63, 63);
  width: 160px;
  height: 75px;
  border-radius: 80px;
  display: inline-block;
  margin: 4em auto;
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: -60px;
}
label span {
  position: absolute;
  top: 2px;
  left: 4px;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  transition: 0.5s;
  border: 2px solid #222;
}
 .icon {
        position: absolute;
        top: -45px;
        left: 3px;
        width: 50px;
        display: block;
      }
`

const player = {
  id: undefined,
  n: 1,
  time: 20,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.play()
    player.bindEvents()
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = demo.scrollHeight
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 20
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 10
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}
player.init()

