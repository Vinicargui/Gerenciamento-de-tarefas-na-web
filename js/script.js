

function addtask(){
    const tasktitle = document.querySelector("#task-title").value;
  console.log(tasktitle);

  if(tasktitle){
      //acessando o template
      const template = document.querySelector(".template");

      // clonando o template
      const newtask = template.cloneNode(true);

      // adicionar titulo
      newtask.querySelector(".task-title").textContent = tasktitle;

     
    // remover classes desnecessarias
    newtask.classList.remove("template");
    newtask.classList.remove("hide");

     // adicionar na list
     const list = document.querySelector("#task-list");
     list.appendChild(newtask);
     
     //adicionando o botão remover
    const removebtn = newtask.querySelector(".remove-btn").addEventListener("click", function() {
      removetask(this);
    });

    //adicionando botão marcar

    const donentn =newtask.querySelector(".done-btn").addEventListener("click", function(){
        marcartask(this);
    });


      // limpando caixa de texto 
      document.querySelector("#task-title").value = "";

  }
}
 
function removetask(task){
    task.parentNode.remove(true);
}

function marcartask(task){
    const taskmarcada = task.parentNode;
    taskmarcada.classList.toggle("done");
}

const addbtn = document.querySelector("#add-btn");

addbtn.addEventListener("click", function(e){

  e.preventDefault();
 
  addtask();

});