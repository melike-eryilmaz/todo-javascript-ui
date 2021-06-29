//getting all required elements 
const inputBox= document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }}

    showTasks();

    addBtn.onclick = ()=>{
        let userData = inputBox.value;
        let getLocalStroge= localStorage.getItem("New Todo");
        if(getLocalStroge == null){
            listArr =[];

        }
        else{
            listArr = JSON.parse(getLocalStroge);
        }
        listArr.push(userData);
        localStorage.setItem("New Todo",JSON.stringify(listArr));
        showTasks();
        addBtn.classList.remove("active");
    }
    function showTasks(){
        let getLocalStroge= localStorage.getItem("New Todo");
        if(getLocalStroge == null){
            listArr =[];

        }
        else{
            listArr = JSON.parse(getLocalStroge);
        }
        const pendingNumb = document.querySelector(".pendingNumb");
        pendingNumb.textContent=listArr.length;
        if(listArr.length >0){
            deleteAllBtn.classList.add("active")
        }
        else{
            deleteAllBtn.classList.remove("active")
        }
        let newLiTag = '';
        listArr.forEach((element,index) => {
            newLiTag += ` <li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
        });
        todoList.innerHTML = newLiTag;
        inputBox.value = "";
    }

    function deleteTask(index){
        let getLocalStroge = localStorage.getItem("New Todo");
        listArr = JSON.parse(getLocalStroge);
        listArr.splice(index,1);

        localStorage.setItem("New Todo",JSON.stringify(listArr));
        showTasks();
    }

    deleteAllBtn.onclick = ()=>{
        listArr = [];
        localStorage.setItem("New Todo",JSON.stringify(listArr));
        showTasks();
    }