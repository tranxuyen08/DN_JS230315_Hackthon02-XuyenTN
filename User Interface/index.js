const data = JSON.parse(localStorage.getItem('data')) ?? []
const player = {
  point : 0
}
function handleAdd() {
  const createPlayer = document.querySelector('.input-player')
  console.log(createPlayer.value);
  if (createPlayer.value != '') {
    player.name = createPlayer.value
    data.push(player)
    localStorage.setItem('data', JSON.stringify(data))
  }
}
function render() {
  const renderPlayer = document.querySelector('.list-content')
  const totalPoint = document.querySelector('.point')
  let dataTable = ""
  let totalPlayer = document.querySelector('.player')
  totalPlayer.innerHTML = `<p class="player">Player: ${data.length}</p>
  `
  sum = 0
  data.forEach((e, index) => {
    sum += Number(e.point)
    dataTable += `
    <li class="item-content">
    <div class="content-left">
      <button onclick="handleDelete()" class="btn-delete">x</button>
      <i class="fa-solid fa-crown"></i>
      <p>${e.name}</p>
    </div>
    <div class="goal">
      <button onclick="handleMinus(${index})" class="btn btn-minus">-</button>
      <input type="text" value="${e.point}" readonly>
      <button onclick="handlePlus(${index})" class="btn btn-plus">+</button>
    </div>
  </li>
    `
  });
  totalPoint.innerHTML = `<p class="point">Total Point : ${sum}</p>`
  renderPlayer.innerHTML = dataTable
}
render(data)
function handlePlus(index){
  data.forEach((element, i) => {
    console.log(element);
    if(index == i){
       element.point  += 1
      localStorage.setItem('data', JSON.stringify(data))
    }
  })
  render()
}function handleMinus(index){
  data.forEach((element, i) => {
    console.log(element);
    if(index == i){
       element.point  -= 1
       if (element.point <= 0) {
          alert("het diem de tru")
          element.point  = 0
       }
      localStorage.setItem('data', JSON.stringify(data))
    }
  })
  render()
}
function handleDelete(index) {
  data.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(data))
  render(data)
}
const stopwatch = document.getElementById("stopwatch");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
function handleTime(){
  let time = 0;
  let interval;
}
function updateTime() {
  time++;
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  stopwatch.textContent = `${hours}:${minutes}:${seconds}`;
}
