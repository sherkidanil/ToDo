let n=0;
addTask.onclick = function() {

  taskName=document.getElementsByTagName('input')[0].value;
  priority=document.getElementById('select').value;
  let ws=new Worksheet(n, taskName, priority);
  ws.createTask(ws.taskName, ws.priority);
  ws.taskName=document.getElementsByName('caption')[n];
  ws.changeName(ws.taskName);
  deleteButton=document.getElementsByName('deleteBut')[n];
  n++;
  ws.deleteTask(deleteButton);
}

function Worksheet(num, taskName, priority) {
  this.num=num;
  this.taskName=taskName;
  this.priority=priority;
  this.createTask=function(taskName, priority) {
    let task=document.createElement('div');
    task.className='worksheet';
    task.innerHTML=`
      <div class="priorityTask" id="priorityTask">Высокий</div>
      <div class="task" id="task">
        <div class="taskName" id="taskName" name="caption"><div id="newTaskName">Не задано</div></div>
        <div class="taskCancel"><button>
            <img src="img/close.png">
        </button></div>
        <div class="taskDate">Тут будет дата</div>
        <div class="taskDone"><button>
            <img src="img/check.png">
        </button></div>
    </div>
    <div class="button"><button id="deleteBut" name="deleteBut">
        <img src="img/delete.png">
    </button></div>
    </div>`
    document.body.append(task);
    let newTaskName=document.getElementById('newTaskName');
    newTaskName.replaceWith(taskName);
    newTaskName.className="taskName";
    let priorityTask=document.getElementById('priorityTask');
    priorityTask.replaceWith(priority);} 

    this.changeName=function(taskCaption) {
      taskCaption.onclick = function() {
        editStart();
        };
    
        function editStart() {
        area = document.createElement('textarea');
        area.className = 'edit';
        area.value = taskCaption.innerHTML;
    
      area.onkeydown = function(event) {
        if (event.key == 'Enter') {
          this.blur();
        }
      };
    
      area.onblur = function() {
        editEnd();
      };
    
      taskCaption.replaceWith(area);
      area.focus();
        }
    
        function editEnd() {
        taskCaption.innerHTML = area.value;
        area.replaceWith(taskCaption);
      };

    this.deleteTask=function(deleteButton) {
        deleteButton.onclick=function() {
          deleteButton.parentElement.parentElement.remove();
          n--;
        }
      }
    };

}
