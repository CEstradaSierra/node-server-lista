// creo la logica para añadir una tarea 

// este el arreglo que voy a devolver como formato JSON 
const taskList=[];

//logica para añadir tarea 
// id usando funcion clousre
const genId = (function () {
    let id = 0;
  
    return function () {
      id += 1;
      return id;
    };
  })();

  const addTask = (name, description) => {
    const task = { id: genId(), name: name, description: description, state: false };
    taskList.push(task);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (taskList.includes(task)) {
          resolve(taskList);
        } else {
          reject(new Error("Error: Task not added to the list."));
        }
      }, 1000);
    });
  };
  

const grouo={
    taskList:taskList,
    genId:genId,
    addTask:addTask,
}

module.exports =grouo