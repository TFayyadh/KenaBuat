


window.onload = function() {
    let task1 = document.getElementById('list1');
    let task2 = document.getElementById('list2');
    let task3 = document.getElementById('list3');
    
    task1.addEventListener('click', (e) =>{
        task1.style.backgroundImage = "url(./img/checked.png)"
    })
    task2.addEventListener('click', (e) =>{
        task2.style.backgroundImage = "url(./img/checked.png)"
    })
    task3.addEventListener('click', (e) =>{
        task3.style.backgroundImage = "url(./img/checked.png)"
    })
}