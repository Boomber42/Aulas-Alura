import React, { useState } from 'react';
import From from '../components/from';
import List from '../components/list';
import style from './app.module.scss';
import Stopwatch from '../components/stopwatch';
import { ITasks } from '../types/itasks';


function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([])
  const [selected, setSelected] = useState<ITasks>();

  function slectTask(selectedTask: ITasks){
    setSelected(selectedTask)
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task, 
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTasks(){
    if(selected){
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(tasks => {
        if(tasks.id === selected.id){
          return{
            ...tasks,
            selected: false,
            completed: true
          }
        }
        return tasks;
      }))
    }
  }

  
  return (
    <div className={style.AppStyle}>
      <From setTasks={setTasks}/>
      <List 
      tasks={tasks}
      selectedTask={slectTask}
      />
      <Stopwatch selected={selected} finishTasks={finishTasks}/>
    </div>
  );
}

export default App;
