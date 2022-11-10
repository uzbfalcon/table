let search = document.getElementById("search");
let block = document.getElementById("blocks");
let age = document.getElementById("age");
let surname = document.getElementById("surname");
let add = document.getElementById("add");
let name = document.getElementById("name");
let clear = document.getElementById("clear")
let obj = [
  {
    id: 1,
    surname: "John",
    name: "Ueyn",
    age: 19,
  },
  {
    id: 2,
    surname: "Harry",
    name: "Kane",
    age: 22,
  },
  {
    id: 3,
    surname: "Yulia",
    name: "Ake",
    age: 18,
  },
  {
    id: 4,
    surname: "Tom",
    name: "Winks",
    age: 20
  }
];
function getG() {
  let strHTML = "";
  obj.map((v) => {
    strHTML += `<div class='User'><p class='user_id'>${v.id}.</p><p class='use_surname'>surname: ${v.surname}</p><p class='user_name'>name: ${v.name}</p><p class='user_age'>age: ${v.age}</p><button id='button'  onclick="deleteUsers(${v.id})" >delete</button></div>`;
  });
  block.innerHTML = strHTML;
}
getG();
add.addEventListener("click", () => {
  obj.push({
    id: obj.length + 1, surname: surname.value, name: name.value, age: age.value,
  });
  add.onclick((getG()))
  getG();
});

function deleteUsers(id) {
  let deleteUser = obj.filter((v) => v.id != id);
  obj = deleteUser;
  getG();
}
let data = obj;
search.addEventListener("keyup", (e) => {
  if (e.target.value.length == 0) {
    obj = data;
  } else {
    let newArr = obj.filter((v) => v.name.includes(e.target.value));
    obj = newArr;
  }
  getG();
});
