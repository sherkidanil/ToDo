addTask.onclick = function() { 
    let task=document.createElement('div');
    task.className='worksheet';
    let taskName=document.getElementsByTagName('input')[0].value;
    let priority=document.getElementById('select').value;
    task.innerHTML=`<div class="priorityTask" id="newPriorityTask"></div>
    <div class="task">
        <div class="taskName" id="newTaskName"></div>
        <div class="taskCancel"><button>
            <img src="img/close.png">
        </button></div>
        <div class="taskDate"><p>Тут будет дата</p></div>
        <div class="taskDone"><button>
            <img src="img/check.png">
        </button></div>
    </div>
    <div class="button" name="deleteTask"><button>
        <img src="img/delete.png">
    </button></div>
    </div>`
    let newTaskName=document.getElementById('newTaskName');
    let newPriority=document.getElementById('newPriorityTask');
    newTaskName=taskName;
    newPriority=priority;
    document.body.append(task);
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