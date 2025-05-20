"use server"

import React from 'react'
import TaskList from './TaskList';

const fetchTasks = async () => {
     const res = await fetch("http://localhost:3003/tasks", {
          next: {
               tags:["tasks"]
          }
     })
     const json = await res.json();

     return json;

}


const TaskListsGroup = async () => {
     
     const tasks = await fetchTasks()
       return (
            <main>
                 
                 {tasks.map((task) => <TaskList key={task.id} task={task} /> )}
    </main>
  )
}

export default TaskListsGroup