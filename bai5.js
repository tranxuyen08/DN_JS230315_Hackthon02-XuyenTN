const staff = ["Tran Ngoc Xuyen", "Nguyen Van A", "Nguyen Van B"]
function render() {
  const renderData = document.querySelector('.render-tbody')
  dataTable = ''
  staff.forEach((elemnt, i) => {
    dataTable += `
    <tbody class="render-tbody">
        <tr>
          <td>${i + 1}</td>
          <td>${elemnt}</td>
          <td class="action" colspan="2">
            <button onclick="handleDelete(${i})" class="btn btn-delete">Delete</button>
            <button onclick="handleEdit(${i})" class="btn btn-edit">Edit</button>
          </td>
        </tr>
      </tbody>
    `
  });
  renderData.innerHTML = dataTable
}
render(staff)
//handle Creare
function handleCreate(){
  let addStaff = document.querySelector('.input-create')
  addStaff.innerHTML = `
    <input class="input" type="text" name="" id="" placeholder="Enter Your Name">
    <input onclick="handleAdd()" class="btn btn-add" type="submit" name="Submit" id="">
  `
}
//handle Add
function handleAdd(){
  const inputStaff = document.querySelector('.input').value
  console.log(inputStaff);
  if(inputStaff != '' && inputStaff.length > 0){
    staff.push(inputStaff)
    render(staff)
  }else{
    alert("Vui Lòng Nhập Thông Tin")
  }
}
// handle delete
function handleDelete(i) {
  staff.splice(i, 1)
  render(staff);
}
// handle Edit
function handleEdit(i){
  let addStaff = document.querySelector('.input-create')
  addStaff.innerHTML = `
  <input class="input" type="text" name="" id="" placeholder="Enter Your Name" value="${staff[i]}">
  <input onclick="handleAdd()" class="btn btn-add" type="submit" name="Submit" id="" style="display:none">
  <button onclick="handleUpdate(${i})" class="btn btn-update">Update</button>
  `
}
function handleUpdate(i){
  const updateStaff = document.querySelector('.input').value
  staff.splice(i, 1)
  staff.splice(i, 0, updateStaff)
  render(staff)
}