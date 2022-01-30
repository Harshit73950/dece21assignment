var state = {
    todos: [],
  };
  var todoListElement = document.getElementById("todo-list");
  var form = document.querySelector(".input-form");
  var inputElement = document.getElementById("todo-input");
  
  form.addEventListener("submit", addTodoItem);
  
  function addTodoItem(e) {
    e.preventDefault();
    if (inputElement.value !== "") {
      state.todos.push(inputElement.value);
      printItemToScreen(inputElement.value);
      inputElement.value = "";
    }
    console.log(state.todos);
  }
  
  function printItemToScreen(todoItem) {
    var todoHTML = `<div class="todo-item"  >
      <span id="item-${todoItem}">${todoItem}</span>
      <button onclick="doubleItem('${todoItem}')">double</button>
      <i onclick="deleteItem('${todoItem}')" class="fa fa-trash-o" style="font-size:20px;color:red"></i>
    </div>`;
    todoListElement.innerHTML += todoHTML;
    console.log(todoItem);
  }
  function deleteItem(item) {
    var index = state.todos.indexOf(item);
    state.todos.splice(index, 1);
    console.log(state.todos);
    renderArray();
  }
  
  function renderArray() {
    todoListElement.innerHTML = "";
    for (i in state.todos) {
      printItemToScreen(state.todos[i]);
    }
  }
  function printHello() {
    console.log("hellooooo");
  }
  function doubleItem(item){
    var index = state.todos.indexOf(item);
    item = item.concat(item);
    state.todos[index] = item;
    renderArray();
  }
  var state = {
    todos: [],
  };
  var todoListElement = document.getElementById("todo-list");
  var form = document.querySelector(".input-form");
  var inputElement = document.getElementById("todo-input");
  
  form.addEventListener("submit", addTodoItem);
  
  function addTodoItem(e) {
    e.preventDefault();
    if (inputElement.value !== "") {
      state.todos.push(inputElement.value);
      printItemToScreen(inputElement.value);
      inputElement.value = "";
    }
    console.log(state.todos);
  }
  
  var container = document.getElementById("container");
var table = document.getElementById("table");

  var url = "http://universities.hipolabs.com/search?country=india"

    fetch(url)
    .then((response) => {
        console.log("response first resolved");
        return response.json();
    })
  .then((data) => {
      console.log("response seconnd resolved");
      console.log(data);

        for(let i = 0; i < data.length; i++)
        {

            tr = document.createElement("tr");

           var td = document.createElement("td");
           var td1 = document.createElement("td");
          var  td2 = document.createElement("td");


            td.innerText = data[i].name;
            td1.innerText = data[i].domains[0];
            td2.innerText = data[i]["state-province"];

            tr.append(td,td1,td2)
            table.appendChild(tr)
           
        }
  })



  .catch((error) => console.log("API has failed"))

// domains: ['davietjal.org', 'abhsihek'] 
// // add only first element of this array
// name
// state-province
var container = document.getElementById("container");
var table = document.getElementById("table");

  var url = "http://universities.hipolabs.com/search?country=india"

    fetch(url)
    .then((response) => {
        console.log("response first resolved");
        return response.json();
    })
  .then((data) => {
      console.log("response seconnd resolved");
      console.log(data);

        for(let i = 0; i < data.length; i++)
        {

            tr = document.createElement("tr");

           var td = document.createElement("td");
           var td1 = document.createElement("td");
          var  td2 = document.createElement("td");


            td.innerText = data[i].name;
            td1.innerText = data[i].domains[0];
            td2.innerText = data[i]["state-province"];

            tr.append(td,td1,td2)
            table.appendChild(tr)
           
        }
  })



  .catch((error) => console.log("API has failed"))

// domains: ['davietjal.org', 'abhsihek'] 
// // add only first element of this array
// name
// state-province