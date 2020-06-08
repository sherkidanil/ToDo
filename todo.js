addTask.onclick = function() { 
    let task=document.createElement('div');
    task.className='worksheet';
    task.innerHTML=""
    let taskName=document.getElementsByTagName('input')[0].value;
    let priority=document.getElementById('select').value;


}

/* часть кода, которая отвечает за изменение названия задачи */

let area = null;
let taskName = document.getElementById('taskName');

taskName.onclick = function() {
  editStart();
};

function editStart() {
  area = document.createElement('textarea');
  area.className = 'edit';
  area.value = taskName.innerHTML;

  area.onkeydown = function(event) {
    if (event.key == 'Enter') {
      this.blur();
    }
  };

  area.onblur = function() {
    editEnd();
  };

  taskName.replaceWith(area);
  area.focus();
}

function editEnd() {
  taskName.innerHTML = area.value;
  area.replaceWith(taskName);
}

/*   
   */