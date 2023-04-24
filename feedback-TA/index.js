const feedback = JSON.parse(localStorage.getItem('feedback')) ?? []
const userFeedBack = {}
function handleAdd(index) {
  const pointFeedBack = document.querySelectorAll('.item-interface')
  const inputFeedBack = document.querySelector('.input-form')
  if (inputFeedBack.value != '') {
    userFeedBack.content = inputFeedBack.value
    feedback.push(userFeedBack)
    localStorage.setItem('feedback', JSON.stringify(feedback))
  }
  handlePoint()
}
function handlePoint(e) {
  e.style.backgroundColor = 'palevioletred'
  e.style.color = 'white'
  userFeedBack.point = e.textContent
  console.log(userFeedBack);
}
function render() {
  renderFeedback = document.querySelector('.card')
  renderReview = document.querySelector('.rating')
  // renderAveragerating = document.querySelector(".average-rating")
  sum = 0
  feedback.forEach(e => {
    console.log(e.point);
    sum += Number(e.point)
  })
  renderReview.innerHTML += `
      <p class="review">${feedback.length} Review</p>
      <p class="average-rating">Average Rating: ${sum / feedback.length}</p>`

  let table = ""
  feedback.forEach((element, index) => {
    table += `
    <div class="content-feedback">
    <div class="card-feedback">
    <p>${element.content}</p>
  </div>
  <span>${element.point}</span>
  <button onclick="handleEdit(${index})" class="btn btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
  <button onclick="handleDelete(${index})" class="btn btn-delete">x</button>
  </div>
    `
  });
  renderFeedback.innerHTML = table
}
render(feedback)

function handleDelete(index) {
  feedback.splice(index, 1);
  localStorage.setItem('feedback', JSON.stringify(feedback))
  render(feedback)
}
function handleEdit(index) {
  const editData = JSON.parse(localStorage.getItem('feedback'))
  const editContent = document.querySelector(".input-form")
  const editPoint = document.querySelectorAll('.item-interface')
  editData.forEach((e, i) => {
    if (index === i) {
      editContent.innerHTML += `${e.content}`
      console.log(e.content);
    }
  })
}