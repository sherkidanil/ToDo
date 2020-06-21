let n=0;

addTask.onclick = function() {
  taskName=document.getElementsByTagName('input')[0].value;
  priority=document.getElementById('select').value;
  let date=()=>new Date();
  dateFromAdd=date();
  let ws=new Worksheet(n, taskName, priority);
  ws.createTask(ws.taskName, ws.priority);
  ws.taskName=document.getElementsByName('caption')[n];
  ws.changeName(ws.taskName);
  deleteButton=document.getElementsByName('deleteBut')[n];
  ws.deleteTask(deleteButton);
  doneButton=document.getElementsByName("doneBut")[n];
  cancelButton=document.getElementsByName("cancelBut")[n];
  done(doneButton,cancelButton);
  cancel(doneButton,cancelButton);
  taskDate=document.getElementsByName('taskDate')[n];
  ws.date(taskDate, dateFromAdd);
  n++;
};

done=function(doneButton, cancelButton) {
  doneButton.onclick=function() {
    let doneDate=()=>new Date();
    doneInf=document.createElement('p');
    doneButton.replaceWith(doneInf);
    doneInf.innerHTML='Завершено в <time>'+doneDate()+'</time>';
    cancelButton.remove();
  };
};
cancel=function(doneButton, cancelButton) {
  cancelButton.onclick=function() {
    let cancelDate=()=>new Date();
    cancelInf=document.createElement('p');
    doneButton.replaceWith(cancelInf);
    сancelInf.innerHTML='Отменено в '+cancelDate();
    cancelButton.remove();
  };
};


highInput.onclick = function() {
  let array=document.querySelectorAll('i');
  for (let i=0; i<n; ++i) {
    let mean=array[i].innerHTML;
    if (mean !== 'Выcокий') {array[i].parentElement.parentElement.hidden=!array[i].parentElement.parentElement.hidden};
  }
}

mediumInput.onclick = function() {
  let array=document.querySelectorAll('i');
  for (let i=0; i<n; ++i) {
    let mean=array[i].innerHTML;
    if (mean !== 'Средний') {array[i].parentElement.parentElement.hidden=!array[i].parentElement.parentElement.hidden};
  }
}

lowInput.onclick = function() {
  let array=document.querySelectorAll('i');
  for (let i=0; i<n; ++i) {
    let mean=array[i].innerHTML;
    if (mean !== 'Низкий') {array[i].parentElement.parentElement.hidden=!array[i].parentElement.parentElement.hidden};
  }
}

function Worksheet(num, taskName, priority, taskDate) {
  this.num=num;
  this.taskName=taskName;
  this.priority=priority;
  this.createTask=function(taskName, priority) {
    let task=document.createElement('div');
    task.className='worksheet';
    task.innerHTML=`
      <div class="priorityTask"><i><p id="priorityTask">Высокий</p></i></div>
      <div class="task" id="task">
        <div class="taskName" id="taskName" name="caption"><div id="newTaskName">Не задано</div></div>
        <div class="taskCancel"><button name='cancelBut'>
            <img src="img/close.png">
        </button></div>
        <div class="taskDone"><button name="doneBut">
            <img src="img/check.png">
        </button></div>
        <div class="taskDate" id="taskDate"><p name="taskDate"> Тут будет дата</p></div>
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
    priorityTask.replaceWith(priority);
  } 

  this.date=function(taskDate, dateFromAdd){
      let newDate=dateFromAdd;
      taskDate.innerHTML='<time>'+newDate+'</time>';
  }
    
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
  };

    this.deleteTask=function(deleteButton) {
        deleteButton.onclick=function() {
          deleteButton.parentElement.parentElement.remove();
          n--;
        }
      }

    this.isDone = false;
    this.isCancel= false;
  };

