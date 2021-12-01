let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    let task = document.getElementById('myinput').value;
    console.log(task);
    let div = document.createElement('div');
    if(task !== '')
    {
    
    div.className = 'Box';
    div.innerHTML = `<p>${task}</p> <button>X</button>`; 
    div.children[1].addEventListener('click',function(){
        div.remove();
    })
    let taskContainer = document.getElementById("task-container");
    taskContainer.appendChild(div);
    document.getElementById('myinput').value ='';
    }
    else {
        alert('Please Input Task')
    }
    div.addEventListener('click',function(){
        div.children[0].style.textDecoration = 'line-through';
        div.children[0].style.color = 'white';
    })
})