let btn = document.getElementById('btn');   // getting reference of button

btn.addEventListener('click',function(){
    let task = document.getElementById('myinput').value;  // fetching input value
    console.log(task);
    let div = document.createElement('div');   // Created a new div
    if(task !== '')
    {
    
    div.className = 'Box'; 
    div.innerHTML = `<div><div></div><p>${task}</p></div> <button>X</button>`; 

    // Deleting the task
    div.children[1].addEventListener('click',function(){
        div.remove();
    })
    let taskContainer = document.getElementById("task-container");

    // Appending the task in task list
    taskContainer.appendChild(div);
    document.getElementById('myinput').value ='';
    }
    else {
        alert('Please Input Task')
    }
    div.children[0].children[0].addEventListener('click',function(){
        div.children[0].children[1].style.textDecoration = 'line-through';  // Mark As Done
        div.children[0].children[1].style.color = 'white';
        let img = document.createElement('img');
        img.src = './tick.png';   
        console.log(img);
        div.children[0].children[0].appendChild(img);  // Added Tick Option
    })
    div.children[0].children[1].addEventListener('click',function(){
        div.children[0].children[1].contentEditable = true;            // Made Content Editable
    })
})