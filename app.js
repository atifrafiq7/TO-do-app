const inputbox = document.getElementById('input-box');
const list = document.getElementById('list-container')


let addTask = () =>{
    if(inputbox.value.trim() === ''){
     Swal.fire({
        icon: "error",
  title: "You Must Write Something",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
    }

    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "✖";
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
}


list.addEventListener('click' , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


let saveData = () =>{
    localStorage.setItem("data" , list.innerHTML)
}

let showList = () =>{
    list.innerHTML = localStorage.getItem('data')
}

showList();

inputbox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });