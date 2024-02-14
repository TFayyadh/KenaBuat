// let task1 = document.getElementById('list1');
// let task2 = document.getElementById('list2');
// let task3 = document.getElementById('list3');   
const addbtn = document.getElementById('addBtn');
const clearbtn = document.getElementById('clearBtn');
const display = document.getElementById('input-box');
const list = document.getElementById("list");

    // task1.addEventListener('click', (e) =>{
    //     task1.style.backgroundImage = "url(./img/checked.png)"
    // })
    // task2.addEventListener('click', (e) =>{
    //     task2.style.backgroundImage = "url(./img/checked.png)"
    // })
    // task3.addEventListener('click', (e) =>{
    //     task3.style.backgroundImage = "url(./img/checked.png)"
    // })

    addbtn.addEventListener('click', (e) =>{
    let li = document.createElement("li");
    li.innerHTML = display.value;
    // li.appendChild(document.createTextNode(display.value));
    list.appendChild(li); 
    display.value = "";
    saveData();
    });

clearbtn.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.parentElement.remove();
        
    }
    clearTask();
});

    
    
function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

function clearTask(){
    localStorage.removeItem("data");
    list.innerHTML = ""
}

showTask();